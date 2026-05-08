import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { createCheckoutSession, createSubscriptionCheckoutSession } from "../stripe";
import { ENV } from "../_core/env";
import { getEffectiveLpOneTimePriceId, getEffectiveMonthlyHostingPriceId } from "../_core/stripePriceIds";
import { getDb } from "../db";
import { stripePayments, stripeSubscriptions } from "../../drizzle/schema";
import { STRIPE_PRICES } from "@shared/stripeProducts";

function mapStripeCheckoutError(error: unknown): never {
  if (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    (error as { type?: string }).type === "StripeInvalidRequestError"
  ) {
    const msg = String((error as { message?: string }).message ?? "");
    if (msg.includes("No such price")) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message:
          "Stripe の Price ID が、この Secret Key に紐づくアカウント（またはテスト/本番モード）に存在しません。「Products」から API Price ID をコピーし、Manus Secrets または .env の STRIPE_PRICE_LP_CREATION / STRIPE_PRICE_MONTHLY_HOSTING に、そのキーと同じモードで設定してください。",
      });
    }
  }
  throw error;
}

export const paymentRouter = router({
  /** サーバーが Checkout で実際に使う Price ID（フロントはこれを参照） */
  getCheckoutPrices: publicProcedure.query(() => ({
    lp: {
      priceId: getEffectiveLpOneTimePriceId(),
      planName: STRIPE_PRICES.lpCreation.name,
    },
    monthly: {
      priceId: getEffectiveMonthlyHostingPriceId(),
      planName: STRIPE_PRICES.monthlyHosting.name,
    },
    usingEnvOverrides: {
      lp: Boolean(ENV.stripePriceLpCreation.trim()),
      monthly: Boolean(ENV.stripePriceMonthlyHosting.trim()),
    },
  })),
  /**
   * Create a one-time payment checkout session for LP制作
   */
  createOneTimeCheckout: protectedProcedure
    .input(
      z.object({
        priceId: z.string(),
        planName: z.string(),
      })
    )
    .mutation(async ({ ctx, input: _ignored }) => {
      const effectivePriceId = getEffectiveLpOneTimePriceId();
      const successUrl = `${ctx.req.headers.origin}/payment-success`;
      const cancelUrl = `${ctx.req.headers.origin}/pricing`;

      try {
        const session = await createCheckoutSession(
          ctx.user.id,
          effectivePriceId,
          successUrl,
          cancelUrl,
          ctx.user.email || "",
          ctx.user.name || ""
        );

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (e) {
        mapStripeCheckoutError(e);
      }
    }),

  /**
   * Create a subscription checkout session for ランニング費用
   */
  createSubscriptionCheckout: protectedProcedure
    .input(
      z.object({
        priceId: z.string(),
        planName: z.string(),
      })
    )
    .mutation(async ({ ctx }) => {
      const effectivePriceId = getEffectiveMonthlyHostingPriceId();
      const successUrl = `${ctx.req.headers.origin}/subscription-success`;
      const cancelUrl = `${ctx.req.headers.origin}/pricing`;

      try {
        const session = await createSubscriptionCheckoutSession(
          ctx.user.id,
          effectivePriceId,
          successUrl,
          cancelUrl,
          ctx.user.email || "",
          ctx.user.name || ""
        );

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (e) {
        mapStripeCheckoutError(e);
      }
    }),

  /**
   * Get user's payment history
   */
  getPaymentHistory: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) return [];

    const payments = await db
      .select()
      .from(stripePayments)
      .where(eq(stripePayments.userId, ctx.user.id))
      .orderBy(desc(stripePayments.createdAt));

    return payments.map((p) => ({
      id: p.id,
      planName: "LP制作", // TODO: Get from Stripe API or metadata
      amount: p.amountCents,
      status: p.status,
      createdAt: p.createdAt,
      invoiceUrl: null, // TODO: Get from Stripe API
    }));
  }),

  /**
   * Get user's subscription status
   */
  getSubscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) return [];

    const subs = await db
      .select()
      .from(stripeSubscriptions)
      .where(eq(stripeSubscriptions.userId, ctx.user.id))
      .orderBy(desc(stripeSubscriptions.createdAt));

    return subs.map((s) => ({
      id: s.id,
      planName: "月額ホスティング", // TODO: Get from Stripe API or metadata
      amount: 3000, // TODO: Get from Stripe API
      status: s.status,
      startDate: s.currentPeriodStart || s.createdAt,
      nextBillingDate: s.currentPeriodEnd,
    }));
  }),
});
