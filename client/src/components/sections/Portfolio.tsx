import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import {
  MONITOR_SLOT_NOTE,
  PRIMARY_CTA_HEARING,
  RESPONSE_SLA,
} from '@/data/conversionMessaging';

const PORTFOLIO_SITES = [
  {
    title: 'King\'s Code Burger',
    subtitle: '飲食 · ブランドLP',
    url: 'https://kingscodeburger.manus.space/',
    summary:
      'ビジュアルを活かしたメニュー訴求と、来店への導線を意識したワンページ構成のサンプルです。',
    image: '/portfolio/kings-code-burger.png',
    imageAlt: 'King\'s Code Burger のランディングページの参考画面',
    testimonial: {
      quote:
        '世界観が一目で伝わる構成にしていただき、スマホからの問い合わせ導線も迷わないよう整理できました。',
      attribution: '構成レビューコメント（公開デモ・サンプル用）',
    },
  },
  {
    title: 'Chessenger',
    subtitle: 'コミュニティ · マッチングLP',
    url: 'https://chessenger.manus.space/',
    summary:
      'サービスの価値（マッチング体験）を短いセクションで整理し、アクションへの流れを作った例です。',
    image: '/portfolio/chessenger.png',
    imageAlt: 'Chessenger のランディングページの参考画面',
    testimonial: {
      quote:
        '初見のユーザーにも「何ができるか」がすぐ伝わる見出しとブロック構成でイメージ通りになりました。',
      attribution: '構成レビューコメント（公開デモ・サンプル用）',
    },
  },
];

/**
 * Portfolio Section
 * Design: Neo-Tokyo Minimal
 * - Featured public samples + testimonials
 */

export default function Portfolio() {
  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          公開サンプル・構成例
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm leading-relaxed md:text-[15px] text-pretty">
          構成や見せ方の<strong className="font-semibold text-sky-900">参考用</strong>
          として、公開中のデモサイトを掲載しています。実店舗の納品例は案件の公開許諾が取れた順に追加していきます。
        </p>
        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PORTFOLIO_SITES.map((item, idx) => (
            <div
              key={item.url}
              className="lp-card group overflow-hidden rounded-[1.25rem] transition-all animate-fade-in-up hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-200/50 flex flex-col"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Card visual */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-sky-50 to-secondary shrink-0">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain bg-white transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-accent">{item.subtitle}</p>
                  </div>
                  <ExternalLink size={18} className="mt-0.5 shrink-0 text-muted-foreground opacity-70" aria-hidden />
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{item.summary}</p>
                <Button variant="outline" size="lg" className="w-full rounded-full border-sky-200" asChild>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    サイトを開く
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section aria-labelledby="portfolio-voices" className="mb-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Voice</p>
            <h3 id="portfolio-voices" className="text-2xl font-bold md:text-3xl mb-3">
              サンプルへのフィードバック例
            </h3>
            <p className="mx-auto max-w-xl text-[13px] text-muted-foreground leading-relaxed text-pretty md:text-sm">
              以下は<strong className="font-semibold text-sky-950">デモ案件向けに想定した構成コメント</strong>
              であり、特定の実在店舗からの証言ではありません。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PORTFOLIO_SITES.map((item, idx) => (
              <blockquote
                key={item.title}
                className="rounded-[1.25rem] border border-sky-100 bg-secondary/60 p-6 md:p-8 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <p className="text-sm leading-relaxed text-pretty mb-6 text-foreground/95">
                  「{item.testimonial.quote}」
                </p>
                <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-sky-100/90 pt-4 text-xs text-muted-foreground">
                  <cite className="not-italic font-semibold text-sky-900">{item.title}</cite>
                  <span className="text-[11px] md:text-xs">{item.testimonial.attribution}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Early Client Recruitment */}
        <div className="lp-card animate-fade-in-up overflow-hidden rounded-[1.25rem] border-2 border-accent px-6 py-10 text-center shadow-md shadow-sky-200/40 sm:px-8 md:p-12">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl">
            モニター枠・ご依頼について
          </h3>
          <div className="mx-auto mb-6 max-w-2xl text-pretty px-1 text-muted-foreground text-sm leading-relaxed sm:px-0">
            <p className="mb-3">
              {RESPONSE_SLA} お申し込みは公開ページのヒアリングに沿って入力し、コピーした内容をInstagramのDMからお送りください。
            </p>
            <p className="text-[13px] leading-relaxed">{MONITOR_SLOT_NOTE}</p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: '受付まで', desc: 'Web → DM送信' },
              { title: 'モニター', desc: '審査つき・先着' },
              { title: '制作の核', desc: '構成とCTA設計' },
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-[1rem] bg-secondary p-4">
                <p className="text-sm text-muted-foreground mb-1">{benefit.title}</p>
                <p className="text-lg font-bold text-accent">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center px-1 sm:px-3">
            <Button size="lg" className="btn-primary mx-auto inline-flex max-w-[min(100%,22rem)] min-w-0 flex-nowrap px-6 py-7 text-[15px] font-semibold text-primary-foreground sm:py-8" asChild>
              <Link href="/hearing" className="w-full justify-center gap-2">
                {PRIMARY_CTA_HEARING}
                <ArrowRight className="size-5 shrink-0" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
