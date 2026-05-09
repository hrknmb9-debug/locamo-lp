import { Button, buttonVariants } from '@/components/ui/button';
import { HeroFlowStrip } from '@/components/lp/HeroFlowStrip';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';
import { cn } from '@/lib/utils';
import { ArrowRight, ClipboardList, Instagram, Sparkles, Zap, Activity, LayoutList, Waypoints } from 'lucide-react';
import { Link } from 'wouter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import {
  ABOUT_SECTION_EYEBROW,
  APPLY_SECTION_EYEBROW,
  HEARING_FLOW_SHORT,
  HERO_VALUE_HOOK,
  MONITOR_BADGE_LINES,
  MONITOR_SLOT_NOTE,
  PRIMARY_CTA_DM_CONTACT,
  PRIMARY_CTA_DM_SUBLINE,
  PRIMARY_CTA_HEARING_FULL,
  PROMISE_SECTION_EYEBROW,
  REFER_CONTACT_FOR_SLA,
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
import { DM_URL } from '@/constants/locamo';

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(50, 2000, isVisible);

  return (
    <div ref={ref} className="min-w-0 space-y-3 animate-fade-in-up">
      <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-4 md:gap-8">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">{count}+</div>
          <p className="mt-2 text-sm text-muted-foreground">累計案件</p>
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
        ※納案件・運用準備におけるサイト制作を含む社内集計です。公開サイトは{' '}
        <a
          href="#works"
          className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            scrollToSiteAnchor('works');
            replaceUrlHash('works');
          }}
        >
          「納品事例」
        </a>
        をご覧ください。
        <span className="mt-2 block text-xs leading-relaxed text-sky-900/85 sm:text-sm">
          別途 サイト公開・ドメイン費用 月3,000円〜（込み）。{MONITOR_SLOT_NOTE}
        </span>
      </p>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="w-full min-w-0 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-x-clip px-4 py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-sky-100 blur-3xl opacity-55" />
          <div className="absolute top-1/2 -left-24 size-72 rounded-full bg-cyan-100 blur-3xl opacity-45" />
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-3xl px-3 text-center sm:px-2">
          {/* キャンペーン & メイン約束 — モバイル順序統一 */}
          <div className="animate-fade-in mb-6 flex flex-col items-center gap-2.5 sm:mb-7 sm:gap-3" style={{ animationDelay: '0.08s' }}>
            <div className="jp-keep-all w-full max-w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-sky-200 bg-white/95 px-4 py-3 shadow-sm sm:max-w-xl sm:py-3.5">
              <span className="flex min-w-0 items-start gap-2">
                <Sparkles className="size-4 shrink-0 pt-0.5 text-accent" aria-hidden />
                <span className="min-w-0 text-left text-[13px] font-semibold leading-relaxed text-sky-950 sm:text-sm md:text-[0.9375rem]">{HERO_VALUE_HOOK}</span>
              </span>
            </div>
            <div
              className={cn(
                'jp-keep-all w-full max-w-[min(21rem,calc(100vw-2rem))] rounded-[1.125rem] border-2 border-primary/55 bg-gradient-to-b from-orange-50 to-amber-50 px-4 py-3 text-primary shadow-md shadow-orange-400/18 sm:max-w-md',
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

          <h1
            className="jp-keep-all mx-auto mb-6 max-w-full animate-fade-in-up text-[1.875rem] font-bold leading-snug tracking-tight text-balance sm:mb-5 sm:text-[2rem] md:mb-5 md:text-5xl md:leading-tight lg:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            Instagramを見たお客様が、<br className="block sm:hidden" aria-hidden />
            メニューやご予約まで迷わなくなるLPへ。
          </h1>

          <div
            className="animate-fade-in-up mx-auto mb-8 max-w-xl min-w-0 space-y-3 text-pretty md:space-y-2"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="jp-keep-all mx-auto w-full max-w-full rounded-2xl border border-sky-100 bg-sky-50/85 px-3 py-3 text-[13px] leading-relaxed text-sky-900 sm:px-4 sm:text-[0.9375rem] md:leading-relaxed">
              <p>
                <strong className="font-semibold text-sky-950">AIで構成・文案のたたき台を素早く作成</strong>し、人が読み順とCTAまで整えます。
              </p>
              <p className="mt-2 flex flex-col gap-2 leading-relaxed sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-center sm:gap-x-2 sm:gap-y-1">
                <span>
                  LP制作<strong className="font-semibold text-sky-800 sm:whitespace-nowrap">3万円〜</strong>
                </span>
                <span aria-hidden className="hidden shrink-0 text-sky-300 sm:inline">
                  ·
                </span>
                <span>
                  公開
                  <strong className="font-semibold text-sky-800 sm:whitespace-nowrap">・ドメイン月3,000円〜</strong>
                  （別途）。
                </span>
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
                モニター枠の細部は下の脚注と
                <ProductionFlowJumpLink className="mx-1 inline align-baseline">料金｜制作の流れ</ProductionFlowJumpLink>
                をご確認ください。
              </p>
            </div>
            <p className="jp-keep-all text-base leading-relaxed text-muted-foreground md:text-[1.05rem] md:leading-relaxed">
              SNSに散らばりがちな情報を<strong className="font-semibold text-sky-950">公式の一枚</strong>
              にまとめ、次に何をすればよいかを読み順で示します。
            </p>
          </div>

          <figure className="mx-auto mb-8 max-w-[42rem] w-full animate-fade-in-up sm:mb-10" style={{ animationDelay: '0.42s' }}>
            <div className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white shadow-xl shadow-sky-200/40 ring-1 ring-sky-100/80">
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
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex min-h-12 w-full shrink-0 items-center justify-center px-8 py-[1.375rem] text-sm font-semibold text-primary-foreground sm:w-auto sm:min-h-11 sm:py-6',
              )}
            >
              {PRIMARY_CTA_HEARING_FULL}
              <ArrowRight className="ml-1.5 shrink-0" size={17} aria-hidden />
            </Link>
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

      <div id="workflow" className={`${SCROLL_MARGIN_CLASS} space-y-16 md:space-y-24`}>
      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <LpSectionEyebrow>{WORKFLOW_SECTION_EYEBROW}</LpSectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">「集客はSNS」のみになりがちな課題</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            まとまったサイトがない状態だと次のような偏りやすさがあります
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'フォロワー依存',
                desc: 'フォロワー数に左右される不安定な集客',
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: 'リーチのブレ',
                desc: '投稿の届き方は変わりやすく、同じ成果を出すために手間と試行が増えがち',
              },
              {
                icon: <LayoutList className="w-5 h-5" />,
                title: '情報の分散',
                desc: 'メニュー・料金・アクセスがストーリーとハイライトに散らばり、決め手までたどり着きにくい',
              },
              {
                icon: <Waypoints className="w-5 h-5" />,
                title: '入口の偏り',
                desc: 'LPや紹介ページがないと、新規との接点がSNS・口コミに寄り勝ちになる',
              },
            ].map((item, idx) => (
              <ProblemCard key={idx} item={item} delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Locamo Section */}
      <section className="lp-soft-band py-16 md:py-24 px-4">
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
              },
              {
                title: '買い切り型',
                desc: 'LP制作費3万円〜の買い切り。サイト公開・ドメイン込みで月3,000円〜のランニングのみ。',
              },
              {
                title: 'LPで注文までの設計',
                desc: '誰が・何を読めば・次に何をすべきかを迷わせない並びへ。ヒアリングでゴールから逆算します。',
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} delay={idx} />
            ))}
          </div>

          <div className="mx-auto mb-10 max-w-3xl rounded-[1.35rem] border border-sky-100 bg-white/85 px-6 py-8 shadow-sm md:px-10">
            <LpSectionEyebrow className="mb-3">{PROMISE_SECTION_EYEBROW}</LpSectionEyebrow>
            <h3 className="mb-3 text-center text-lg font-bold text-sky-950">ご返信までの目安・スコープ</h3>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">{RESPONSE_SLA}</p>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <p className="mb-3 text-sm font-semibold text-sky-950">{SCOPE_INCLUDED_HEADING}</p>
                <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                  {SCOPE_INCLUDED_BULLETS.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-sky-950">{SCOPE_EXCLUDED_HEADING}</p>
                <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-sky-400">
                  {SCOPE_EXCLUDED_BULLETS.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING_FULL}
              <ArrowRight className="ml-1.5 shrink-0" size={17} aria-hidden />
            </Link>
            <Button variant="outline" size="lg" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href="#pricing">料金・フローを見る</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ヒアリング・クロージング（下部） */}
      <section className="border-t border-sky-100/90 bg-gradient-to-b from-orange-50/80 via-[#fffaf5] to-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative z-10 rounded-[1.65rem] border-2 border-primary/35 bg-white/95 px-7 py-10 shadow-lg shadow-orange-100/60 md:p-14">
            <LpSectionEyebrow className="mb-4 text-primary">{APPLY_SECTION_EYEBROW}</LpSectionEyebrow>
            <h2 className="mb-3 text-center text-2xl font-bold leading-snug md:text-[1.7rem]">
              {HEARING_FLOW_SHORT}
            </h2>
            <p className="mx-auto mb-5 max-w-lg text-center text-sm leading-relaxed text-muted-foreground jp-keep-all">
              <strong className="font-semibold text-sky-950">時系列だけは</strong>
              <ProductionFlowJumpLink className="mx-0.5">料金ページの制作の流れ</ProductionFlowJumpLink>
              に一本化しました。ここでは操作の体感にだけ絞ります。
            </p>
            <p className="mx-auto mb-8 max-w-lg text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {REFER_CONTACT_FOR_SLA}
            </p>
            <div className="relative z-[1] mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'btn-primary h-auto min-h-12 w-full rounded-full px-4 py-3 shadow-md shadow-sky-300/35 text-primary-foreground sm:min-h-14 sm:max-w-[13.5rem] sm:px-5 sm:py-4 inline-flex min-w-0 max-w-full flex-col items-center justify-center gap-0.5 text-balance sm:gap-1'
                )}
                onClick={(e) => activateExternalHref(e, DM_URL)}
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold leading-none tracking-wide opacity-95 sm:text-xs">
                  <Instagram className="size-4 shrink-0 sm:size-5" aria-hidden />
                  {PRIMARY_CTA_DM_SUBLINE}
                </span>
                <span className="text-center text-sm font-bold leading-tight sm:text-[15px]">{PRIMARY_CTA_DM_CONTACT}</span>
                <ArrowRight className="mt-0.5 size-4 shrink-0 opacity-90 sm:hidden" aria-hidden />
              </a>
              <Link
                href="/hearing"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-auto min-h-12 w-full rounded-full border-sky-200 px-4 py-3 sm:min-h-14 sm:max-w-[13.5rem] sm:px-5 sm:py-4 inline-flex min-w-0 max-w-full flex-col items-center justify-center gap-1 text-balance'
                )}
              >
                <ClipboardList className="size-4 shrink-0 text-accent sm:size-5" aria-hidden />
                <span className="text-center text-[13px] font-bold leading-tight tracking-tight sm:text-[15px]">{PRIMARY_CTA_HEARING_FULL}</span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground sm:hidden" aria-hidden />
              </Link>
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

function ProblemCard({ item, delay }: { item: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`lp-card p-6 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.08 * delay}s` }}
    >
      <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-sky-50 text-accent [&_svg]:stroke-[1.75]">
        {item.icon}
      </div>
      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`lp-card p-7 text-center ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm shadow-sky-200/60">
        <span className="text-base font-bold text-accent-foreground">{delay + 1}</span>
      </div>
      <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}
