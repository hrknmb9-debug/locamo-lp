import type { HearingEntry } from '@shared/hearingIngest';

import type { FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ClipboardCopy, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useLocation } from 'wouter';

import { Button } from '@/components/ui/button';
import { DM_URL } from '@/constants/locamo';
import { HEARING_DM_PREREQUISITE } from '@/data/conversionMessaging';
import { HEARING_FIELDS } from '@/data/hearingFields';
import { copyHearingToClipboard, navigateToInstagramDm } from '@/lib/submitHearing';
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

function hasMinimalContent(values: Record<string, string>): boolean {
  return ['shop', 'pain', 'goal'].some(k => ((values[k] ?? '').trim().length ?? 0) > 2);
}

function trimmedLen(values: Record<string, string>, id: string): number {
  return (values[id] ?? '').trim().length;
}

function stepAllowsNext(stepIndex: number, values: Record<string, string>): boolean {
  switch (stepIndex) {
    case 0:
      return trimmedLen(values, 'shop') >= 3;
    case 1:
      return true;
    case 2:
      return trimmedLen(values, 'pain') >= 3 && trimmedLen(values, 'goal') >= 3;
    case 3:
      return true;
    default:
      return true;
  }
}

const Hearing: FC = () => {
  useScrollToTop();
  const [, setLocation] = useLocation();

  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(HEARING_FIELDS.map(f => [f.id, ''])),
  );
  const [busy, setBusy] = useState(false);
  const [dmFlowStarted, setDmFlowStarted] = useState(false);
  const [lastEntries, setLastEntries] = useState<HearingEntry[] | null>(null);

  const buildEntries = useCallback((): HearingEntry[] => {
    return HEARING_FIELDS.map(f => ({
      id: f.id,
      label: f.label,
      value: values[f.id] ?? '',
    }));
  }, [values]);

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
    if (!stepAllowsNext(step, values)) {
      const msg =
        step === 0
          ? '店舗名を、もう少し具体的に入力してください（3文字以上）。'
          : step === 2
            ? '課題とゴールを、それぞれ3文字以上で入力してください。'
            : '入力をご確認ください。';
      toast.error(msg);
      return;
    }
    if (step < STEPS.length - 1) setStep(s => s + 1);
  }, [step, values]);

  const prev = useCallback(() => {
    if (step > 0) setStep(s => s - 1);
  }, [step]);

  const handleCopyAndOpenDm = useCallback(async () => {
    if (!hasMinimalContent(values)) {
      toast.error('店舗名・課題・ゴールのいずれかを、もう少しだけお書きください。');
      return;
    }
    const entries = buildEntries();
    setBusy(true);
    try {
      const copied = await copyHearingToClipboard(entries);
      setLastEntries(entries);
      setDmFlowStarted(true);
      if (copied) {
        toast.success('回答をコピーしました。InstagramのDMを開きます。');
        window.setTimeout(() => navigateToInstagramDm(DM_URL), 400);
      } else {
        toast.error('コピーに失敗しました。ブラウザの許可をご確認のうえ、表示の手順で再試行してください。');
      }
    } finally {
      setBusy(false);
    }
  }, [buildEntries, values]);

  const handleRetryCopyAndOpen = useCallback(async (entries: HearingEntry[]) => {
    setBusy(true);
    try {
      const copied = await copyHearingToClipboard(entries);
      if (copied) {
        toast.success('コピーしました。DMを開きます。');
        window.setTimeout(() => navigateToInstagramDm(DM_URL), 300);
      } else {
        toast.error('コピーに失敗しました。');
      }
    } finally {
      setBusy(false);
    }
  }, []);

  const onLastStep = step === STEPS.length - 1;

  return (
    <div className="min-h-screen min-w-0 w-full overflow-x-clip bg-[#fafcff] text-foreground">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
        <div className="container mx-auto flex h-14 min-h-14 items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
            Loca<span className="text-accent">mo</span>
          </Link>
          <Button type="button" variant="outline" size="sm" className="rounded-full border-sky-200 gap-2" onClick={goBackHeader}>
            <ArrowLeft size={16} aria-hidden />
            戻る
          </Button>
        </div>
      </header>

      <article className="container mx-auto max-w-lg px-4 py-10 pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
        <aside className="mb-8 rounded-[1rem] border border-sky-200/90 bg-white px-4 py-3 shadow-sm shadow-sky-950/5 sm:px-5 sm:py-4">
          <p className="text-xs font-semibold tracking-wide text-sky-950 sm:text-[0.8125rem]">
            <span className="text-accent">● </span>
            送信先はInstagramのDMです
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground text-pretty sm:text-sm">{HEARING_DM_PREREQUISITE}</p>
        </aside>

        <div className="mb-8">
          <div className="mb-2 flex justify-between gap-3 text-xs font-semibold tracking-wide text-accent sm:text-[0.8125rem]">
            <span>ヒアリング入力</span>
            <span className="shrink-0">
              STEP {step + 1} / {STEPS.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-sky-100">
            <div className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <h1 className="mb-1 text-[1.7rem] font-bold leading-snug">{stepMeta.title}</h1>
        <p className="mb-8 text-sm text-muted-foreground leading-relaxed">{stepMeta.hint}</p>

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
          <Button
            type="button"
            variant="outline"
            className="order-2 min-h-11 rounded-full border-sky-200 px-5 sm:order-1"
            onClick={prev}
            disabled={step === 0}
          >
            <ArrowLeft className="mr-1 inline" size={16} aria-hidden />
            ひとつ戻る
          </Button>
          {!onLastStep ? (
            <Button type="button" className="btn-primary order-1 min-h-11 rounded-full px-8 text-primary-foreground sm:order-2 sm:ml-auto" onClick={next}>
              次へ
              <ArrowRight className="ml-1 inline" size={16} aria-hidden />
            </Button>
          ) : (
            <div className="order-1 flex w-full flex-col gap-3 sm:order-2 sm:ml-auto sm:max-w-md">
              <Button
                type="button"
                disabled={busy}
                className="btn-primary min-h-11 rounded-full px-6 text-primary-foreground"
                onClick={handleCopyAndOpenDm}
              >
                {busy ? (
                  <>
                    <Loader2 className="mr-2 inline size-4 animate-spin" aria-hidden />
                    準備中…
                  </>
                ) : (
                  <>
                    コピーしてInstagramのDMへ
                    <ArrowRight className="ml-1 inline" size={16} aria-hidden />
                  </>
                )}
              </Button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                コピー後、開いたDMの入力欄に貼り付けて送信してください。運営側ではどのアカウントから届いたかが分かります。
              </p>
            </div>
          )}
        </div>

        {dmFlowStarted && (
          <div className="mt-8 rounded-[1.25rem] border border-emerald-200/90 bg-emerald-50/80 px-5 py-6">
            <p className="mb-3 text-center text-xs font-semibold text-emerald-950">あと2ステップ（1分ほど）</p>
            <ol className="mb-4 space-y-2 text-left text-sm leading-relaxed text-emerald-950/90">
              <li>
                <span className="font-semibold">①</span> 開いたInstagramの入力欄を長押し／タップし、「貼り付け」
              </li>
              <li>
                <span className="font-semibold">②</span> 送信ボタンを押す
              </li>
            </ol>
            {lastEntries && (
              <Button
                type="button"
                variant="outline"
                className="w-full min-h-11 rounded-full border-emerald-300/80 bg-white text-sm font-semibold text-emerald-950 gap-2"
                disabled={busy}
                onClick={() => void handleRetryCopyAndOpen(lastEntries)}
              >
                <ClipboardCopy size={16} aria-hidden />
                もう一度コピーしてDMを開く
              </Button>
            )}
          </div>
        )}

        <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
          貼り付けて送信すると完了です。
          <br />
          入力内容の取り扱いは{' '}
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
