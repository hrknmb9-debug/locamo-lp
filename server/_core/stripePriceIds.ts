/**
 * Stripe Price IDs は Secret Key と同じアカウント・同じモードに存在する必要がある。
 */

import { ENV } from "./env";
import { STRIPE_PRICES } from "@shared/stripeProducts";

export function getEffectiveLpOneTimePriceId(): string {
  return ENV.stripePriceLpCreation.trim() || STRIPE_PRICES.lpCreation.priceId;
}

export function getEffectiveMonthlyHostingPriceId(): string {
  return ENV.stripePriceMonthlyHosting.trim() || STRIPE_PRICES.monthlyHosting.priceId;
}
