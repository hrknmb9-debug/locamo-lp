/**
 * Stripe Helper Functions
 * 
 * Centralized Stripe operations for payment processing.
 */

import Stripe from "stripe";
import { ENV } from "./_core/env";
import { getDb } from "./db";
import { stripeCustomers, stripePayments, stripeSubscriptions } from "../drizzle/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(ENV.stripeSecretKey, {
  apiVersion: "2026-04-22.dahlia",
});

/**
 * Get or create a Stripe customer for a user
 */
export async function getOrCreateStripeCustomer(userId: number, email?: string, name?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if customer already exists
  const existing = await db
    .select()
    .from(stripeCustomers)
    .where(eq(stripeCustomers.userId, userId))
    .limit(1);

  if (existing.length > 0) {
    return existing[0].stripeCustomerId;
  }

  // Create new Stripe customer
  const customer = await stripe.customers.create({
    email,
    name,
    metadata: {
      userId: userId.toString(),
    },
  });

  // Save to database
  await db.insert(stripeCustomers).values({
    userId,
    stripeCustomerId: customer.id,
  });

  return customer.id;
}

/**
 * Create a checkout session for one-time payment
 */
export async function createCheckoutSession(
  userId: number,
  priceId: string,
  successUrl: string,
  cancelUrl: string,
  email?: string,
  name?: string,
) {
  const stripeCustomerId = await getOrCreateStripeCustomer(userId, email, name);

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: userId.toString(),
    metadata: {
      user_id: userId.toString(),
      customer_email: email || "",
      customer_name: name || "",
    },
    allow_promotion_codes: true,
  });

  return session;
}

/**
 * Create a checkout session for subscription
 */
export async function createSubscriptionCheckoutSession(
  userId: number,
  priceId: string,
  successUrl: string,
  cancelUrl: string,
  email?: string,
  name?: string,
) {
  const stripeCustomerId = await getOrCreateStripeCustomer(userId, email, name);

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: userId.toString(),
    metadata: {
      user_id: userId.toString(),
      customer_email: email || "",
      customer_name: name || "",
    },
    allow_promotion_codes: true,
  });

  return session;
}

/**
 * Handle checkout.session.completed webhook
 */
export async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const userId = parseInt(session.client_reference_id || "0");
  if (!userId) {
    console.error("[Stripe] Invalid client_reference_id:", session.client_reference_id);
    return;
  }

  // Handle subscription mode
  if (session.mode === "subscription") {
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

    const priceId = (subscription.items.data[0]?.price.id || "") as string;

    await db.insert(stripeSubscriptions).values({
      userId,
      stripeSubscriptionId: subscription.id,
      stripePriceId: priceId,
      status: subscription.status as "active" | "past_due" | "canceled" | "paused",
      currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
      currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
    });

    console.log("[Stripe] Subscription created:", subscription.id);
  }

  // Handle payment mode
  if (session.mode === "payment") {
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);

    if (paymentIntent.status === "succeeded") {
      const priceId = session.line_items?.data[0]?.price?.id || "";
      const currency = paymentIntent.currency?.toUpperCase() || "JPY";

      if (priceId) {
        await db.insert(stripePayments).values({
          userId,
          stripePaymentIntentId: paymentIntent.id,
          stripePriceId: priceId,
          amountCents: paymentIntent.amount,
          currency: currency,
          status: "succeeded",
        });
      }

      console.log("[Stripe] Payment succeeded:", paymentIntent.id);
    }
  }
}

/**
 * Handle subscription update webhook
 */
export async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await db
    .select()
    .from(stripeSubscriptions)
    .where(eq(stripeSubscriptions.stripeSubscriptionId, subscription.id))
    .limit(1);

  if (existing.length === 0) {
    console.warn("[Stripe] Subscription not found:", subscription.id);
    return;
  }

  await db
    .update(stripeSubscriptions)
    .set({
      status: subscription.status as "active" | "past_due" | "canceled" | "paused",
      currentPeriodStart: new Date((subscription as any).current_period_start * 1000),
      currentPeriodEnd: new Date((subscription as any).current_period_end * 1000),
      cancelAtPeriodEnd: (subscription as any).cancel_at_period_end ? 1 : 0,
    })
    .where(eq(stripeSubscriptions.stripeSubscriptionId, subscription.id));

  console.log("[Stripe] Subscription updated:", subscription.id);
}

/**
 * Handle subscription deleted webhook
 */
export async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(stripeSubscriptions)
    .set({
      status: "canceled",
    })
    .where(eq(stripeSubscriptions.stripeSubscriptionId, subscription.id));

  console.log("[Stripe] Subscription canceled:", subscription.id);
}

/**
 * Get user's active subscription
 */
export async function getUserActiveSubscription(userId: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(stripeSubscriptions)
    .where(eq(stripeSubscriptions.userId, userId))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

/**
 * Get user's payment history
 */
export async function getUserPaymentHistory(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(stripePayments).where(eq(stripePayments.userId, userId));
}

/**
 * Cancel user's subscription
 */
export async function cancelUserSubscription(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const subscription = await getUserActiveSubscription(userId);
  if (!subscription) {
    throw new Error("No active subscription found");
  }

  await stripe.subscriptions.cancel(subscription.stripeSubscriptionId);

  await db
    .update(stripeSubscriptions)
    .set({
      status: "canceled",
    })
    .where(eq(stripeSubscriptions.stripeSubscriptionId, subscription.stripeSubscriptionId));

  console.log("[Stripe] Subscription canceled by user:", subscription.stripeSubscriptionId);
}

export { stripe };
