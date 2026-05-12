/** Locamo の外部リンク（変更はここに集約） */
export const IG_URL =
  'https://www.instagram.com/locamo.inc/' as const;

export const IG_HANDLE = '@locamo.inc' as const;

/**
 * お問い合わせ・ご依頼の窓口（公式LINE）。
 * 環境変数 `VITE_LINE_OFFICIAL_URL` があればそちらを優先（検証用アカウントなどで差し替え可能）。
 */
export const LINE_OFFICIAL_URL: string =
  typeof import.meta.env.VITE_LINE_OFFICIAL_URL === 'string' && import.meta.env.VITE_LINE_OFFICIAL_URL.trim() !== ''
    ? import.meta.env.VITE_LINE_OFFICIAL_URL.trim()
    : 'https://lin.ee/qNYp6w5';
