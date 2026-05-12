import { useState } from 'react';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { LINE_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import {
  APPLICATION_FLOW_STEPS,
  HEARING_FLOW_SHORT,
  MONITOR_SLOT_NOTE,
  PRIMARY_CTA_HEARING,
  RESPONSE_SLA,
} from '@/data/conversionMessaging';
import { SCROLL_MARGIN_CLASS } from '@/data/siteNav';
import {
  IllustFlowContract,
  IllustFlowDm,
  IllustFlowLaunch,
  IllustFlowSiteInput,
  IllustGuideReply,
} from '@/components/lp/BespokeIllustrations';
import { LpProcessStepCard } from '@/components/lp/LpProcessStepCard';
import { LP_IMAGES } from '@/lp-images';

const APPLICATION_FLOW_ILLUSTRATIONS = [
  IllustFlowSiteInput,
  IllustFlowDm,
  IllustFlowContract,
  IllustFlowLaunch,
] as const;

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'どのくらいで完成しますか？',
      a: 'LP制作は2週間程度が目安です。ホームページ制作は3〜4週間。ヒアリング〜お見立てまでは原則2営業日以内にご返信します。',
    },
    {
      q: 'お申し込みの流れを教えてください',
      a: `このページの「制作の流れ」に全体の順序があります。${HEARING_FLOW_SHORT} ${RESPONSE_SLA}`,
    },
    {
      q: '制作後の修正や更新はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。大幅な変更や新規ページ追加は別途お見積りとなります。',
    },
    {
      q: 'Instagramアカウントは必要ですか？',
      a: 'LINEが主な連絡手段です。メールやその他の方法をご希望の場合はお気軽にお問い合わせください。',
    },
    {
      q: 'サイト公開・ドメインは別途必要ですか？',
      a: 'ドメインとサイト公開先は別途実費となります。月3,000円〜が目安で、初期設定のサポートは制作費に含まれています。',
    },
    {
      q: 'モニター無料枠は誰でも使えますか？',
      a: MONITOR_SLOT_NOTE,
    },
    {
      q: '支払い方法は？',
      a: 'すべて Stripe Payment Link（カード決済）のみです。条件のすり合わせ後、LINEでワンタイムリンクをお送りし、そのページで手続き完了まで行います。銀行振込は受け付けていません。',
    },
  ];

  return (
    <div className="lp-section-y px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <LpSectionEyebrow>料金</LpSectionEyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          料金・プロセス
        </h2>
        <p className="text-center text-muted-foreground jp-keep-all mb-6 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          料金と<strong className="font-semibold text-sky-950">制作の流れ</strong>、よくある質問をこのページに集約しています。
        </p>

        <figure className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-[1.35rem] border border-sky-100 shadow-md shadow-sky-200/30">
          <img
            src={LP_IMAGES.pricingHeaderFigure}
            alt="制作の流れと料金の概要を示すイメージ図"
            width={1728}
            height={576}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] max-h-[10.5rem] w-full object-cover sm:max-h-[11.5rem]"
          />
          <figcaption className="sr-only">料金・プロセスのヘッダービジュアル</figcaption>
        </figure>

        {/* Pricing Highlight */}
        <div className="lp-soft-band mb-14 animate-fade-in-up rounded-[1.5rem] border border-sky-100 p-7 text-center shadow-sm shadow-sky-950/5 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            LP制作費<span className="text-accent">3万円〜</span>。月額はサイト公開・ドメイン管理のみ。
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            制作費は一括払い。制作費に対する月額課金はありません。
          </p>

          <div className="inline-block rounded-[1.25rem] border border-sky-100 bg-white p-5 shadow-sm">
            <p className="text-xs text-muted-foreground mb-1">公開環境・ドメイン（別途）</p>
            <p className="text-2xl font-bold text-foreground">月3,000円〜</p>
            <p className="text-xs text-muted-foreground mt-1">初期設定サポート込み</p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-5">料金比較</h3>
          <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-sm shadow-sky-950/5">
            <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              <table className="min-w-[19rem] w-full text-sm sm:min-w-full">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3.5 px-4 font-semibold">項目</th>
                  <th className="text-center py-3.5 px-4 font-semibold">LP制作</th>
                  <th className="text-center py-3.5 px-4 font-semibold">ホームページ制作</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '制作費', lp: '3万円〜', hp: '要相談' },
                  { item: '月額費用', lp: '0円', hp: '0円' },
                  { item: '公開環境・ドメイン', lp: '月3,000円〜', hp: '月3,000円〜' },
                  { item: '納期', lp: '2週間', hp: '3〜4週間' },
                  { item: '修正対応', lp: '簡易修正無料', hp: '簡易修正無料' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium">{row.item}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.lp}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div id="production-flow" className={cn(SCROLL_MARGIN_CLASS, 'mb-14 animate-fade-in-up')}>
          <h3 className="text-xl font-bold mb-7 jp-keep-all">制作の流れ</h3>
          <div className="space-y-0">
            {APPLICATION_FLOW_STEPS.map((step, idx) => {
              const Illustration = APPLICATION_FLOW_ILLUSTRATIONS[idx] ?? IllustFlowSiteInput;
              return (
                <LpProcessStepCard
                  key={step.num}
                  stepNum={step.num}
                  title={step.title}
                  detail={step.detail}
                  Illustration={Illustration}
                  isLast={idx === APPLICATION_FLOW_STEPS.length - 1}
                />
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12 animate-fade-in-up">
          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <h3 className="text-xl font-bold text-center sm:text-left sm:mb-0">よくある質問</h3>
            <div className="flex shrink-0 justify-center rounded-xl border border-sky-100 bg-muted/40 px-4 py-3">
              <IllustGuideReply className="h-auto w-[7.5rem] sm:w-[8.25rem]" />
            </div>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="overflow-hidden rounded-[1.25rem] border border-sky-100 bg-card shadow-sm shadow-sky-950/5">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-card hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-muted-foreground transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 py-4 bg-secondary/30 border-t border-border text-muted-foreground text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <p className="text-muted-foreground text-sm mb-4">
            料金だけ先に教えてほしい場合も、ヒアリング経由で順にお返しします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => activateExternalHref(e, LINE_URL)}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING}
            </a>
            <Button size="lg" variant="outline" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={e => activateExternalHref(e, LINE_URL)}>
                LINEで無料相談する
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
