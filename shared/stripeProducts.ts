/**
 * Stripe Products & Prices for Locamo LP
 * 
 * Define all product and price information here for centralized access.
 * Price IDs are used to create checkout sessions.
 */

export const STRIPE_PRODUCTS = {
  // One-time payments (LP production)
  oneTime: {
    lpBasic: {
      name: "LP制作",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000a", // Replace with actual Stripe Price ID
      amount: 30000, // ¥30,000
      description: "シングルページLP制作",
    },
    hpStandard: {
      name: "ホームページ制作",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000b", // Replace with actual Stripe Price ID
      amount: 50000, // ¥50,000
      description: "複数ページホームページ制作",
    },
    hpPremium: {
      name: "複数ページ制作",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000c", // Replace with actual Stripe Price ID
      amount: 80000, // ¥80,000
      description: "カスタムホームページ制作",
    },
  },

  // Subscriptions (monthly hosting & domain)
  subscription: {
    basic: {
      name: "基本プラン",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000d", // Replace with actual Stripe Price ID
      amount: 3000, // ¥3,000/month
      interval: "month" as const,
      description: "月額サイト公開・ドメイン費用（基本）",
    },
    standard: {
      name: "スタンダード",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000e", // Replace with actual Stripe Price ID
      amount: 5000, // ¥5,000/month
      interval: "month" as const,
      description: "月額サイト公開・ドメイン費用（スタンダード）",
    },
    premium: {
      name: "プレミアム",
      priceId: "price_1TQ2Yz5NDjqIC6ap0000000f", // Replace with actual Stripe Price ID
      amount: 10000, // ¥10,000/month
      interval: "month" as const,
      description: "月額サイト公開・ドメイン費用（プレミアム）",
    },
  },
};

/**
 * Get all one-time payment options
 */
export function getOneTimePaymentOptions() {
  return Object.entries(STRIPE_PRODUCTS.oneTime).map(([key, product]) => ({
    id: key,
    ...product,
  }));
}

/**
 * Get all subscription options
 */
export function getSubscriptionOptions() {
  return Object.entries(STRIPE_PRODUCTS.subscription).map(([key, product]) => ({
    id: key,
    ...product,
  }));
}

/**
 * Get product by price ID
 */
export function getProductByPriceId(priceId: string) {
  // Search in one-time payments
  for (const [key, product] of Object.entries(STRIPE_PRODUCTS.oneTime)) {
    if (product.priceId === priceId) {
      return { type: "oneTime" as const, id: key, ...product };
    }
  }

  // Search in subscriptions
  for (const [key, product] of Object.entries(STRIPE_PRODUCTS.subscription)) {
    if (product.priceId === priceId) {
      return { type: "subscription" as const, id: key, ...product };
    }
  }

  return null;
}
