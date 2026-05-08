import type { HearingEntry } from '@shared/hearingIngest';

import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCopy, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useLocation } from 'wouter';

import { Button } from '@/components/ui/button';
import { DM_URL } from '@/constants/locamo';
import { HEARING_FIELDS } from '@/data/hearingFields';
import { formatHearingForClipboard } from '@/lib/hearingFormat';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const STEPS: { title: string; hint: string; fieldIds: (typeof HEARING_FIELDS)[number]['id'][] }[] = [
  {
    title: 'まずはお店について',
    hint: '正確であるほど、お見立てが早くなります。',
    fieldIds: ['shop', 'industry', 'name'],
  },
  {
    title: 'いま見えている状態',
    hint: '既存サイトやSNSは分かれば十分です。',
    fieldIds: ['instagram', 'web'],
  },
  {
    title: '課題とゴール',
    hint: 'LPで「何が起きれば成功か」を教えてください。',
    fieldIds: ['pain', 'goal'],
  },
  {
    title: '条件と補足',
    hint: '最後まで来ていただいた方から優先しています。',
    fieldIds: ['deadline', 'budget', 'other'],
  },
];

async function submitHearing(payload: {
  entries: Array<{ id: string; label: string; value: string }>;
  trap: string;
}): Promise<boolean> {
  const res = await fetch('/api/hearing', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { ok?: boolean };
  return data.ok === true;
}

function hasMinimalContent(values: Record<string, string>): boolean {
  return ['shop', 'pain', 'goal'].some(k => ((values[k] ?? '').trim().length ?? 0) > 2);
}

async function copyAndOpenDm(entries: HearingEntry[]): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(formatHearingForClipboard(entries));
    window.open(DM_URL, '_blank', 'noopener,noreferrer');
    return true;
  } catch {
    return false;
  }
}

