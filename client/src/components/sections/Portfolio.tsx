import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { MONITOR_SLOT_NOTE, PRIMARY_CTA_HEARING } from '@/data/conversionMessaging';

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
  {
    title: 'Chessenger',
    subtitle: 'コミュニティ · マッチングLP',
    url: 'https://chessenger.manus.space/',
    summary:
      'マッチングの価値を短いセクションで整理し、初見ユーザーが次のアクションに進みやすいブロック構成で納品しています。',
    image: '/portfolio/chessenger.png',
    imageAlt: 'Chessenger に納品したLPの画面キャプチャ',
    testimonial: {
      quote:
        '初見のユーザーにも「何ができるか」がすぐ伝わる見出しとブロック構成で、意図どおりに仕上がりました。',
      role: 'コミュニティ運営・ご担当者様',
    },
  },
] as const;

export default function Portfolio() {
  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <LpSectionEyebrow className="mb-4 md:mb-3">公開事例の一例</LpSectionEyebrow>
        <h2 className="text-center text-[1.625rem] font-bold mb-4 sm:text-3xl md:text-4xl">納品事例（公開サイト）</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm leading-relaxed md:text-[15px] text-pretty">
          ヒアリングを経て<strong className="font-semibold text-sky-950">制作・公開までを完了したLP</strong>
          の一例です（クライアントの公開許諾のもと、URLおよび画面を掲載）。
        </p>

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
          <p className="mx-auto mb-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            受付の進め方は<strong className="text-sky-950">サービス／料金／お問合せ</strong>に一本化しています。ここのくり返しは省きます。
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{MONITOR_SLOT_NOTE}</p>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: 'お申込みまで', desc: 'Web ⇄ DM の流れで統一' },
              { title: 'モニター', desc: '審査・先着あり' },
              { title: '制作の軸', desc: '構成とCTA設計' },
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-[1rem] bg-secondary p-4">
                <p className="mb-1 text-sm text-muted-foreground">{benefit.title}</p>
                <p className="text-lg font-bold text-accent">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center px-1 sm:px-3">
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary mx-auto inline-flex max-w-[min(100%,22rem)] min-w-0 w-full flex-nowrap justify-center gap-2 px-6 py-7 text-[15px] font-semibold text-primary-foreground sm:py-8'
              )}
            >
              {PRIMARY_CTA_HEARING}
              <ArrowRight className="size-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
