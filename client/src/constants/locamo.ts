/** Locamo の外部リンク（変更はここに集約） */
export const IG_URL =
  'https://www.instagram.com/locamo.inc/' as const;

/** LINE 公式アカウント（問い合わせ・相談の主要チャネル） */
export const LINE_URL = 'https://lin.ee/6iY64MD' as const;

/**
 * Instagram DM 起動（プロフィールのユーザー名に対応）。
 * ヒアリング送信フローと必ず同一にすること:
 * - `/hearing` の「コピーしてInstagramのDMへ」および再試行（`navigateToInstagramDm`）
 * - LP 内「Instagram / DMで相談」系のリンク
 * @deprecated LINE への統合に伴い、今後は LINE_URL を使用
 */
export const DM_URL = 'https://ig.me/m/locamo.inc' as const;

export const IG_HANDLE = '@locamo.inc' as const;
