import type { FC, ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

import { Button } from '@/components/ui/button';
import { IG_HANDLE, IG_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Privacy: FC = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
        <div className="container mx-auto flex h-14 min-h-14 items-center justify-between px-4">
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

      <article className="container mx-auto max-w-3xl px-4 py-10 pb-[calc(4rem+env(safe-area-inset-bottom,0px))]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">プライバシーポリシー</h1>
        <p className="mb-10 text-xs text-muted-foreground">制定日：2026年5月7日 · 運営：NANBA企画</p>

        <div className="mb-12 overflow-hidden rounded-[1rem] border border-sky-100 bg-secondary/60 p-5 text-sm">
          <dl className="grid gap-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-y-4">
            <dt className="font-semibold text-sky-950">サービス名</dt>
            <dd>Locamo（ロカモ）</dd>
            <dt className="font-semibold text-sky-950">運営者</dt>
            <dd>NANBA企画</dd>
            <dt className="font-semibold text-sky-950">所在地</dt>
            <dd>大阪府大阪市</dd>
            <dt className="font-semibold text-sky-950">連絡先</dt>
            <dd>
              Instagram{' '}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-2 hover:underline"
                onClick={(e) => activateExternalHref(e, IG_URL)}
              >
                {IG_HANDLE}
              </a>{' '}
              （ダイレクトメッセージ）
            </dd>
          </dl>
        </div>

        <div className="prose prose-sky max-w-none space-y-10 text-[15px] leading-relaxed text-foreground prose-headings:text-sky-950 prose-headings:font-bold prose-li:text-muted-foreground">
          <PolicySection title="第1条（個人情報の取得）">
            <p>
              Locamo（運営：NANBA企画、以下「当社」といいます。）は、サービス提供にあたり、以下の情報を取得することがあります。
            </p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>お名前、店舗名、屋号</li>
              <li>所在地、エリア情報</li>
              <li>電話番号、メールアドレス、SNSアカウント情報</li>
              <li>当サイト内ヒアリング入力のうち、Instagramのダイレクトメッセージにてお送りいただいた内容</li>
              <li>Instagram DM などその他チャネルでのお問い合わせ内容</li>
              <li>その他、お見積もりや制作業務遂行に必要な情報</li>
            </ul>
          </PolicySection>

          <PolicySection title="第2条（利用目的）">
            <p className="text-muted-foreground">取得した情報は、次の目的のみに利用します。</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>ランディングページ・ホームページ制作および関連するコンサルティング業務の遂行</li>
              <li>お見積もり・ご提案・進捗に関する連絡</li>
              <li>制作物の納品、公開後のご案内、アフターサポート</li>
              <li>請求、決済、契約管理上のご連絡</li>
              <li>サービス品質向上のための統計作成（個人が特定できない形式に限定）</li>
            </ul>
          </PolicySection>

          <PolicySection title="第3条（第三者提供）">
            <p className="text-muted-foreground">
              当社は、法令に基づく場合、またはご本人の同意がある場合を除き、取得した個人情報を第三者に提供・開示しません。
            </p>
            <p className="text-muted-foreground">
              決済サービス等の協力会社に業務を委託する際は、必要な範囲でのみ情報を預託し、適切な管理・監督を行います。
            </p>
          </PolicySection>

          <PolicySection title="第4条（個人情報の管理）">
            <p className="text-muted-foreground">
              当社は、個人情報の漏えい、滅失、毀損等を防止するため、合理的な安全対策・管理体制を講じます。
            </p>
          </PolicySection>

          <PolicySection title="第5条（Cookie・アクセス解析）">
            <p className="text-muted-foreground">
              当サイトでは、利用状況の把握や改善のため、Google アナリティクスなどのアクセス解析ツールを利用する場合があります。これらはCookie等を利用し、ご利用環境を識別する情報を収集することがあります。ブラウザの設定によりCookieを無効化できます。
            </p>
          </PolicySection>

          <PolicySection title="第6条（開示・訂正・削除などの請求）">
            <p className="text-muted-foreground">
              ご本人から、保有個人データの開示、訂正、追加、削除、利用停止等の請求があったときは、本人確認のうえ、法令に従い対応します。ご請求は、こちらの Instagram アカウントへのダイレクトメッセージにてご連絡ください。
            </p>
          </PolicySection>

          <PolicySection title="第7条（プライバシーポリシーの変更）">
            <p className="text-muted-foreground">
              当社は、法令の変更やサービス内容の変更等に応じて、本ポリシーを変更することがあります。変更後のポリシーは、本ページへの掲載をもって効力を生じます。
            </p>
          </PolicySection>

          <PolicySection title="第8条（お問い合わせ）">
            <p className="text-muted-foreground">
              本ポリシーに関するお問い合わせは、
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-2 hover:underline"
                onClick={(e) => activateExternalHref(e, IG_URL)}
              >
                {IG_HANDLE}
              </a>
              （NANBA企画 / Locamo）までダイレクトメッセージにてご連絡ください。
            </p>
          </PolicySection>
        </div>

        <p className="mt-12 border-t border-sky-100 pt-8 text-center text-xs text-muted-foreground">
          &copy; 2026 NANBA企画. All rights reserved.
        </p>
      </article>
    </div>
  );
};

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-[1.1rem] font-bold text-sky-950">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default Privacy;
