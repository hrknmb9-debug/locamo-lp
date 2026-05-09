import type { Request } from "express";
import { ENV } from "./env";

/**
 * Checkout の success/cancel に使う公開オリジン（例 https://example.com）。
 * Origin だけに依存しない（同一オリジンの tRPC POST では Origin が無いことがある）。
 */
export function getPublicBaseUrl(req: Request): string {
  const configured = ENV.publicAppUrl.trim().replace(/\/+$/, "");
  if (configured) {
    return configured;
  }

  const origin = typeof req.headers.origin === "string" ? req.headers.origin.trim() : "";
  if (/^https?:\/\/.+/i.test(origin)) {
    return origin.replace(/\/+$/, "");
  }

  const host = req.get("host");
  const xfProto = req.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto = xfProto || req.protocol || "https";

  if (host) {
    return `${proto}://${host.replace(/\/+$/, "")}`.replace(/\/+$/, "");
  }

  throw new Error(
    "公開 URL が判定できません。Manus Secrets または .env に PUBLIC_APP_URL（例: https://あなたのドメイン）を設定してください。",
  );
}
