import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Sparkles, Zap, DollarSign, Share2, Search } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { DM_URL, HEARING_SHEET_URL } from '@/constants/locamo';
import { LP_IMAGES } from '@/lp-images';

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(50, 2000, isVisible);

  return (
    <div ref={ref} className="space-y-3 animate-fade-in-up">
      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">{count}+</div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">制作実績</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">3万円〜</div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">LP制作費</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">2週間</div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">納期目安</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center leading-relaxed px-1">
        ※別途 サーバー・ドメイン費用 月3,000円〜（込み）。
        <span className="mt-1 block text-[11px] text-sky-900/80">
          現在モニター3店舗募集中：採用枠内の制作は無料。枠終了後の通常依頼は3万円〜。
        </span>
      </p>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-sky-100 blur-3xl opacity-55" />
          <div className="absolute top-1/2 -left-24 size-72 rounded-full bg-cyan-100 blur-3xl opacity-45" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-2 text-center">
          {/* キャンペーン & 肩書き */}
          <div
            className="animate-fade-in mb-4 flex flex-col items-center gap-3"
            style={{ animationDelay: '0.08s' }}
          >
            <span className="inline-flex max-w-[min(100%,22rem)] items-center justify-center rounded-full border-2 border-primary/50 bg-gradient-to-b from-orange-50 to-amber-50 px-4 py-2.5 text-center text-[11px] font-bold leading-snug text-primary shadow-sm sm:text-xs">
              現在モニター3店舗募集中 · 採用店舗は制作無料（先着順）
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-xs font-semibold text-sky-800 shadow-sm">
              <Sparkles className="size-3.5 shrink-0 text-accent" aria-hidden />
              AI × マーケターの視点で、集客導線まで一気通貫
            </span>
          </div>

          <div
            className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-800"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
            大阪の個人店専門 · Web制作サービス
          </div>

          {/* Main Catchphrase */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            フォロワーを来店客に、<br className="hidden sm:block" />
            3万円〜で。
          </h1>

          {/* Subheading */}
          <p
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto animate-fade-in-up leading-relaxed text-pretty"
            style={{ animationDelay: '0.35s' }}
          >
            大阪の個人店向けLP制作は3万円〜（モニター枠は無料）。
            Instagramとの連携を前提に設計された、月額不要のWeb制作です。構成・文案のたたきはAIを活用しつつ、マーケティングの観点で導線・訴求を整えます。
          </p>

          {/* Visual */}
          <figure
            className="mx-auto mb-10 max-w-[42rem] w-full animate-fade-in-up"
            style={{ animationDelay: '0.42s' }}
          >
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

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a href={DM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="btn-primary w-full px-8 py-6 text-sm font-semibold text-primary-foreground sm:w-auto"
              >
                無料診断を受ける
                <ArrowRight className="ml-1.5" size={17} />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              type="button"
              className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold text-foreground hover:bg-sky-50"
              onClick={() => {
                window.location.hash = 'services';
              }}
            >
              サービスを見る
            </Button>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>

          {/* Stats */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <StatsSection />
          </div>
        </div>
      </section>

      {/* ヒアリング */}
      <section className="px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-[1.5rem] border border-sky-100 bg-white p-8 shadow-md shadow-sky-200/30 md:p-10">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-accent">Hearing</p>
            <h2 className="mb-4 text-center text-2xl font-bold md:text-[1.65rem]">
              要件の整理は、公開ヒアリングシートから
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground text-pretty">
              下記のシートで項目に沿って入力いただき、完了した内容をコピーまたはスクリーンショットとして
              <strong className="font-semibold text-sky-950"> Instagram DM にお送り</strong>
              ください。フォーム送信は行いません。
            </p>
            <div className="flex max-w-lg flex-col gap-3 sm:mx-auto sm:flex-row sm:justify-center">
              <Button variant="outline" className="rounded-full border-sky-300 bg-sky-50/50" asChild>
                <a href={HEARING_SHEET_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ClipboardList className="size-4" aria-hidden />
                  ヒアリングシートを開く
                </a>
              </Button>
              <Button className="btn-primary text-primary-foreground" asChild>
                <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  内容を送信（DM）
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground">
              シートは外部の公開ページ（Claude）で開きます。入力内容の取り扱いは{' '}
              <a href="/privacy" className="text-accent underline underline-offset-2 hover:opacity-90">
                プライバシーポリシー
              </a>{' '}
              に従います。
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            Problem
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            Instagramのみ運用の課題
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            個人店がInstagramだけに頼ると、こんな問題が生じます
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'フォロワー依存',
                desc: 'フォロワー数に左右される不安定な集客',
              },
              {
                icon: <DollarSign className="w-5 h-5" />,
                title: '広告費の増加',
                desc: 'アルゴリズム変更で広告費が増加する可能性',
              },
              {
                icon: <Share2 className="w-5 h-5" />,
                title: '情報の分散',
                desc: 'メニュー・アクセス・営業時間が散在',
              },
              {
                icon: <Search className="w-5 h-5" />,
                title: 'SEO対策なし',
                desc: 'Google検索からの流入が期待できない',
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
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            Locamoとは
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            Instagramと組み合わせることで集客力を高めるLP・ホームページ制作。AIで素早く骨子を作り、現場での訴求と導線をマーケティング視点で磨き込みます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '地域密着',
                desc: '大阪の個人店を専門に対応。地元の事情を理解した提案が可能。',
              },
              {
                title: '買い切り型',
                desc: 'LP制作費3万円〜の買い切り。サーバー・ドメイン込み月3,000円〜のランニングコストのみ。',
              },
              {
                title: 'Instagram連携設計',
                desc: 'Instagramからの流入導線を最初から組み込んだ設計。',
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} delay={idx} />
            ))}
          </div>

          <div className="text-center">
            <a href={DM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground">
                まずは無料診断
                <ArrowRight className="ml-1.5" size={17} />
              </Button>
            </a>
          </div>
        </div>
      </section>
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
