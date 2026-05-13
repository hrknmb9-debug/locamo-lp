import { useState } from 'react';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { LINE_OFFICIAL_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import {
  APPLICATION_FLOW_STEPS,
  LINE_CONTACT_FLOW_SHORT,
  MONITOR_SLOT_NOTE,
  PRIMARY_CTA_LINE,
  RESPONSE_SLA,
} from '@/data/conversionMessaging';
import { SCROLL_MARGIN_CLASS } from '@/data/siteNav';
import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';
import {
  IllustFlowContract,
  IllustFlowDm,
  IllustFlowLaunch,
  IllustGuideReply,
} from '@/components/lp/BespokeIllustrations';
import { LpProcessStepCard } from '@/components/lp/LpProcessStepCard';
import { LP_IMAGES } from '@/lp-images';

const APPLICATION_FLOW_ILLUSTRATIONS = [
  IllustFlowDm,
  IllustGuideReply,
  IllustFlowContract,
  IllustFlowLaunch,
] as const;

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '個人店ですが、LPだけで足りますか？',
      a: '多くの個人店・小規模店では一枚に情報を集約したLPで「問い合わせ・予約・来店」までの導線をつくれます。Locamoでは複数ページのホームページ制作はお受けしておらず、一枚だからこその設計・コピーに集中しています。',
    },
    {
      q: 'どのくらいで完成しますか？',
      a: 'LP制作は2週間程度が目安です。ご連絡〜お見立てまでは原則2営業日以内にご返信します。',
    },
    {
      q: 'お申込みの流れを教えてください',
      a: `このページの「制作の流れ」に全体の順序があります。${LINE_CONTACT_FLOW_SHORT} ${RESPONSE_SLA}`,
    },
    {
      q: '制作後の修正や更新はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。大幅な変更や新規ページ追加は別途お見積りとなります。',
    },
    {
      q: 'Instagramアカウントは必要ですか？',
      a: 'お問い合わせ・ご依頼は公式LINEがメインです。Instagramアカウントがなくても問題ありません（Instagramは発信やプロフィール用としてご活用いただけます）。',
    },
    {
      q: 'サイト公開・ドメインは別途必要ですか？',
      a: 'ドメインとサイト公開先は別途実費となります。月3,000円〜が目安で、初期設定のサポートは制作費に含まれています。',
    },
    {
      q: 'モニター無料枠は誰でも使えますか？',
      a: MONITOR_SLOT_NOTE,
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
          <img alt="料金プランの説明画像" src={LP_IMAGES.pricingHeaderFigure}
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
          <h3 className="text-xl font-bold mb-5">ご料金の内訳（LP制作）</h3>
          <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-sm shadow-sky-950/5">
            <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              <table className="min-w-[19rem] w-full text-sm sm:min-w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-3.5 text-left font-semibold">項目</th>
                    <th className="px-4 py-3.5 text-left font-semibold text-accent">内容</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '制作費（LP1枚）', value: '3万円〜（買い切り）' },
                    { item: '制作費の月額', value: '0円' },
                    { item: '公開環境・ドメイン', value: '月3,000円〜（別途・初期設定サポート込み）' },
                    { item: '納期の目安', value: '約2週間' },
                    { item: '簡易修正', value: '納品後の軽微な修正は無料' },
                  ].map(row => (
                    <tr
                      key={row.item}
                      className="border-b border-border last:border-0 hover:bg-secondary/30"
                    >
                      <td className="px-4 py-3.5 font-medium">{row.item}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.value}</td>
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
              const Illustration = APPLICATION_FLOW_ILLUSTRATIONS[idx] ?? IllustFlowDm;
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
            料金だけ先に教えてほしい場合も、公式LINEから順にお返しします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground" asChild>
              <a
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
              >
                {PRIMARY_CTA_LINE}
              </a>
            </Button>
            <a
              href="#contact-faq"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-full border-sky-200 px-8 py-6 text-sm font-semibold inline-flex items-center justify-center'
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSiteAnchor('contact-faq');
                replaceUrlHash('contact-faq');
              }}
            >
              よくある質問・お問い合わせ欄へ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
