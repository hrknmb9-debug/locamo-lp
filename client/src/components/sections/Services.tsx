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
import { LP_COMPETITOR_COLUMNS, LP_COMPETITOR_ROWS, LP_COMPETITOR_TABLE_CAPTION } from '@/data/lpCompetitorComparison';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { SERVICE_PLANS } from '@/data/servicePlans';
import { LP_IMAGES } from '@/lp-images';
import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';

/** LPプランは1つのみだが、そのまま一覧のソースとする */
const LP_PLAN = SERVICE_PLANS[0];

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
          <img
            src={LP_IMAGES.servicesBanner}
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
                  <img
                    src={LP_IMAGES.servicePlanLp}
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

        {/* 他タイプとの比較 */}
        <div className="animate-fade-in-up">
          <h3 className="mb-4 text-xl font-bold text-pretty">{SERVICES_COMPARISON_SECTION_TITLE}</h3>
          <p className="mb-5 max-w-3xl text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">{LP_COMPETITOR_TABLE_CAPTION}</p>
          <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-sm shadow-sky-950/5">
            <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              <table className="min-w-[44rem] w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {LP_COMPETITOR_COLUMNS.map(col => (
                      <th
                        key={col.id}
                        scope="col"
                        className={cn(
                          'whitespace-normal px-3 py-3.5 text-left align-bottom font-semibold leading-snug sm:px-4',
                          col.id === 'point' ? 'min-w-[9.5rem] max-w-[11rem]' : 'min-w-[8.5rem]',
                          col.id === 'locamo' ? 'bg-accent/10 text-sky-950' : 'text-foreground'
                        )}
                      >
                        {col.heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LP_COMPETITOR_ROWS.map(row => (
                    <tr key={row.point} className="border-b border-border last:border-0 hover:bg-secondary/25">
                      <th scope="row" className="max-w-[12rem] px-3 py-3.5 text-left font-medium text-foreground sm:px-4">
                        {row.point}
                      </th>
                      <td className="px-3 py-3.5 align-top text-muted-foreground sm:px-4">{row.mass}</td>
                      <td className="px-3 py-3.5 align-top text-muted-foreground sm:px-4">{row.freelancer}</td>
                      <td className="px-3 py-3.5 align-top text-muted-foreground sm:px-4">{row.diy}</td>
                      <td className="bg-accent/[0.07] px-3 py-3.5 align-top font-medium text-sky-950 sm:px-4">{row.locamo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
