import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import {
  IllustFeatureCta,
  IllustFlowDm,
  IllustGuideReply,
} from '@/components/lp/BespokeIllustrations';
import { LP_IMAGES } from '@/lp-images';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { LINE_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { Link } from 'wouter';
import { MONITOR_SLOT_NOTE, PRIMARY_CTA_HEARING } from '@/data/conversionMessaging';

const BAKERY_SAMPLE_LP_URL = 'https://bakerylp-l8mnzqhc.manus.space/' as const;

const PORTFOLIO_SITES = [
  {
    title: "King's Code Burger",
    subtitle: '飲食 · ブランドLP',
    url: 'https://kingscodeburger.manus.space/',
    summary:
      '飲食ブランドの世界観とメニューを一枚に集約し、来店・問い合わせまでを迷わせない流れに整えた納品事例です。',
    image: '/portfolio/kings-code-burger.png',
    imageAlt: "King's Code Burger に納品したLPの画面キャプチャ",
    testimonial: {
      quote:
        '世界観が一目で伝わる構成にしていただき、スマホからの問い合わせ導線も迷わないよう整理できました。',
      role: '飲食ブランド・ご担当者様',
    },
  },
] as const;

export default function Portfolio() {
  return (
    <div className="space-y-16 md:space-y-28 lp-section-y px-4">
      <div className="container mx-auto max-w-5xl">
        <LpSectionEyebrow className="mb-4 md:mb-3">公開事例の一例</LpSectionEyebrow>
        <h2 className="text-center text-[1.625rem] font-bold mb-4 sm:text-3xl md:text-4xl">納品事例（公開サイト）</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm leading-relaxed md:text-[15px] text-pretty">
          ヒアリングを経て<strong className="font-semibold text-sky-950">制作・公開までを完了したLP</strong>
          の一例です（クライアントの公開許諾のもと、URLおよび画面を掲載）。
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4" aria-hidden>
          {LP_IMAGES.portfolio.map(src => (
            <div
              key={src}
              className="w-[calc(50%-0.375rem)] max-w-[9.25rem] overflow-hidden rounded-[1rem] border border-sky-100 bg-white shadow-sm shadow-sky-950/5 sm:w-[9.25rem]"
            >
              <img src={src} alt="Locamo で制作した実績LP" className="aspect-[4/3] h-auto w-full object-cover" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>

        <section className="mb-16" aria-labelledby="lp-layout-samples-heading">
          <h3
            id="lp-layout-samples-heading"
            className="mb-2 text-center text-lg font-bold text-sky-950 sm:text-xl md:text-2xl"
          >
            LPの構成例（飲食・ベーカリー参考）
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-[15px] text-pretty">
            <strong className="font-semibold text-sky-950">キャッチ／こだわり／商品／シーン／店舗情報</strong>
            といった並びを想定したデモです。スクショ全体像の確認に加え、
            <a
              href={BAKERY_SAMPLE_LP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:opacity-90"
            >
              公開中のサンプルLP
            </a>
            でもご覧いただけます。
          </p>
            <figure className="mx-auto flex max-w-3xl flex-col rounded-[1.25rem] border border-sky-100 bg-card shadow-sm shadow-sky-950/5">
            <figcaption className="flex flex-col gap-3 rounded-t-[1.25rem] border-b border-sky-100 bg-card px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="min-w-0 text-left">
                <p className="text-base font-semibold text-sky-950">Bakery Sample LP（構成イメージ）</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  下の枠は参考キャプチャです（枠内を上下スクロール）。実サイトはボタン・リンクからご覧ください。
                </p>
              </div>
              <Button variant="outline" size="lg" className="w-full shrink-0 rounded-full border-sky-200 sm:w-auto" asChild>
                <a
                  href={BAKERY_SAMPLE_LP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <span className="whitespace-nowrap">サンプルLPを別タブで開く</span>
                  <ExternalLink size={16} aria-hidden />
                </a>
              </Button>
            </figcaption>
            <div
              className={cn(
                'relative isolate min-h-[12rem] max-h-[min(72vh,600px)]',
                'touch-pan-y overflow-y-scroll overscroll-y-auto',
                'rounded-b-[1.25rem] bg-secondary/40',
              )}
              tabIndex={0}
              role="region"
              aria-label="ベーカリー参考LPの縦スクロールプレビュー"
            >
              <img
                src="/lp-examples/lp-sample-bakery.png"
                alt="ベーカリー向けサンプルLPの画面構成（参考キャプチャ）"
                width={1200}
                height={2400}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="pointer-events-none block h-auto w-full select-none object-top"
              />
            </div>
          </figure>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PORTFOLIO_SITES.map((item, idx) => (
            <article
              key={item.url}
              className="lp-card group flex flex-col overflow-hidden rounded-[1.25rem] transition-all animate-fade-in-up hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-200/50"
              style={{ animationDelay: `${0.1 * idx}s` }}
              aria-labelledby={`portfolio-case-${idx}`}
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-sky-50 to-secondary">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain bg-white transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 id={`portfolio-case-${idx}`} className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent">{item.subtitle}</p>
                  </div>
                  <ExternalLink size={18} className="mt-0.5 shrink-0 text-muted-foreground opacity-70" aria-hidden />
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

                <blockquote className="mb-6 border-l-2 border-accent/50 pl-3.5">
                  <p className="text-sm leading-relaxed text-foreground/95 text-pretty">「{item.testimonial.quote}」</p>
                  <footer className="mt-2 text-xs text-muted-foreground sm:text-sm">― {item.testimonial.role}</footer>
                </blockquote>

                <Button variant="outline" size="lg" className="mt-auto w-full rounded-full border-sky-200" asChild>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    公開サイトを開く
                    <ArrowRight size={16} aria-hidden />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="lp-card animate-fade-in-up overflow-hidden rounded-[1.25rem] border-2 border-accent px-6 py-10 text-center shadow-md shadow-sky-200/40 sm:px-8 md:p-12">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl">モニター枠・新規ご依頼について</h3>
          <p className="mx-auto mb-6 max-w-md text-[15px] font-semibold leading-snug text-sky-950 sm:text-base">
            ご依頼・モニター枠の受付手順は、サービス・料金・お問い合わせにまとめています。
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{MONITOR_SLOT_NOTE}</p>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: 'お申込みまで', desc: 'LINE での流れで統一', Ill: IllustFlowDm },
              { title: 'モニター', desc: '審査・先着あり', Ill: IllustGuideReply },
              { title: '制作の軸', desc: '構成とCTA設計', Ill: IllustFeatureCta },
            ].map((benefit, idx) => {
              const SvgIll = benefit.Ill;
              return (
              <div key={idx} className="flex flex-col rounded-[1rem] bg-secondary p-4 text-center md:text-left">
                <div className="mx-auto mb-3 flex h-[4.75rem] w-full max-w-[9rem] items-center justify-center md:mx-0">
                  <SvgIll className="h-auto w-full max-h-[4.25rem]" />
                </div>
                <p className="mb-1 text-sm text-muted-foreground">{benefit.title}</p>
                <p className="text-lg font-bold text-accent">{benefit.desc}</p>
              </div>
              );
            })}
          </div>

          <div className="flex w-full justify-center px-1 sm:px-3">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => activateExternalHref(e, LINE_URL)}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary mx-auto inline-flex max-w-[min(100%,22rem)] min-w-0 w-full flex-nowrap justify-center gap-2 px-6 py-7 text-[15px] font-semibold text-primary-foreground sm:py-8'
              )}
            >
              {PRIMARY_CTA_HEARING}
              <ArrowRight className="size-5 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
