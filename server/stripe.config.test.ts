import { describe, expect, it } from "vitest";
import { STRIPE_PRICES } from "@shared/stripeProducts";
import { getEffectiveLpOneTimePriceId, getEffectiveMonthlyHostingPriceId } from "./_core/stripePriceIds";

/**
 * Stripe への実リクエストは行わない。Manus にある実キー・URL をソースに書かないこと。
 */
describe("Stripe Checkout price IDs (resolver only)", () => {
  it("falls back to shared/stripeProducts when STRIPE_PRICE_* は未設定", () => {
    expect(getEffectiveLpOneTimePriceId()).toBe(STRIPE_PRICES.lpCreation.priceId);
    expect(getEffectiveMonthlyHostingPriceId()).toBe(STRIPE_PRICES.monthlyHosting.priceId);
  });
});
