import type { HearingEntry } from '@shared/hearingIngest';

import { formatHearingForClipboard } from '@/lib/hearingFormat';

export async function copyHearingToClipboard(entries: HearingEntry[]): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(formatHearingForClipboard(entries));
    return true;
  } catch {
    return false;
  }
}

/** インナーブラウザから Instagram（アプリ起動につなげやすい同一タブ遷移） */
export function navigateToInstagramDm(dmUrl: string): void {
  window.location.assign(dmUrl);
}
