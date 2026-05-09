import { describe, it, expect } from "vitest";
import { ENV } from "./_core/env";
import { getStripe } from "./stripe";

describe("Stripe Configuration Validation", () => {
  it("should have live mode API key configured (hardcoded fallback)", () => {
    expect(ENV.stripeSecretKey).toBeDefined();
    // Should be hardcoded live key if env var is not set
    expect(ENV.stripeSecretKey).toContain("sk_live_51TUoEH7nv8WWcHmo");
  });

  it("should have webhook secret configured (hardcoded fallback)", () => {
    expect(ENV.stripeWebhookSecret).toBeDefined();
    // Should be hardcoded webhook secret if env var is not set
    expect(ENV.stripeWebhookSecret).toContain("whsec_SJTTC0OhsOP2Eu4lQJk1NuFtMXJ2vNwJ");
  });

  it("should initialize Stripe client successfully", () => {
    const stripe = getStripe();
    expect(stripe).toBeDefined();
  });

  it("should have Price IDs available via environment", () => {
    const lpPrice = process.env.STRIPE_PRICE_LP_CREATION;
    const hostingPrice = process.env.STRIPE_PRICE_MONTHLY_HOSTING;
    const publicUrl = process.env.PUBLIC_APP_URL;

    expect(lpPrice).toBe("price_1TV9LR7nv8WWcHmoIiJKYRM0");
    expect(hostingPrice).toBe("price_1TUqxU7nv8WWcHmoT7AnbBnY");
    expect(publicUrl).toBe("https://locamolp-tlkk59sz.manus.space");
  });

  it("should verify Stripe client uses live mode account", async () => {
    const stripe = getStripe();
    const account = await stripe.accounts.retrieve();
    // Verify we're using the correct live account
    expect(account.id).toBe("acct_1TUoEH7nv8WWcHmo");
  });
});
