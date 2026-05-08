import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { createCheckoutSession, createSubscriptionCheckoutSession } from "../stripe";
import { ENV } from "../_core/env";

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
    // TODO: Implement payment history retrieval from database
    return [];
  }),

  /**
   * Get user's subscription status
   */
  getSubscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    // TODO: Implement subscription status retrieval
    return null;
  }),
});
