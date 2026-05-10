/**
 * Environment configuration for Locamo LP.
 *
 * Stripe credentials and Price IDs can be overridden via environment variables.
 * If not provided, the system will use defaults from stripeProducts.ts or the Stripe MCP bridge.
 */
export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  // Stripe Checkout の success_url 用など。未設定時は Host / X-Forwarded-* から推測する
  publicAppUrl: process.env.PUBLIC_APP_URL ?? "https://locamolp-tlkk59sz.manus.space",
  // Stripe keys - optional environment variable overrides
  // If not provided, the Stripe MCP bridge will handle authentication
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  // Stripe Price IDs - optional environment variable overrides
  // If not provided, stripePriceIds.ts will use defaults from stripeProducts.ts
  stripePriceLpCreation: process.env.STRIPE_PRICE_LP_CREATION ?? "",
  stripePriceMonthlyHosting: process.env.STRIPE_PRICE_MONTHLY_HOSTING ?? "",
};
