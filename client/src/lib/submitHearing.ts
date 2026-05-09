import type { HearingEntry } from '@shared/hearingIngest';

import { formatHearingForClipboard } from '@/lib/hearingFormat';
import { openExternalUrl } from '@/lib/openExternalUrl';

export async function copyHearingToClipboard(entries: HearingEntry[]): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(formatHearingForClipboard(entries));
    return true;
  } catch {
    return false;
  }
}

/**
 * Instagram DM へ誘導。
 * iframe プレビューでは子ウィンドウのみ `assign` すると ig.me が `X-Frame-Options: deny` で表示拒否になり得るため、まず `window.top` で最上位へ遷移する。
 * top が変更できない（sandbox 等）ときは `_blank`。通常の単独タブでは従来どおり `location.assign`。
 */
export function navigateToInstagramDm(dmUrl: string): void {
  try {
    if (window.self !== window.top && window.top) {
      window.top.location.assign(dmUrl);
      return;
    }
  } catch {
    openExternalUrl(dmUrl);
    return;
  }

  window.location.assign(dmUrl);
}
