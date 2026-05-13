import { Button, buttonVariants } from '@/components/ui/button';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { cn } from '@/lib/utils';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { LINE_OFFICIAL_URL } from '@/constants/locamo';
import {
  PRIMARY_CTA_LINE_FULL,
  SERVICES_COMPARISON_SECTION_TITLE,
  SERVICES_LP_STORY_BULLETS,
  SERVICES_LP_STORY_LEAD,
  SERVICES_LP_STORY_TITLE,
} from '@/data/conversionMessaging';
import { LP_COMPETITOR_COLUMNS, LP_COMPETITOR_ROWS, LP_COMPETITOR_TABLE_CAPTION, COMPARISON_GRADE_ARIA } from '@/data/lpCompetitorComparison';
import type { ComparisonGrade } from '@/data/lpCompetitorComparison';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { SERVICE_PLANS } from '@/data/servicePlans';
import { LP_IMAGES } from '@/lp-images';
import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';

/** LPプランは1つのみだが、そのまま一覧のソースとする */
const LP_PLAN = SERVICE_PLANS[0];

function ComparisonSymbol({ grade, className }: { grade: ComparisonGrade; className?: string }) {
  return (
    <span
      role="img"
      aria-label={COMPARISON_GRADE_ARIA[grade]}
      className={cn('tabular-nums text-lg font-semibold tracking-tight text-primary sm:text-xl', className)}
    >
      {grade}
    </span>
  );
}

/** 他タイプは記号のみ。セル縦長化を避けるためnowrap */
function CompetitorGradeCell({
  grade,
  zebra,
}: {
  grade: ComparisonGrade;
  zebra: 'odd' | 'even';
}) {
  return (
    <td
      className={cn(
        'border-b border-border px-2 py-2 text-center align-middle whitespace-nowrap sm:px-3 sm:py-2.5',
        zebra === 'odd' ? 'bg-slate-100/95' : 'bg-white'
      )}
    >
      <ComparisonSymbol grade={grade} />
    </td>
  );
}

