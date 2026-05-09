export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  // Stripe live mode keys (hardcoded for production - always use live keys)
  stripeSecretKey: "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",
  stripeWebhookSecret: "whsec_SJTTC0OhsOP2Eu4lQJk1NuFtMXJ2vNwJ",
  // Stripe Checkout の success_url 用など。未設定時は Host / X-Forwarded-* から推測する
  publicAppUrl: process.env.PUBLIC_APP_URL ?? "https://locamolp-tlkk59sz.manus.space",
  // Secret Key と同じアカウント・同じモードの Price API ID (hardcoded for production)
  stripePriceLpCreation: process.env.STRIPE_PRICE_LP_CREATION || "price_1TV9LR7nv8WWcHmoIiJKYRM0",
  stripePriceMonthlyHosting: process.env.STRIPE_PRICE_MONTHLY_HOSTING || "price_1TUqxU7nv8WWcHmoT7AnbBnY",
};
