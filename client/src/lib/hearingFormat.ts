import type { HearingEntry } from '@shared/hearingIngest';

/** Instagram DM 貼り付け用に整形したテキスト */
export function formatHearingForClipboard(entries: HearingEntry[]): string {
  const lines = entries.map((e, i) => {
    const v = (e.value ?? '').trim() || '（未記入）';
    return `【${i + 1}. ${e.label}】\n${v}`;
  });
  return ['【Locamo ヒアリング】', '', ...lines].join('\n\n');
}
