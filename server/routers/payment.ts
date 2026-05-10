import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import type { Request } from "express";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { createCheckoutSession, createSubscriptionCheckoutSession } from "../stripe";
import { createCheckoutSessionViaMcp } from "../stripe-mcp";
import { ENV } from "../_core/env";
import type { TrpcContext } from "../_core/context";
import { getEffectiveLpOneTimePriceId, getEffectiveMonthlyHostingPriceId } from "../_core/stripePriceIds";
import { getPublicBaseUrl } from "../_core/publicUrl";
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
          "Stripe の Price ID が、この Secret Key に紐づくアカウント（またはテスト/本番モード）に存在しません。ダッシュボードの Products から Price ID を確認し、Manus Secrets の STRIPE_PRICE_LP_CREATION / STRIPE_PRICE_MONTHLY_HOSTING で上書きするか、そのアカウント・モード用の値を shared/stripeProducts.ts にしてください。",
      });
    }
    if (msg.includes("Not a valid URL") || msg.includes("Invalid URL")) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message:
          "Checkout の戻り URL が Stripe に受理されていません。PUBLIC_APP_URL を https で設定するか、プロキシの Host / X-Forwarded-Proto を確認してください。",
      });
    }
  }
  throw error;
}

function requirePublicBase(req: TrpcContext["req"]): string {
  try {
    return getPublicBaseUrl(req as Request);
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "サイトの公開 URL を判定できません。PUBLIC_APP_URL を設定してください。";
    throw new TRPCError({ code: "BAD_REQUEST", message });
  }
}

export const paymentRouter = router({
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

  createOneTimeCheckout: protectedProcedure
    .input(
      z.object({
        priceId: z.string(),
        planName: z.string(),
      }),
    )
    .mutation(async ({ ctx, input: _ignored }) => {
      const effectivePriceId = getEffectiveLpOneTimePriceId();
      const baseUrl = requirePublicBase(ctx.req);
      const successUrl = `${baseUrl}/payment-success`;
      const cancelUrl = `${baseUrl}/pricing`;

      try {
        // Use Stripe MCP to bypass local Secret Key injection issues
        console.log("[Payment Router] Creating checkout with Price ID:", effectivePriceId);
        const session = await createCheckoutSessionViaMcp(
          ctx.user.id,
          effectivePriceId,
          successUrl,
          cancelUrl,
          ctx.user.email || "",
          ctx.user.name || "",
        );
        console.log("[Payment Router] Checkout created successfully:", session.url);
        return {
          sessionId: session.sessionId || "",
          url: session.url,
        };
      } catch (e) {
        console.error("[Payment Router] Checkout creation failed:", e);
        mapStripeCheckoutError(e);
      }
    }),

  createSubscriptionCheckout: protectedProcedure
    .input(
      z.object({
        priceId: z.string(),
        planName: z.string(),
      }),
    )
    .mutation(async ({ ctx, input: _ignored }) => {
      const effectivePriceId = getEffectiveMonthlyHostingPriceId();
      const baseUrl = requirePublicBase(ctx.req);
      const successUrl = `${baseUrl}/subscription-success`;
      const cancelUrl = `${baseUrl}/pricing`;

      try {
        // Subscriptions require full Stripe API access, fall back to native client
        const session = await createSubscriptionCheckoutSession(
          ctx.user.id,
          effectivePriceId,
          successUrl,
          cancelUrl,
          ctx.user.email || "",
          ctx.user.name || "",
        );
        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (e) {
        mapStripeCheckoutError(e);
      }
    }),

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
      planName: "LP制作",
      amount: p.amountCents,
      status: p.status,
      createdAt: p.createdAt,
      invoiceUrl: null,
    }));
  }),

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
      planName: "月額ホスティング",
      amount: 3000,
      status: s.status,
      startDate: s.currentPeriodStart || s.createdAt,
      nextBillingDate: s.currentPeriodEnd,
    }));
  }),
});
