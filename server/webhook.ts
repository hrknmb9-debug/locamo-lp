import express from "express";
import type Stripe from "stripe";
import { ENV } from "./_core/env";
import { getStripe, handleCheckoutSessionCompleted, handleSubscriptionUpdated } from "./stripe";

export function setupStripeWebhook(app: express.Application) {
  // CRITICAL: Register raw body parser BEFORE express.json()
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req, res) => {
      if (!ENV.stripeSecretKey?.trim()) {
        console.warn("[Stripe Webhook] STRIPE_SECRET_KEY not set — ignoring webhook");
        return res.status(503).send("Stripe is not configured");
      }
      if (!ENV.stripeWebhookSecret?.trim()) {
        console.warn("[Stripe Webhook] STRIPE_WEBHOOK_SECRET not set — ignoring webhook");
        return res.status(503).send("Stripe webhook signing secret not configured");
      }

      const sig = req.headers["stripe-signature"] as string;

      let event: Stripe.Event;

      try {
        event = getStripe().webhooks.constructEvent(
          req.body,
          sig,
          ENV.stripeWebhookSecret
        );
      } catch (error) {
        console.error("[Stripe Webhook] Signature verification failed:", error);
        return res.status(400).send(`Webhook Error: ${error}`);
      }

      // CRITICAL: Handle test events
      if (event.id.startsWith("evt_test_")) {
        console.log("[Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      try {
        // Handle different event types
        switch (event.type) {
          case "checkout.session.completed":
            const session = event.data.object as Stripe.Checkout.Session;
            await handleCheckoutSessionCompleted(session);
            break;

          case "customer.subscription.updated":
            const subscription = event.data.object as Stripe.Subscription;
            await handleSubscriptionUpdated(subscription);
            break;

          case "customer.subscription.deleted":
            const deletedSubscription = event.data.object as Stripe.Subscription;
            await handleSubscriptionUpdated(deletedSubscription);
            break;

          default:
            console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
        }

        res.json({ received: true });
      } catch (error) {
        console.error("[Stripe Webhook] Error processing event:", error);
        res.status(500).json({ error: "Webhook processing failed" });
      }
    }
  );
}
