import fs from 'node:fs/promises';
import path from 'node:path';

export type HearingEntry = { id: string; label: string; value: string };

export type HearingSubmitBody = {
  entries?: HearingEntry[];
  /** スパム用の空項目（`website` は自動入力されるため禁止） */
  trap?: string;
};

function chunkText(body: string, max: number): string[] {
  const parts: string[] = [];
  for (let i = 0; i < body.length; i += max) {
    parts.push(body.slice(i, i + max));
  }
  return parts.length ? parts : [''];
}

export function formatHearingText(entries: HearingEntry[]): string {
  const lines = entries.map((e, i) => {
    const v = (e.value ?? '').trim() || '（未記入）';
    return `【${i + 1}. ${e.label}】\n${v}`;
  });
  const head = `【Locamo ヒアリング】送信: ${new Date().toISOString()}`;
  return [head, '', ...lines].join('\n\n');
}

async function postDiscordWebhook(url: string, text: string): Promise<void> {
  for (const part of chunkText(text, 1900)) {
    const safe = part.length > 2000 ? part.slice(0, 2000) : part;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: safe }),
    });
    if (!r.ok) {
      throw new Error(`Discord webhook ${r.status}`);
    }
  }
}

export async function ingestHearingSubmission(
  raw: HearingSubmitBody,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (typeof raw.trap === 'string' && raw.trap.trim() !== '') {
    return { ok: true }; // bots: silently accept
  }

  const entries = raw.entries;
  if (!Array.isArray(entries) || entries.length === 0) {
    return { ok: false, error: 'invalid_payload' };
  }

  const text = formatHearingText(entries);
  const dataRoot = path.resolve(process.cwd(), 'data');
  await fs.mkdir(dataRoot, { recursive: true });
  const ndPath = path.join(dataRoot, 'hearings.ndjson');
  await fs.appendFile(
    ndPath,
    `${JSON.stringify({ at: new Date().toISOString(), entries })}\n`,
    'utf-8',
  );
  console.log('[hearing] saved entries=%s file=%s', entries.length, ndPath);

  const hook = process.env.DISCORD_HEARING_WEBHOOK_URL;
  if (hook) {
    try {
      await postDiscordWebhook(hook, text);
    } catch (e) {
      console.error('[hearing ingest] webhook error', e);
    }
  }

  return { ok: true };
}
