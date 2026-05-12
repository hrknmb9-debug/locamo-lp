/** クライアントルート（App.tsx の `<Route>` と完全一致させること） */

/** 旧フォームURLのブックマーク互換（公式LINEへ誘導） */
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