const Hearing: FC = () => {
  useScrollToTop();
  const [, setLocation] = useLocation();

  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(HEARING_FIELDS.map(f => [f.id, ''])),
  );
  const [honeypot, setHoneypot] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  /** オンライン送信成功後のバックアップDM用・または失敗時にも参照 */
  const [lastEntries, setLastEntries] = useState<HearingEntry[] | null>(null);

  const setField = useCallback((id: string, v: string) => {
    setValues(prev => ({ ...prev, [id]: v }));
  }, []);

  const stepMeta = STEPS[step]!;
  const progress = useMemo(() => ((step + 1) / STEPS.length) * 100, [step]);

  const goBackHeader = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation('/');
    }
  }, [setLocation]);

  const next = useCallback(() => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
  }, [step]);

  const prev = useCallback(() => {
    if (step > 0) setStep(s => s - 1);
  }, [step]);

  const onSubmit = useCallback(async () => {
    if (!hasMinimalContent(values)) {
      toast.error('店舗名・課題・ゴールのいずれかを、もう少しだけお書きください。');
      return;
    }
    setBusy(true);
    const entries = HEARING_FIELDS.map(f => ({
      id: f.id,
      label: f.label,
      value: values[f.id] ?? '',
    }));
    try {
      const ok = await submitHearing({ entries, trap: honeypot });
      setLastEntries(entries);

      if (!ok) {
        const copied = await copyAndOpenDm(entries);
        if (copied) {
          toast.warning(
            'オンラインで受け付けられませんでしたが、回答をクリップボードへコピーし、InstagramのDM画面を開きました。入力欄を長押しまたはタップして「貼り付け」後、送信してください。',
            { duration: 12_000 },
          );
        } else {
          toast.error(
            'オンライン送信もクリップボード処理もできませんでした。下の「コピーしてDMを開く」から再試行するか、通信環境をご確認ください。',
          );
        }
        return;
      }

      setSent(true);
      toast.success('お問い合わせを受け付けました。');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      const copied = await copyAndOpenDm(entries);
      if (copied) {
        toast.warning(
          '通信エラーのため、オンライン送信はできませんでした。回答はコピー済みです。Instagramが開いたら貼り付けて送信してください。',
          { duration: 12_000 },
        );
      } else {
        toast.error(
          '通信エラーです。電波やネットワークをご確認ください。',
        );
      }
    } finally {
      setBusy(false);
    }
  }, [honeypot, values]);

  if (sent) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur">
          <div className="container mx-auto flex h-14 items-center justify-between px-4">
            <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
              Loca<span className="text-accent">mo</span>
            </Link>
            <Button variant="outline" size="sm" className="rounded-full border-sky-200" asChild>
              <Link href="/">TOPへ</Link>
            </Button>
          </div>
        </header>
        <div className="container mx-auto max-w-lg px-4 py-16 text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={40} aria-hidden />
          </div>
          <h1 className="mb-4 text-2xl font-bold">送信が完了しました</h1>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground text-pretty">
            ヒアリング内容はすべてサーバー側で受領しました。続きが必要だと運営が判断した場合のみ、Instagram
            アカウントまたはご記載のご連絡先からご返信いたします。そのまま離脱していただいて構いません。
          </p>
          {lastEntries && (
            <div className="mb-8 rounded-[1.25rem] border border-sky-100 bg-sky-50/70 px-5 py-6 text-center">
              <p className="mb-3 text-xs font-semibold text-sky-900">念のためInstagramでも送りたい場合（任意）</p>
              <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground">
                1ボタンで「回答のコピー」と「DM画面の起動」まで行います。あとは貼り付け→送信だけです。
              </p>
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full border-sky-200 bg-white gap-2 text-sm font-semibold"
                onClick={async () => {
                  const ok = await copyAndOpenDm(lastEntries);
                  if (ok) toast.success('コピーしました。DMで貼り付けて送信してください。');
                  else toast.error('コピーまたは外部起動に失敗しました。ブラウザの許可をご確認ください。');
                }}
              >
                <ClipboardCopy size={16} aria-hidden />
                回答をコピーしてDMを開く
              </Button>
            </div>
          )}
          <Button className="btn-primary text-primary-foreground" asChild>
            <Link href="/#services" className="inline-flex items-center gap-2 px-8">
              LPサービス詳細へ
              <ArrowRight size={17} aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafcff] text-foreground">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
            Loca<span className="text-accent">mo</span>
          </Link>
          <Button type="button" variant="outline" size="sm" className="rounded-full border-sky-200 gap-2" onClick={goBackHeader}>
            <ArrowLeft size={16} aria-hidden />
            戻る
          </Button>
        </div>
      </header>

      <article className="container mx-auto max-w-lg px-4 py-10 pb-20">
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span>Hearing</span>
            <span>
              STEP {step + 1} / {STEPS.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-sky-100">
            <div className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <h1 className="mb-1 text-[1.7rem] font-bold leading-snug">{stepMeta.title}</h1>
        <p className="mb-8 text-sm text-muted-foreground leading-relaxed">{stepMeta.hint}</p>

        <div className="pointer-events-none absolute -left-[100vw] h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="locamo-hp-trap" className="sr-only">
            未使用
          </label>
          <input
            id="locamo-hp-trap"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {stepMeta.fieldIds.map(id => {
            const f = HEARING_FIELDS.find(x => x.id === id)!;
            return (
              <div key={f.id} className="space-y-2">
                <label htmlFor={f.id} className="text-sm font-semibold text-sky-950">
                  {f.label}
                </label>
                <textarea
                  id={f.id}
                  value={values[f.id] ?? ''}
                  onChange={e => setField(f.id, e.target.value)}
                  placeholder={f.placeholder}
                  rows={f.rows}
                  className="border-input bg-white ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-xl border border-sky-100 px-3 py-2.5 text-sm shadow-sm focus-visible:border-sky-200 focus-visible:ring-2 focus-visible:ring-sky-200/60 focus-visible:ring-offset-2 focus-visible:outline-none"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button type="button" variant="outline" className="order-2 rounded-full border-sky-200 sm:order-1" onClick={prev} disabled={step === 0}>
            <ArrowLeft className="mr-1 inline" size={16} aria-hidden />
            ひとつ戻る
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" className="btn-primary order-1 rounded-full px-8 text-primary-foreground sm:order-2 sm:ml-auto" onClick={next}>
              次へ
              <ArrowRight className="ml-1 inline" size={16} aria-hidden />
            </Button>
          ) : (
            <Button
              type="button"
              disabled={busy}
              className="btn-primary order-1 rounded-full px-8 text-primary-foreground sm:order-2 sm:ml-auto"
              onClick={onSubmit}
            >
              {busy ? (
                <>
                  <Loader2 className="mr-2 inline size-4 animate-spin" aria-hidden />
                  送信中…
                </>
              ) : (
                <>
                  この内容で送信する
                  <ArrowRight className="ml-1 inline" size={16} aria-hidden />
                </>
              )}
            </Button>
          )}
        </div>

        {lastEntries && !sent && (
          <div className="mt-8 rounded-[1.25rem] border border-amber-200/80 bg-amber-50/90 px-4 py-5 text-center">
            <p className="mb-3 text-xs font-semibold text-amber-950">オンライン送信に失敗した場合</p>
            <p className="mb-4 text-[11px] leading-relaxed text-amber-900/85">
              下のボタンでもう一度、回答のコピーとDM画面の起動ができます（貼り付け→送信のみお願いします）。
            </p>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full border-amber-300/80 bg-white text-amber-950 gap-2 text-sm font-semibold"
              onClick={async () => {
                const ok = await copyAndOpenDm(lastEntries);
                if (ok) toast.success('コピーしました。DMで貼り付けて送信してください。');
                else toast.error('失敗しました。ブラウザのクリップボード許可をご確認ください。');
              }}
            >
              <ClipboardCopy size={16} aria-hidden />
              回答をコピーしてDMを開く
            </Button>
          </div>
        )}

        <p className="mt-10 text-center text-[11px] leading-relaxed text-muted-foreground">
          通常はこのままで完了です。
          <br />
          万一オンライン送信に失敗した場合は、自動でコピー＋DM起動を試みます。入力内容の取り扱いは{' '}
          <Link href="/privacy" className="text-accent underline underline-offset-2 hover:opacity-90">
            プライバシーポリシー
          </Link>{' '}
          に従います。
        </p>
      </article>
    </div>
  );
};

export default Hearing;
