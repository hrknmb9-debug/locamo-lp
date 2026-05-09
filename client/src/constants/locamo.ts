/** Locamo の外部リンク（変更はここに集約） */
export const IG_URL =
  'https://www.instagram.com/locamo.inc/' as const;

/**
 * Instagram DM 起動（プロフィールのユーザー名に対応）。
 * ヒアリング送信フローと必ず同一にすること:
 * - `/hearing` の「コピーしてInstagramのDMへ」および再試行（`navigateToInstagramDm`）
 * - LP 内「Instagram / DMで相談」系のリンク
 */
export const DM_URL = 'https://ig.me/m/locamo.inc' as const;

export const IG_HANDLE = '@locamo.inc' as const;
