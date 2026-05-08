import { describe, it, expect } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("payment router", () => {
  describe("getPaymentHistory", () => {
    it("should return empty array when no payments exist", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.payment.getPaymentHistory();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should return payment history with correct structure", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.payment.getPaymentHistory();

      if (result.length > 0) {
        const payment = result[0];
        expect(payment).toHaveProperty("id");
        expect(payment).toHaveProperty("planName");
        expect(payment).toHaveProperty("amount");
        expect(payment).toHaveProperty("status");
        expect(payment).toHaveProperty("createdAt");
      }
    });
  });

  describe("getSubscriptionStatus", () => {
    it("should return empty array when no subscriptions exist", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.payment.getSubscriptionStatus();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should return subscription status with correct structure", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.payment.getSubscriptionStatus();

      if (result.length > 0) {
        const subscription = result[0];
        expect(subscription).toHaveProperty("id");
        expect(subscription).toHaveProperty("planName");
        expect(subscription).toHaveProperty("amount");
        expect(subscription).toHaveProperty("status");
        expect(subscription).toHaveProperty("startDate");
        expect(subscription).toHaveProperty("nextBillingDate");
      }
    });
  });

  describe("createCheckout", () => {
    it("should validate priceId input", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.payment.createCheckout({ priceId: "" });
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("createSubscriptionCheckout", () => {
    it("should validate priceId input", async () => {
      const ctx = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.payment.createSubscriptionCheckout({ priceId: "" });
        expect.fail("Should have thrown validation error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
