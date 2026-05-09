import { buttonVariants } from '@/components/ui/button';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';
import { cn } from '@/lib/utils';
import { LP_IMAGES } from '@/lp-images';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import { DM_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import {
  HEARING_FLOW_LINES,
  PRIMARY_CTA_HEARING_FULL,
  RESPONSE_SLA,
} from '@/data/conversionMessaging';

export default function Contact() {
  const faqs = [
    {
      q: 'どのくらいで完成しますか？',
      a: 'LP制作は2週間、ホームページ制作は3〜4週間が目安です。',
    },
    {
      q: '修正はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。',
    },
    {
      q: '既存のInstagramを活かせますか？',
      a: 'もちろんです。既存のInstagramアカウントをそのまま活用できます。',
    },
    {
      q: '申し込み後、どれくらいで返信が来ますか？',
      a: RESPONSE_SLA,
    },
    {
      q: 'どんな店舗でも対応できますか？',
      a: '飲食店・小売店・専門店など、大阪エリアの個人店・小規模店を主な対象にしています。業種によりお断りすることがあります。',
    },
  ];

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <LpSectionEyebrow>連絡と受付の窓口</LpSectionEyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          お問合せ
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          お問い合わせの<strong className="font-semibold text-sky-950">正式なお申し込み</strong>
          は、ヒアリング入力をコピーし、InstagramのDMに貼り付けて送信した時点で完了です。{RESPONSE_SLA}
        </p>

        {/* Main CTA */}
        <section className="mb-12 animate-fade-in-up">
          <div className="lp-soft-band flex flex-col items-stretch rounded-[1.5rem] border border-sky-100 px-5 py-10 text-center shadow-sm shadow-sky-950/5 sm:px-8 md:p-12">
            <div className="mx-auto mb-7 max-w-2xl overflow-hidden rounded-xl border border-sky-100/80">
              <img
                src={LP_IMAGES.servicesBanner}
                alt=""
                loading="lazy"
                className="aspect-[21/9] max-h-[8.5rem] w-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{PRIMARY_CTA_HEARING_FULL}</h3>
            <ol className="mb-8 max-w-lg mx-auto space-y-2 text-left text-sm leading-relaxed text-muted-foreground list-decimal list-inside">
              {HEARING_FLOW_LINES.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ol>
            <div className="flex w-full justify-center px-2">
              <Link
                href="/hearing"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'btn-primary inline-flex max-w-[min(100%,22rem)] w-full min-h-12 items-center justify-center px-6 py-[1.25rem] text-sm font-semibold text-primary-foreground sm:min-h-11 sm:py-6'
                )}
              >
                {PRIMARY_CTA_HEARING_FULL}
                <ArrowRight size={16} className="shrink-0" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm">
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
                onClick={(e) => activateExternalHref(e, DM_URL)}
              >
                <MessageCircle size={16} aria-hidden />
                先に質問だけ送りたい方はDMへ
              </a>
              <Link href="/services/lp" className="font-medium text-accent underline-offset-4 hover:underline">
                LPプラン詳細のみ見る
              </Link>
              <Link href="/privacy" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12 animate-fade-in-up jp-keep-all px-1" style={{ animationDelay: '0.1s' }}>
          <h3 className="mb-4 text-xl font-bold text-center">順序だけをまとめたページ</h3>
          <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-muted-foreground text-pretty">
            サイト内でのお申込みから公開までの<strong className="font-semibold text-sky-950">時系列だけ</strong>は料金ページの
            <ProductionFlowJumpLink className="mx-0.5">「制作の流れ」タイムライン</ProductionFlowJumpLink>
            だけにおいています。トップにあるのは名前の付いた視覚的な並びのみです。
          </p>
          <p className="mx-auto mt-4 max-w-md text-center text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
            ※別途 サイト公開・ドメイン費用 月3,000円〜（込み）
          </p>
        </section>

        {/* Highlight Banner */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-[1.5rem] bg-accent p-7 text-center text-white shadow-lg shadow-sky-400/35 md:p-10">
            <h3 className="text-xl font-bold mb-2">お問い合わせ・ヒアリングへの回答は無料です</h3>
            <p className="text-white/85 text-sm max-w-lg mx-auto text-pretty">
              ご契約または制作開始のタイミングまでは追加費用はかかりません。まず内容を書き込み・DM送信まで進めていただければ結構です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-bold mb-6 text-center">よくある質問</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-[1.25rem] border border-sky-100 bg-card p-5 transition-all hover:border-sky-200 hover:shadow-sm"
              >
                <h4 className="font-semibold text-sm mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="rounded-[1.5rem] border border-sky-100 bg-secondary p-8 md:p-12">
            <h3 className="text-xl font-bold mb-2">まず一枚のLPから始めませんか</h3>
            <p className="text-muted-foreground text-sm mb-7 text-pretty">
              プランミニマムのみ知りたい場合も、この流れから伺えれば順にご案内します。
            </p>
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING_FULL}
              <ArrowRight className="ml-2 inline" size={16} aria-hidden />
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-12 text-center">
          <p className="text-muted-foreground text-xs mb-1">NANBA企画 · 大阪府</p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline transition-colors"
            onClick={(e) => activateExternalHref(e, IG_URL)}
          >
            <Instagram size={15} />
            {IG_HANDLE}
          </a>
        </section>
      </div>
    </div>
  );
}
