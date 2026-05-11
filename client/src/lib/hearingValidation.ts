/** 電話番号の妥当性（日本の一般番号／+81 表記など）。数字以外は無視して判定 */
export function isLikelyPhoneNumber(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return false;
  if (digits.startsWith('0') && (digits.length === 10 || digits.length === 11)) return true;
  /** +81 で始まる国際電話番号の一般的な桁数 */
  if (digits.startsWith('81') && digits.length >= 12 && digits.length <= 14) return true;
  return false;
}

export function trimmedFieldLen(values: Record<string, string>, id: string): number {
  return (values[id] ?? '').trim().length;
}
