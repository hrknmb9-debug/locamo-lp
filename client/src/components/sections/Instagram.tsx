import { Button } from '@/components/ui/button';
import { Instagram, ArrowRight, TrendingUp } from 'lucide-react';
import { DM_URL, IG_URL } from '@/constants/locamo';
import { LP_IMAGES } from '@/lp-images';

/**
 * Instagram Section
 * Design: Neo-Tokyo Minimal
 * - Risk illustration of Instagram-only strategy
 * - Benefits of combining with LP/HP
 * - Instagram account link
 */

export default function InstagramPage() {
  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          InstagramとLocamoの組み合わせ
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Instagramだけに頼らない、安定した集客を実現
        </p>

        <figure className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-lg shadow-sky-200/25">
          <img
            src={LP_IMAGES.hero}
            alt=""
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
          <figcaption className="sr-only">SNSとランディングページを連携するイメージ</figcaption>
        </figure>

        {/* Problem: Instagram Only */}
        <section className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Instagramのみ運用の課題
          </h3>

          <div className="lp-card overflow-hidden rounded-[1.25rem] border border-sky-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Diagram */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xs">
                  <div className="bg-secondary rounded-lg p-6 text-center mb-4">
                    <Instagram className="w-12 h-12 mx-auto text-accent mb-2" />
                    <p className="font-semibold">Instagram</p>
                    <p className="text-xs text-muted-foreground mt-2">フォロワー数に依存</p>
                  </div>
                  <div className="text-center text-muted-foreground text-sm mb-4">
                    <p className="mb-2">↓</p>
                    <p className="text-red-500 font-semibold">不安定な集客</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-red-500">
                      アルゴリズム変更で
                      <br />
                      集客が激減
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Problems */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">具体的な課題</h4>
                {[
                  'フォロワー数が増えないと集客できない',
                  'Instagramのアルゴリズム変更に左右される',
                  '広告費が増加する傾向',
                  'Google検索からの流入がない',
                  '店舗情報が散在して管理が大変',
                  '営業時間やメニューの更新が手間',
                ].map((problem, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✕</span>
                    <p className="text-sm">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution: Instagram + Locamo */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Locamo + Instagramの組み合わせ
          </h3>

          <div className="rounded-[1.25rem] border border-accent/35 bg-gradient-to-r from-sky-50 via-cyan-50/80 to-white p-8 shadow-sm shadow-sky-950/5 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Diagram */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xs">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary rounded-lg p-4 text-center">
                      <Instagram className="w-8 h-8 mx-auto text-accent mb-2" />
                      <p className="text-xs font-semibold">Instagram</p>
                      <p className="text-xs text-muted-foreground mt-1">認知・ファン化</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4 text-center">
                      <TrendingUp className="w-8 h-8 mx-auto text-accent mb-2" />
                      <p className="text-xs font-semibold">Locamo LP</p>
                      <p className="text-xs text-muted-foreground mt-1">集客・成約</p>
                    </div>
                  </div>
                  <div className="text-center text-muted-foreground text-sm mb-4">
                    <p className="mb-2">↓</p>
                    <p className="text-accent font-semibold">安定した集客フロー</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-accent">
                      複数の流入経路で
                      <br />
                      リスク分散
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Benefits */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">得られるメリット</h4>
                {[
                  'Instagramはそのまま活用（ファン化・認知）',
                  'LPで確実な集客・成約を実現',
                  'Google検索からの流入が増加',
                  'アルゴリズム変更の影響を最小化',
                  '店舗情報を一元管理',
                  'SEO効果で長期的な資産化',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <p className="text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Message */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="rounded-[1.25rem] border-2 border-accent bg-card p-8 text-center md:p-12 shadow-md shadow-sky-200/40">
            <h3 className="text-2xl font-bold mb-4">
              InstagramはそのままでOK。
              <br />
              <span className="text-accent">LPを加えるだけ。</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Instagramの運用を続けながら、Locamoで制作したLPを活用することで、
              より多くのお客様に到達できます。
            </p>
          </div>
        </section>

        {/* Instagram Account Link */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Locamoをフォロー</h3>
            <p className="text-muted-foreground mb-8">
              最新情報やお役立ち情報を発信しています
            </p>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="btn-primary flex items-center gap-2 px-8 py-7 text-base font-semibold text-primary-foreground"
              >
                <Instagram size={24} />
                Locamoをフォロー
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="rounded-[1.25rem] bg-secondary p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">
              Instagramとの連携を前提にしたLP制作
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Locamoなら、Instagramからの流入を最大化するLP設計が標準装備です
            </p>
            <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="btn-primary px-8 py-7 text-base font-semibold text-primary-foreground">
                無料診断を受ける
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
