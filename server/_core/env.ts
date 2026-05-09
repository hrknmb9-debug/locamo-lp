export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  // Stripe keys - MUST come from environment variables ONLY (no hardcoded fallbacks)
  stripeSecretKey: (() => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY environment variable is required");
    return key;
  })(),
  stripeWebhookSecret: (() => {
    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!secret) throw new Error("STRIPE_WEBHOOK_SECRET environment variable is required");
    return secret;
  })(),
  // Stripe Checkout の success_url 用など。未設定時は Host / X-Forwarded-* から推測する
  publicAppUrl: process.env.PUBLIC_APP_URL ?? "https://locamolp-tlkk59sz.manus.space",
  // Stripe Price IDs - MUST come from environment variables ONLY (no hardcoded fallbacks)
  stripePriceLpCreation: (() => {
    const priceId = process.env.STRIPE_PRICE_LP_CREATION;
    if (!priceId) throw new Error("STRIPE_PRICE_LP_CREATION environment variable is required");
    return priceId;
  })(),
  stripePriceMonthlyHosting: (() => {
    const priceId = process.env.STRIPE_PRICE_MONTHLY_HOSTING;
    if (!priceId) throw new Error("STRIPE_PRICE_MONTHLY_HOSTING environment variable is required");
    return priceId;
  })(),
};
