/**
 * Stripe Products & Prices for Locamo LP — **single source of truth** for Price IDs.
 *
 * 「LP制作」「月額管理費」は Stripe ダッシュボードと必ず同期すること。
 */

export const STRIPE_PRODUCTS = {
  // One-time payments (LP production)
  oneTime: {
    lpBasic: {
      name: "LP制作",
      priceId: "price_1TVDbG7nv8WWcHmoWEH8fZVa", // LP制作 ¥36,300（税込み）
      amount: 36300, // ¥36,300（税込み）
      description: "シングルページLP制作",
    },
    // TODO: Add actual Stripe Price ID for HP Standard from Stripe Dashboard
    // hpStandard: {
    //   name: "ホームページ制作",
    //   priceId: "price_XXXXXXXXXXXXX", // Replace with actual Stripe Price ID
    //   amount: 50000, // ¥50,000
    //   description: "複数ページホームページ制作",
    // },
    // TODO: Add actual Stripe Price ID for HP Premium from Stripe Dashboard
    // hpPremium: {
    //   name: "複数ページ制作",
    //   priceId: "price_XXXXXXXXXXXXX", // Replace with actual Stripe Price ID
    //   amount: 80000, // ¥80,000
    //   description: "カスタムホームページ制作",
    // },
  },

  // Subscriptions (monthly hosting & domain)
  subscription: {
    basic: {
      name: "Locamo月額管理費",
      priceId: "price_1TVDcE7nv8WWcHmoD3J8QvUU", // 月額管理費 ¥3,300/月（税込み）
      amount: 3300, // ¥3,300/month（税込み）
      interval: "month" as const,
      description: "月額サイト公開・ドメイン費用（基本）",
    },
    // TODO: Add actual Stripe Price ID for Standard subscription from Stripe Dashboard
    // standard: {
    //   name: "スタンダード",
    //   priceId: "price_XXXXXXXXXXXXX", // Replace with actual Stripe Price ID
    //   amount: 5000, // ¥5,000/month
    //   interval: "month" as const,
    //   description: "月額サイト公開・ドメイン費用（スタンダード）",
    // },
    // TODO: Add actual Stripe Price ID for Premium subscription from Stripe Dashboard
    // premium: {
    //   name: "プレミアム",
    //   priceId: "price_XXXXXXXXXXXXX", // Replace with actual Stripe Price ID
    //   amount: 10000, // ¥10,000/month
    //   interval: "month" as const,
    //   description: "月額サイト公開・ドメイン費用（プレミアム）",
    // },
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
 * Convenience exports for common prices
 */
export const STRIPE_PRICES = {
  lpCreation: STRIPE_PRODUCTS.oneTime.lpBasic,
  // hpCreation: STRIPE_PRODUCTS.oneTime.hpStandard, // Commented out - add when HP Standard Price ID is available
  monthlyHosting: STRIPE_PRODUCTS.subscription.basic,
};

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
