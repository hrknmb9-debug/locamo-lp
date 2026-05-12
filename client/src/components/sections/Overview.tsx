import type { ComponentType } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  IllustFeatureBuyout,
  IllustFeatureCta,
  IllustFeatureLocal,
  IllustFlowDm,
  IllustGuideExcluded,
  IllustGuideIncluded,
  IllustGuideReply,
  IllustProblemEntry,
  IllustProblemFollower,
  IllustProblemReach,
  IllustProblemScatter,
  IllustWorkflowProblemStrip,
} from '@/components/lp/BespokeIllustrations';
import { HeroFlowStrip } from '@/components/lp/HeroFlowStrip';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
  ABOUT_SECTION_EYEBROW,
  APPLY_SECTION_EYEBROW,
  LINE_CONTACT_FLOW_SHORT,
  HERO_VALUE_HOOK,
  HERO_PRICE_TEASER,
  HERO_PRIMARY_LEAD,
  HERO_H1_SEO,
  MONITOR_BADGE_LINES,
  PRIMARY_CTA_LINE_FULL,
  PRIMARY_CTA_LINE_SUBLINE,
  PROMISE_SECTION_EYEBROW,
  RESPONSE_SLA,
  SCOPE_EXCLUDED_BULLETS,
  SCOPE_EXCLUDED_HEADING,
  SCOPE_INCLUDED_BULLETS,
  SCOPE_INCLUDED_HEADING,
  WORKFLOW_SECTION_EYEBROW,
} from '@/data/conversionMessaging';
import { LP_IMAGES } from '@/lp-images';
import { SCROLL_MARGIN_CLASS } from '@/data/siteNav';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';
import { LINE_OFFICIAL_URL } from '@/constants/locamo';

type BlockIllustration = ComponentType<{ className?: string }>;

/** 累計案件（カウントアップによる一時的な「0+」表示を避けるため静的表記） */
const STATS_CASE_COUNT_LABEL = '50+' as const;

