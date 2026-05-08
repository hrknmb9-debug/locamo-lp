import type { HearingEntry } from '@shared/hearingIngest';

/** 控え・手動送信用に整形したテキスト（主経路はサーバー `/api/hearing`） */
export function formatHearingForClipboard(entries: HearingEntry[]): string {
  const lines = entries.map((e, i) => {
    const v = (e.value ?? '').trim() || '（未記入）';
    return `【${i + 1}. ${e.label}】\n${v}`;
  });
  return ['【Locamo ヒアリング】', '', ...lines].join('\n\n');
}
