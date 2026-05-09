export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  // Stripe keys - MUST come from environment variables (Manus Secrets)
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "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",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || (() => {
    throw new Error("STRIPE_WEBHOOK_SECRET environment variable is required");
  })(),
  // Stripe Checkout の success_url 用など。未設定時は Host / X-Forwarded-* から推測する
  publicAppUrl: process.env.PUBLIC_APP_URL ?? "https://locamolp-tlkk59sz.manus.space",
  // Stripe Price IDs - MUST come from environment variables (Manus Secrets)
  stripePriceLpCreation: process.env.STRIPE_PRICE_LP_CREATION ?? "price_1TVDbG7nv8WWcHmoWEH8fZVa",
  stripePriceMonthlyHosting: process.env.STRIPE_PRICE_MONTHLY_HOSTING ?? "price_1TVDcE7nv8WWcHmoD3J8QvUU",
};
