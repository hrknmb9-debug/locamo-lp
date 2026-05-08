import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { DM_URL } from '@/constants/locamo';
import { LP_IMAGES } from '@/lp-images';

const PORTFOLIO_SITES = [
  {
    title: 'King\'s Code Burger',
    subtitle: '飲食 · ブランドLP',
    url: 'https://kingscodeburger.manus.space/',
    summary:
      'ビジュアルを活かしたメニュー訴求と、来店への導線を意識したワンページ構成のサンプルです。',
    image: LP_IMAGES.portfolio[0],
    imageAlt: 'King\'s Code Burger のランディングページの参考画面',
    testimonial: {
      quote:
        '世界観が一目で伝わる構成にしていただき、スマホからの問い合わせ導線も迷わないよう整理できました。',
      attribution: '飲食ブランド準備のクライアント様',
    },
  },
  {
    title: 'Chessenger',
    subtitle: 'コミュニティ · マッチングLP',
    url: 'https://chessenger.manus.space/',
    summary:
      'サービスの価値（マッチング体験）を短いセクションで整理し、アクションへの流れを作った例です。',
    image: LP_IMAGES.portfolio[2],
    imageAlt: 'Chessenger のランディングページの参考画面',
    testimonial: {
      quote:
        '初見のユーザーにも「何ができるか」がすぐ伝わる見出しとブロック構成でイメージ通りになりました。',
      attribution: 'コミュニティ・Webサービス関係のクライアント様',
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
          制作実績
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm leading-relaxed md:text-[15px]">
          Manus で公開されているサンプルサイトをご紹介しています。
          <br />
          実サイトを開いて雰囲気・構成をご確認ください。
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
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
              お客様の声
            </h3>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed">
              各サンプルを前提に、「こういうご評価をいただける構成」をテーマ別に一文でまとめた例です。（実際の証言とは異なる場合があります）
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
            ご依頼・モニター枠について
          </h3>
          <div className="mx-auto mb-6 max-w-2xl text-pretty px-1 text-muted-foreground sm:px-0">
            <p>
              一覧以外にも、Instagram 連動を見据えた LP のご提案が可能です。まずは無料診断からご相談ください。
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: '無料診断', desc: 'DM でご相談' },
              { title: 'モニター枠', desc: '制作無料（条件あり）' },
              { title: 'Instagram', desc: '導線を前提に設計' },
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-[1rem] bg-secondary p-4">
                <p className="text-sm text-muted-foreground mb-1">{benefit.title}</p>
                <p className="text-lg font-bold text-accent">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center px-1 sm:px-3">
            <Button size="lg" className="btn-primary mx-auto inline-flex max-w-[min(100%,22rem)] min-w-0 flex-nowrap px-6 py-7 text-[15px] font-semibold text-primary-foreground sm:py-8" asChild>
              <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="w-full justify-center gap-2">
                無料診断を受ける（DM）
                <ArrowRight className="size-5 shrink-0" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
