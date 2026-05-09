import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { protectedProcedure, router } from "../_core/trpc";
import { createCheckoutSession, createSubscriptionCheckoutSession } from "../stripe";
import { ENV } from "../_core/env";
import { getDb } from "../db";
import { stripePayments, stripeSubscriptions } from "../../drizzle/schema";

export const paymentRouter = router({
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
    .mutation(async ({ ctx, input }) => {
      const successUrl = `${ctx.req.headers.origin}/payment-success`;
      const cancelUrl = `${ctx.req.headers.origin}/pricing`;

      const session = await createCheckoutSession(
        ctx.user.id,
        input.priceId,
        successUrl,
        cancelUrl,
        ctx.user.email || "",
        ctx.user.name || ""
      );

      return {
        sessionId: session.id,
        url: session.url,
      };
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
    .mutation(async ({ ctx, input }) => {
      const successUrl = `${ctx.req.headers.origin}/subscription-success`;
      const cancelUrl = `${ctx.req.headers.origin}/pricing`;

      const session = await createSubscriptionCheckoutSession(
        ctx.user.id,
        input.priceId,
        successUrl,
        cancelUrl,
        ctx.user.email || "",
        ctx.user.name || ""
      );

      return {
        sessionId: session.id,
        url: session.url,
      };
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
