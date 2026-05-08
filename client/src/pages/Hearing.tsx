import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

import { Link } from 'wouter';

import { Button } from '@/components/ui/button';
import { DM_URL } from '@/constants/locamo';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FIELDS = [
  { id: 'shop', label: '店舗名・屋号', placeholder: '例：カフェ ○○', rows: 2 },
  { id: 'industry', label: '業種・取り扱いの概要', placeholder: '例：飲食（カフェ）／美容室 など', rows: 3 },
  { id: 'name', label: 'ご担当のお名前（任意）', placeholder: 'お呼びいただける名前', rows: 2 },
  { id: 'instagram', label: 'Instagramアカウント（@またはURL）', placeholder: '@locamo.inc またはプロフィールURL', rows: 2 },
  { id: 'web', label: '現在のWebサイト・予約ページ等（あればURL）', placeholder: 'なければ「なし」と記載 OK', rows: 2 },
  { id: 'pain', label: 'いま困っていること・課題', placeholder: '集客、更新の手間、情報の散在 など', rows: 4 },
  { id: 'goal', label: 'Webで実現したいこと', placeholder: '例：メニュー掲載、予約導線、Googleからの流入 など', rows: 3 },
  { id: 'deadline', label: '希望の納期・公開時期の目安', placeholder: '例：◯月中 / 急ぎではない など', rows: 2 },
  { id: 'budget', label: 'ご予算の目安（任意）', placeholder: '例：制作費◯万円前後 など', rows: 2 },
  { id: 'other', label: 'その他・ご質問', placeholder: '追加で伝えたいことがあれば', rows: 3 },
] as const;

const Hearing: FC = () => {
  useScrollToTop();

  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(FIELDS.map(f => [f.id, ''])),
  );

  const setField = useCallback((id: string, v: string) => {
    setValues(prev => ({ ...prev, [id]: v }));
  }, []);

  const copyAll = useCallback(async () => {
    const lines = FIELDS.map((f, i) => {
      const body = (values[f.id] ?? '').trim() || '（未記入）';
      return `【${i + 1}. ${f.label}】\n${body}`;
    });
    const text = `【Locamo ヒアリング内容】\n\n${lines.join('\n\n')}\n\n---\n上記をDMで送信します`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success('クリップボードにコピーしました。Instagram DMに貼り付けて送信してください。');
    } catch {
      toast.error('コピーに失敗しました。ブラウザの権限をご確認ください。');
    }
  }, [values]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
            Loca<span className="text-accent">mo</span>
          </Link>
          <Button variant="outline" size="sm" className="rounded-full border-sky-200" asChild>
            <Link href="/">
              <ArrowLeft size={16} />
              TOPへ
            </Link>
          </Button>
        </div>
      </header>

      <article className="container mx-auto max-w-3xl px-4 py-10 pb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hearing</p>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">制作ヒアリング</h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          下記にご記入のうえ、「内容をコピー」でまとめてコピーし、
          <strong className="font-semibold text-sky-950"> Instagram DM</strong>
          に貼り付けてお送りください。フォーム送信は行いません。
        </p>

        <div className="mb-8 space-y-6">
          {FIELDS.map(f => (
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
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-xl border px-3 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" variant="outline" className="rounded-full border-sky-200" onClick={copyAll}>
            回答をまとめてコピー
          </Button>
          <Button className="btn-primary text-primary-foreground" asChild>
            <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              内容を送信（DM）
              <ArrowRight size={16} aria-hidden />
            </a>
          </Button>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-muted-foreground">
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
