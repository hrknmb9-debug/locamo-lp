import type { HearingEntry, HearingSubmitBody } from '@shared/hearingIngest';

import { formatHearingForClipboard } from '@/lib/hearingFormat';

export async function submitHearingOnline(
  body: HearingSubmitBody,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const r = await fetch('/api/hearing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = (await r.json()) as { ok?: boolean; error?: string };
    if (!r.ok || data.ok !== true) {
      return { ok: false, error: typeof data.error === 'string' ? data.error : 'request_failed' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'network' };
  }
}

export async function copyHearingToClipboard(entries: HearingEntry[]): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(formatHearingForClipboard(entries));
    return true;
  } catch {
    return false;
  }
}

/** インテント／ユニバーサルリンクで Instagram（アプリ優先の起動に寄せる） */
export function navigateToInstagramDm(dmUrl: string): void {
  window.location.assign(dmUrl);
}
