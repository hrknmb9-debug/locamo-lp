export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  /** 同一 Stripe アカウントかつ Secret Key と同じモードの Price ID（例: Dashboard → Products → Price → API ID） */
  stripePriceLpCreation: process.env.STRIPE_PRICE_LP_CREATION ?? "",
  stripePriceMonthlyHosting: process.env.STRIPE_PRICE_MONTHLY_HOSTING ?? "",
};