function StatsSection() {
  return (
    <div className="min-w-0 space-y-3 animate-fade-in-up lp-metrics-surface">
      <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-4 md:gap-10">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">{STATS_CASE_COUNT_LABEL}</div>
          <p className="mt-2 text-sm text-muted-foreground">累計案件（社内集計）</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">3万円〜</div>
          <p className="mt-2 text-sm text-muted-foreground">LP制作費</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">2週間</div>
          <p className="mt-2 text-sm text-muted-foreground">納期目安</p>
        </div>
      </div>
      <p className="mx-auto max-w-full px-0.5 text-center text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
        ※制作・運用準備に関する案件の社内集計です。公開ページは{' '}
        <a
          href="#works"
          className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            scrollToSiteAnchor('works');
            replaceUrlHash('works');
          }}
        >
          納品事例
        </a>
        をご覧ください。
      </p>
      <p className="mx-auto max-w-full px-0.5 text-center text-xs leading-relaxed text-sky-900/85 text-pretty sm:text-sm">
        公開・ドメインは別途で月3,000円〜（初期設定サポート込み）。
        <a
          href="#pricing"
          className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            scrollToSiteAnchor('pricing');
            replaceUrlHash('pricing');
          }}
        >
          料金
        </a>
        でモニター枠・通常依頼の条件をご確認ください。
      </p>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="w-full min-w-0 space-y-16 md:space-y-28">
      {/* Hero Section */}
      <section className="lp-hero-surface relative flex min-h-[88vh] flex-col items-center justify-center overflow-x-clip px-4 pb-[4.25rem] pt-[clamp(5rem,12vh,8rem)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/55 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[40rem] px-3 text-center sm:max-w-[42rem] sm:px-2">
          {/* キャンペーン & メイン約束 — モバイル順序統一 */}
          <div className="animate-fade-in mb-6 flex flex-col items-center gap-2.5 sm:mb-7 sm:gap-3" style={{ animationDelay: '0.08s' }}>
            <div className="jp-keep-all lp-glass-panel w-full max-w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-sky-200/80 px-4 py-3 sm:max-w-xl sm:py-3.5">
              <span className="flex min-w-0 items-start gap-2">
                <Sparkles className="size-4 shrink-0 pt-0.5 text-accent" aria-hidden />
                <span className="min-w-0 text-left text-[13px] font-semibold leading-relaxed text-sky-950 sm:text-sm md:text-[0.9375rem]">{HERO_VALUE_HOOK}</span>
              </span>
            </div>
            <div
              className={cn(
                'jp-keep-all w-full max-w-[min(21rem,calc(100vw-2rem))] rounded-[1.125rem] border border-orange-400/45 bg-gradient-to-b from-orange-50/98 to-amber-50/95 px-4 py-3 text-primary shadow-[0_12px_40px_-14px_rgb(251_146_60_/_0.42)] ring-1 ring-orange-950/[0.05] backdrop-blur-[2px] sm:max-w-md',
              )}
              role="status"
              aria-live="polite"
            >
              {MONITOR_BADGE_LINES.map((line, idx) => (
                <p
                  key={line}
                  className={cn(
                    'text-[13px] font-bold leading-normal tracking-tight sm:text-sm md:text-[0.9375rem]',
                    idx > 0 && 'mt-2 border-t border-primary/35 pt-2',
                    idx === MONITOR_BADGE_LINES.length - 1 && 'text-[11.5px] font-semibold opacity-95 sm:text-xs md:text-[0.8125rem]',
                  )}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <h1 className="sr-only">{HERO_H1_SEO}</h1>
          <h1
            className="mx-auto mb-6 max-w-full animate-fade-in-up text-balance text-center text-[1.875rem] font-bold leading-snug tracking-[-0.035em] sm:mb-5 sm:text-[2rem] md:mb-5 md:text-[2.625rem] md:leading-[1.12] lg:text-[2.85rem]"
            style={{ animationDelay: '0.2s' }}
            aria-hidden="true"
          >
            <span className="block md:inline">
              Instagramを<span className="whitespace-nowrap">見た</span>お客様が
            </span>
            <span className="block md:inline">メニューやご予約まで迷わなくなるLPへ</span>
          </h1>

          <div
            className="animate-fade-in-up mx-auto mb-8 max-w-xl min-w-0 text-pretty"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="jp-keep-all lp-glass-panel mx-auto w-full rounded-[1.25rem] border border-sky-200/70 px-4 py-4 text-[13px] leading-relaxed text-sky-950 sm:px-5 sm:text-[0.9375rem]">
              <p className="text-sky-950">{HERO_PRIMARY_LEAD}</p>
              <p className="mt-3 font-semibold text-sky-900">{HERO_PRICE_TEASER}</p>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
                モニター無料枠（審査・先着）の条件も
                <a
                  href="#pricing"
                  className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSiteAnchor('pricing');
                    replaceUrlHash('pricing');
                  }}
                >
                  料金
                </a>
                にあります。
              </p>
            </div>
          </div>

          <figure className="mx-auto mb-8 max-w-[42rem] w-full animate-fade-in-up sm:mb-10" style={{ animationDelay: '0.42s' }}>
            <div className="overflow-hidden rounded-[1.375rem] border border-sky-200/50 bg-white shadow-[0_20px_50px_-22px_rgb(14_165_233_/_0.25)] ring-1 ring-slate-900/[0.04]">
              <img
                src={LP_IMAGES.hero}
                alt="店舗の集客とSNS・Webを結ぶコンセプトイラスト"
                width={1344}
                height={756}
                decoding="async"
                fetchPriority="high"
                className="aspect-video w-full object-cover"
              />
            </div>
            <figcaption className="sr-only">店舗とWeb・SNSをつなぐコンセプトビジュアル</figcaption>
          </figure>

          <div
            className="mb-8 flex animate-fade-in-up flex-col justify-center gap-3 sm:mb-10 sm:flex-row sm:gap-4"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              size="lg"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex min-h-12 w-full shrink-0 items-center justify-center px-8 py-[1.375rem] text-sm font-semibold text-primary-foreground sm:w-auto sm:min-h-11 sm:py-6',
              )}
              asChild
            >
              <a
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
              >
                {PRIMARY_CTA_LINE_FULL}
                <ArrowRight className="ml-1.5 shrink-0" size={17} aria-hidden />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-h-12 rounded-full border-sky-200 px-8 py-[1.375rem] text-sm font-semibold text-foreground hover:bg-sky-50 sm:min-h-11 sm:py-6"
              asChild
            >
              <a href="#services">サービス内容を確認</a>
            </Button>
          </div>

          <HeroFlowStrip />

          <div className="mx-auto mb-10 h-px w-14 bg-border sm:mb-12" />

          <div className="animate-fade-in-up" style={{ animationDelay: '0.62s' }}>
            <StatsSection />
          </div>
        </div>
      </section>

      <div id="workflow" className={`${SCROLL_MARGIN_CLASS} space-y-16 md:space-y-28`}>
      {/* Problem Section */}
      <section
        className="lp-section-y px-4"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(14 165 233 / 0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <LpSectionEyebrow>{WORKFLOW_SECTION_EYEBROW}</LpSectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">「集客はSNS」のみになりがちな課題</h2>
          <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
            まとまったサイトがない状態だと次のような偏りやすさがあります
          </p>
          <div className="mb-10 flex justify-center px-2">
            <IllustWorkflowProblemStrip className="h-10 w-full max-w-md" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                Illustration: IllustProblemFollower,
                title: 'フォロワー依存',
                desc: 'フォロワー数に左右される不安定な集客',
              },
              {
                Illustration: IllustProblemReach,
                title: 'リーチのブレ',
                desc: '投稿の届き方は変わりやすく、同じ成果を出すために手間と試行が増えがち',
              },
              {
                Illustration: IllustProblemScatter,
                title: '情報の分散',
                desc: 'メニュー・料金・アクセスがストーリーとハイライトに散らばり、決め手までたどり着きにくい',
              },
              {
                Illustration: IllustProblemEntry,
                title: '入口の偏り',
                desc: 'LPや紹介ページがないと、新規との接点がSNS・口コミに寄り勝ちになる',
              },
            ].map((item, idx) => (
              <ProblemCard key={item.title} item={item} delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Locamo Section */}
      <section className="lp-soft-band lp-section-y px-4">
        <div className="container mx-auto max-w-4xl">
          <LpSectionEyebrow>{ABOUT_SECTION_EYEBROW}</LpSectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            Locamoとは
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            単発広告だけに頼らず、自分のお店として資産になるLPを用意。構成はAIとテンプレの型で素早く起こし、その上から担当が訴求の順番とCTAを磨いて「LPを見て動く状態」まで整えます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '地域密着',
                desc: '大阪の個人店を専門に対応。現場で響く言い回しと料金・導線のバランスを一緒に詰めます。',
                Illustration: IllustFeatureLocal,
              },
              {
                title: '買い切り型',
                desc: 'LP制作費3万円〜の買い切り（制作費の月額課金なし）。公開・ドメインは別途、月3,000円〜のランニングのみ。',
                Illustration: IllustFeatureBuyout,
              },
              {
                title: 'LPで注文までの設計',
                desc: '誰が・何を読めば・次に何をすべきかを迷わせない並びへ。ご相談でゴールから逆算します。',
                Illustration: IllustFeatureCta,
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} delay={idx} />
            ))}
          </div>

          <div className="mx-auto mb-10 max-w-3xl rounded-[1.35rem] border border-sky-100 bg-white/85 px-6 py-8 shadow-sm md:px-10">
            <LpSectionEyebrow className="mb-3">{PROMISE_SECTION_EYEBROW}</LpSectionEyebrow>
            <h3 className="mb-3 text-center text-lg font-bold text-sky-950">ご返信までの目安・スコープ</h3>
            <div className="mb-6 flex justify-center">
              <IllustGuideReply className="h-auto w-full max-w-[220px]" />
            </div>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">{RESPONSE_SLA}</p>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <div className="mx-auto shrink-0 sm:mx-0 sm:pt-0.5">
                    <IllustGuideIncluded className="h-auto w-[5.75rem]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-3 text-center text-sm font-semibold text-sky-950 sm:text-left">{SCOPE_INCLUDED_HEADING}</p>
                    <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                      {SCOPE_INCLUDED_BULLETS.map(line => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <div className="mx-auto shrink-0 sm:mx-0 sm:pt-0.5">
                    <IllustGuideExcluded className="h-auto w-[5.75rem]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-3 text-center text-sm font-semibold text-sky-950 sm:text-left">{SCOPE_EXCLUDED_HEADING}</p>
                    <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-sky-400">
                      {SCOPE_EXCLUDED_BULLETS.map(line => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className={cn(buttonVariants({ size: 'lg' }), 'btn-primary')} asChild>
              <a
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
                className="inline-flex px-8 py-6 text-sm font-semibold text-primary-foreground"
              >
                {PRIMARY_CTA_LINE_FULL}
                <ArrowRight className="ml-1.5 shrink-0" size={17} aria-hidden />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href="#pricing">料金・フローを見る</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 公式LINE・クロージング（下部） */}
      <section className="border-t border-sky-100/90 bg-gradient-to-b from-orange-50/80 via-[#fffaf5] to-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative z-10 rounded-[1.65rem] border-2 border-primary/35 bg-white/95 px-7 py-10 shadow-lg shadow-orange-100/60 md:p-14">
            <LpSectionEyebrow className="mb-4 text-primary">{APPLY_SECTION_EYEBROW}</LpSectionEyebrow>
            <h2 className="mb-5 text-center text-2xl font-bold leading-snug md:text-[1.7rem]">
              {LINE_CONTACT_FLOW_SHORT}
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground jp-keep-all">
              公開までの全体像は
              <ProductionFlowJumpLink className="mx-0.5">料金ページの制作の流れ</ProductionFlowJumpLink>
              をご覧ください。お問い合わせは公式LINEからお願いします。
            </p>
            <div className="mx-auto mb-8 flex max-w-xs justify-center rounded-xl border border-sky-100/90 bg-sky-50/50 px-5 py-4">
              <IllustFlowDm className="h-auto w-full max-w-[200px]" />
            </div>
            <div className="relative z-[1] mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'btn-primary h-auto min-h-12 w-full rounded-full px-4 py-3 shadow-md shadow-sky-300/35 text-primary-foreground sm:min-h-14 sm:max-w-[14rem] sm:px-5 sm:py-4 inline-flex min-w-0 max-w-full flex-col items-center justify-center gap-0.5 text-balance sm:gap-1'
                )}
                onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold leading-none tracking-wide opacity-95 sm:text-xs">
                  <MessageCircle className="size-4 shrink-0 sm:size-5" aria-hidden />
                  {PRIMARY_CTA_LINE_SUBLINE}
                </span>
                <span className="text-center text-sm font-bold leading-tight sm:text-[15px]">{PRIMARY_CTA_LINE_FULL}</span>
                <ArrowRight className="mt-0.5 size-4 shrink-0 opacity-90 sm:hidden" aria-hidden />
              </a>
              <a
                href="#contact-faq"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-auto min-h-12 w-full rounded-full border-sky-200 px-4 py-3 sm:min-h-14 sm:max-w-[14rem] sm:px-5 sm:py-4 inline-flex min-w-0 max-w-full flex-col items-center justify-center gap-1 text-balance text-center text-[13px] font-bold leading-tight tracking-tight sm:text-[15px]'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSiteAnchor('contact-faq');
                  replaceUrlHash('contact-faq');
                }}
              >
                お問い合わせの詳細・FAQ
                <ArrowRight className="size-4 shrink-0 text-muted-foreground sm:hidden" aria-hidden />
              </a>
            </div>
            <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <Link href="/privacy" className="text-accent underline underline-offset-2 hover:opacity-90">
                プライバシーポリシー
              </Link>
              {' · '}
              いただいた内容は制作・お見立てのみに利用します。
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

function ProblemCard({
  item,
  delay,
}: {
  item: { Illustration: BlockIllustration; title: string; desc: string };
  delay: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const Ill = item.Illustration;

  return (
    <div
      ref={ref}
      className={`lp-card overflow-hidden p-6 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.08 * delay}s` }}
    >
      <div className="mb-4 flex justify-center rounded-xl bg-muted/70 px-3 py-4">
        <Ill className="max-h-[120px] w-auto max-w-full" />
      </div>
      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

function FeatureCard({
  feature,
  delay,
}: {
  feature: { title: string; desc: string; Illustration: BlockIllustration };
  delay: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const Ill = feature.Illustration;

  return (
    <div
      ref={ref}
      className={`lp-card overflow-hidden p-7 text-center ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm shadow-sky-200/60">
        <span className="text-base font-bold text-accent-foreground">{delay + 1}</span>
      </div>
      <div className="mx-auto mb-4 flex max-w-[220px] justify-center rounded-xl bg-muted/60 px-2 py-4">
        <Ill className="h-auto w-full" />
      </div>
      <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}
