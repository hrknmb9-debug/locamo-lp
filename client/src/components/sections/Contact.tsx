import { buttonVariants } from '@/components/ui/button';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';
import { cn } from '@/lib/utils';
import { IllustContactHearingDm } from '@/components/lp/BespokeIllustrations';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import { LINE_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import {
  CONTACT_INTAKE_SUMMARY,
  HEARING_FLOW_LINES,
  PRIMARY_CTA_HEARING_FULL,
  RESPONSE_SLA,
} from '@/data/conversionMessaging';

export default function Contact() {
  const faqs = [
    {
      q: '既存のInstagramをそのまま活かせますか？',
      a: 'はい。運用しているアカウントに合わせて、プロフィールからLPへつなぐ導線まで一緒に整えます。',
    },
    {
      q: 'どんな業種・店舗規模でも対応していますか？',
      a: '飲食・小売・サービスなど、大阪エリアの個人店・小規模店を主な対象です。ご相談内容によってはお断りする場合があります。',
    },
    {
      q: '料金や納期を先に知りたいのですが？',
      a: `${RESPONSE_SLA} 金額の内訳・納期目安・制作の順序は料金ページの「料金比較」「制作の流れ」「よくある質問」にあります。`,
    },
  ];

  return (
    <div className="lp-section-y px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <LpSectionEyebrow>連絡と受付の窓口</LpSectionEyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          お問い合わせ
        </h2>
        <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          {CONTACT_INTAKE_SUMMARY}
          <span className="mt-3 block">{RESPONSE_SLA}</span>
        </p>
        <p className="text-center text-muted-foreground mb-10 mx-auto max-w-lg text-xs leading-relaxed text-pretty sm:text-sm">
          
        </p>

        {/* Main CTA */}
        <section className="mb-12 animate-fade-in-up">
          <div className="lp-soft-band flex flex-col items-stretch rounded-[1.5rem] border border-sky-100 px-5 py-10 text-center shadow-sm shadow-sky-950/5 sm:px-8 md:p-12">
            <div className="mx-auto mb-7 flex max-w-md justify-center rounded-xl border border-sky-100/80 bg-white/80 px-5 py-6">
              <IllustContactHearingDm className="w-full max-w-[280px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{PRIMARY_CTA_HEARING_FULL}</h3>
            <ol className="mb-8 max-w-lg mx-auto space-y-2 text-left text-sm leading-relaxed text-muted-foreground list-decimal list-inside">
              {HEARING_FLOW_LINES.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ol>
            <div className="flex w-full justify-center px-2">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => activateExternalHref(e, LINE_URL)}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'btn-primary inline-flex max-w-[min(100%,22rem)] w-full min-h-12 items-center justify-center px-6 py-[1.25rem] text-sm font-semibold text-primary-foreground sm:min-h-11 sm:py-6'
                )}
              >
                {PRIMARY_CTA_HEARING_FULL}
                <ArrowRight size={16} className="shrink-0" aria-hidden />
              </a>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
                onClick={(e) => activateExternalHref(e, LINE_URL)}
              >
                <MessageCircle size={16} aria-hidden />
                LINEでまず質問だけ送ることもできます
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

        <section className="mb-12 animate-fade-in-up jp-keep-all px-1 text-center" style={{ animationDelay: '0.1s' }}>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            公開までの手順の詳細は、料金の
            <ProductionFlowJumpLink className="mx-0.5">「制作の流れ」</ProductionFlowJumpLink>
            をご覧ください。
          </p>
        </section>

        {/* Highlight Banner */}
        <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-[1.5rem] bg-accent p-7 text-center text-white shadow-lg shadow-sky-400/35 md:p-10">
            <h3 className="text-xl font-bold mb-2">お問い合わせ・ヒアリングへの回答は無料です</h3>
            <p className="text-white/85 text-sm max-w-lg mx-auto text-pretty">
              ご契約または制作開始のタイミングまでは追加費用はかかりません。まずLINEでご相談いただければ結構です。
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
              料金の目安だけ知りたい場合も、この流れで伺えれば順にご案内します。
            </p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => activateExternalHref(e, LINE_URL)}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING_FULL}
              <ArrowRight className="ml-2 inline" size={16} aria-hidden />
            </a>
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
