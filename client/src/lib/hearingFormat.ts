import type { HearingEntry } from '@shared/hearingIngest';

/** DM貼り付け用テキスト（サーバー側 formatHearingText と同じ並び） */
export function formatHearingForClipboard(entries: HearingEntry[]): string {
  const lines = entries.map((e, i) => {
    const v = (e.value ?? '').trim() || '（未記入）';
    return `【${i + 1}. ${e.label}】\n${v}`;
  });
  return ['【Locamo ヒアリング・バックアップ】', '', ...lines].join('\n\n');
}