export default function Services() {
  return (
    <div className="lp-section-y px-4">
      <div className="container mx-auto max-w-5xl">
        <LpSectionEyebrow>サービス</LpSectionEyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          LP制作だけに特化
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          複数ページのホームページ制作はお受けしていません。個人店の公式の受け口は<strong className="font-semibold text-sky-950">一枚に集約されたLP</strong>で十分という前提で、その一枚を徹底的に磨きます。金額・納期は{' '}
          <a
            href="#pricing"
            className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              scrollToSiteAnchor('pricing');
              replaceUrlHash('pricing');
            }}
          >
            料金ページ
          </a>
          をご確認ください。
        </p>

        {/* セールスナラティブ */}
        <div className="mx-auto mb-10 max-w-3xl rounded-[1.35rem] border border-sky-100 bg-secondary/35 px-5 py-8 shadow-sm shadow-sky-950/[0.06] md:px-8">
          <h3 className="mb-4 text-lg font-bold text-sky-950 md:text-xl">{SERVICES_LP_STORY_TITLE}</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground text-pretty md:text-[15px]">{SERVICES_LP_STORY_LEAD}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-sky-950/95 md:text-[15px]">
            {SERVICES_LP_STORY_BULLETS.map(text => (
              <li key={text} className="flex gap-3">
                <Check className="mt-0.5 size-[1.125rem] shrink-0 text-accent" aria-hidden />
                <span className="text-pretty">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto mb-10 max-w-4xl overflow-hidden rounded-[1.35rem] border border-sky-100 bg-white shadow-sm shadow-sky-200/30">
          <img alt="LP制作サービスの説明画像" src={LP_IMAGES.servicesBanner}
            alt="Locamoの個人店向けLP制作サービスのイメージ"
            width={1728}
            height={576}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] max-h-[11rem] w-full object-cover sm:max-h-[12rem]"
          />
          <figcaption className="sr-only">サービス全体のビジュアル補足</figcaption>
        </figure>

        {/* サービス詳細カード */}
        <div className="mx-auto mb-14 max-w-lg animate-fade-in-up">
          <div className="relative flex flex-col overflow-hidden rounded-[1.25rem] border border-accent bg-card shadow-lg shadow-sky-200/60 ring-1 ring-sky-100">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden />
            <div className="absolute right-3 top-3 shrink-0">
              <span className="rounded-full border border-primary/40 bg-orange-50/95 px-2.5 py-1 text-[10px] font-semibold leading-none text-primary">
                個人店の定番
              </span>
            </div>

            <div className="border-b border-border p-5 pb-4 pt-11 sm:pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 pr-12 text-lg font-bold md:pr-0">{LP_PLAN.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{LP_PLAN.description}</p>
                </div>
                <div className="mx-auto h-[8.25rem] w-[min(100%,11rem)] shrink-0 overflow-hidden rounded-xl border border-sky-100/90 bg-secondary/40 sm:mx-0 sm:h-[8.75rem]">
                  <img alt="LP制作サービスの説明画像" src={LP_IMAGES.servicePlanLp}
                    alt="LP制作のイメージ（業種別モバイル向けランディングの一例）"
                    width={440}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 p-5">
              <div className="mb-6 space-y-2.5 border-b border-border pb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ページ数</span>
                  <span className="font-semibold">{LP_PLAN.pages}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">納期</span>
                  <span className="font-semibold">{LP_PLAN.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">料金</span>
                  <span className="font-bold text-accent">{LP_PLAN.price}</span>
                </div>
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">含まれる内容</p>
              <ul className="space-y-2">
                {LP_PLAN.features.map(feature => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <Check size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-col px-5 pb-5 pt-0">
              <Button className="btn-primary h-12 w-full rounded-full text-sm font-semibold text-primary-foreground" asChild>
                <Link href={`/services/${LP_PLAN.id}`} className="inline-flex w-full justify-center px-6">
                  プラン詳細を見る
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 他タイプとの比較 — 横幅を取って縦長化（過剰な折り返し）を防ぐ */}
        <div className="animate-fade-in-up">
          <h2 className="mb-3 text-xl font-bold text-pretty">{SERVICES_COMPARISON_SECTION_TITLE}</h2>
          <p className="mb-4 max-w-3xl text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">{LP_COMPETITOR_TABLE_CAPTION}</p>

          <div className="mx-auto w-full max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-sky-950/12 bg-white shadow-sm shadow-sky-950/[0.07]">
              <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
                {/*
                  狭いビューポートでは横スクロールで「横幅のある一枚」として読ませる（縦に伸びるテキスト縞を回避）
                */}
                <table className="w-full min-w-[42rem] border-collapse text-[11px] leading-tight text-foreground sm:min-w-0 sm:text-sm sm:leading-snug lg:table-fixed lg:w-full lg:min-w-0">
                  <caption className="sr-only">Locamo とよくある制作タイプの比較。記号◎○△×で相対評価を示します。</caption>
                  <colgroup>
                    <col className="lg:w-[19%]" />
                    <col className="lg:w-[37%]" />
                    <col className="lg:w-[11%]" />
                    <col className="lg:w-[11%]" />
                    <col className="lg:w-[11%]" />
                  </colgroup>
                  <thead>
                    <tr className="bg-sky-950 text-white shadow-inner">
                      {LP_COMPETITOR_COLUMNS.map(col => (
                        <th
                          key={col.id}
                          scope="col"
                          className={cn(
                            'border-b border-sky-800/90 px-2 py-2 text-center text-[11px] font-semibold leading-tight sm:px-3 sm:py-2.5 sm:text-sm',
                            col.id === 'point' &&
                              'sticky left-0 z-30 bg-sky-950 text-left text-white shadow-[4px_0_12px_-4px_rgb(15_23_42_/_0.42)] min-w-[7.75rem]',
                            col.id === 'locamo' &&
                              'relative z-30 border-x-2 border-amber-500/95 bg-sky-900 text-white shadow-[inset_0_-1px_0_0_rgb(248_250_252_/_0.12)]',
                            col.id !== 'point' && col.id !== 'locamo' && 'font-medium text-white/92 whitespace-nowrap min-w-[4.75rem]'
                          )}
                        >
                          {col.id === 'locamo' ? (
                            <span className="block font-bold tracking-tight">{col.heading}</span>
                          ) : (
                            col.heading
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {LP_COMPETITOR_ROWS.map((row, rowIdx) => {
                      const zebra = rowIdx % 2 === 0 ? ('odd' as const) : ('even' as const);
                      const rowBg = zebra === 'odd' ? 'bg-slate-100/92' : 'bg-white';

                      return (
                        <tr key={row.point} className="transition-colors hover:bg-sky-50/30">
                          <th
                            scope="row"
                            className={cn(
                              'sticky left-0 z-[5] min-w-[7.75rem] max-w-[10rem] border-b border-border px-2 py-2 text-left align-middle text-[11px] font-medium text-sky-950 shadow-[4px_0_12px_-5px_rgb(15_23_42_/_0.3)] sm:max-w-none sm:px-3 sm:text-sm',
                              rowBg,
                              zebra === 'odd' && 'border-r border-border/65'
                            )}
                          >
                            {row.point}
                          </th>

                          <td
                            className={cn(
                              'border-b border-primary/35 border-x-2 border-primary bg-white px-2 py-2 align-middle shadow-[inset_0_0_0_1px_rgb(254_252_232_/_0.45)] sm:px-3',
                              zebra === 'odd' && 'bg-amber-50/40'
                            )}
                          >
                            <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-0.5 sm:flex-nowrap sm:gap-x-3">
                              <ComparisonSymbol grade={row.locamo.grade} className="shrink-0" />
                              <p className="min-w-0 flex-1 text-left text-[10px] leading-snug text-sky-900/93 text-pretty sm:text-xs sm:leading-snug">
                                {row.locamo.note}
                              </p>
                            </div>
                          </td>

                          <CompetitorGradeCell grade={row.mass} zebra={zebra} />
                          <CompetitorGradeCell grade={row.system} zebra={zebra} />
                          <CompetitorGradeCell grade={row.freelancer} zebra={zebra} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground sm:text-xs lg:hidden">
              狭い画面では表を<strong className="font-medium text-sky-800">左右にスクロール</strong>すると全体が一望できます。
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground sm:text-xs">
              <span>
                <span className="font-semibold text-primary">◎</span> とても評価しやすい
              </span>
              <span>
                <span className="font-semibold text-primary">○</span> バランス型
              </span>
              <span>
                <span className="font-semibold text-primary">△</span> 条件により不安
              </span>
              <span>
                <span className="font-semibold text-primary">×</span> 不向きになりやすい
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          ※別途、サイト公開・ドメインは月3,000円〜（初期設定サポート込み）。
        </p>

        <div className="mt-12 text-center animate-fade-in-up">
          <p className="mx-auto mb-4 max-w-lg text-pretty text-sm text-muted-foreground">
            まずは公式LINEにお店の状況だけ送っていただければ、一枚で足りるか・何を載せればよいか、こちらからお返しします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={LINE_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary inline-flex items-center justify-center gap-2 px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
              onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
            >
              <MessageCircle size={18} aria-hidden />
              {PRIMARY_CTA_LINE_FULL}
              <ArrowRight size={16} aria-hidden />
            </a>
            <Button size="lg" variant="outline" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a
                href="#contact-faq"
                className="inline-flex items-center justify-center gap-2"
                onClick={e => {
                  e.preventDefault();
                  scrollToSiteAnchor('contact-faq');
                  replaceUrlHash('contact-faq');
                }}
              >
                サイト内のお問い合わせ・FAQを見る
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
