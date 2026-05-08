/**
 * Stripe Price IDs は「Secret Key と同じアカウント・同じモード」のダッシュボードに存在する必要がある。
 * リポジトリの既定値が別環境由来だと Stripe が「No such price」を返すため、運用では .env で上書きする。
 */

import { ENV } from "./env";
import { STRIPE_PRICES } from "@shared/stripeProducts";

export function getEffectiveLpOneTimePriceId(): string {
  return ENV.stripePriceLpCreation.trim() || STRIPE_PRICES.lpCreation.priceId;
}

export function getEffectiveMonthlyHostingPriceId(): string {
  return ENV.stripePriceMonthlyHosting.trim() || STRIPE_PRICES.monthlyHosting.priceId;
}
