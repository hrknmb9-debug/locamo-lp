/** クライアントルート（App.tsx の `<Route>` と完全一致させること） */
export const HEARING_PATH = '/hearing' as const;

/** デザイン確認用（検索に載せない想定） */
export const LP_ILLUSTRATIONS_PREVIEW_PATH = '/lp-illustrations' as const;

/**
 * `vite.config` の `base` と揃える。未定義または `/` のときはサイト直下。
 * そのとき wouter はデフォルト挙動（フル pathname をそのまま相対へ分解しない）。
 */
export function getWouterRouterBase(): string | undefined {
  const v = import.meta.env.BASE_URL;
  if (typeof v !== 'string') return undefined;
  const t = v.trim();
  // サイト直下または相対アセットのみ（ ./ ）構成ではこれまでどおり親ルーターに委ねる
  if (!t || t === '/' || t === './' || t === '.') return undefined;
  const noTrailing = t.replace(/\/+$/, '');
  return noTrailing || undefined;
}

/**
 * アドレスバーでのフルパス `<a>` 用（履歴復帳・SSR 直下 GET との兼ね合いで使う）。
 * 例: `base` が `/subdir/` のとき `/subdir/hearing`。
 */
export function hearingLandingHref(): string {
  const raw =
    typeof import.meta.env.BASE_URL === 'string' ? import.meta.env.BASE_URL.trim() : '/';
  if (raw === '/' || raw === '.' || raw === './') return HEARING_PATH;
  const prefix = raw.endsWith('/') ? raw : `${raw}/`;
  const rest = HEARING_PATH.startsWith('/') ? HEARING_PATH.slice(1) : HEARING_PATH;
  const joined = `${prefix}${rest}`;
  const normalized = joined.replace(/\/{2,}/g, '/');
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}
