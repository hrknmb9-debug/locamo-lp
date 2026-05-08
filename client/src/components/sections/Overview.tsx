import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Sparkles, Zap, Activity, LayoutList, Waypoints } from 'lucide-react';
import { Link } from 'wouter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import {
  HEARING_FLOW_SHORT,
  MONITOR_SLOT_NOTE,
  PRIMARY_CTA_HEARING_FULL,
  RESPONSE_SLA,
  SCOPE_EXCLUDED_BULLETS,
  SCOPE_INCLUDED_BULLETS,
} from '@/data/conversionMessaging';
import { LP_IMAGES } from '@/lp-images';
import { SCROLL_MARGIN_CLASS } from '@/data/siteNav';

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(50, 2000, isVisible);

  return (
    <div ref={ref} className="space-y-3 animate-fade-in-up">
      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-accent">{count}+</div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">累計案件</p>
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
        ※「納品・公開デモ・社内検証」を含む社内集計です。画面イメージは{' '}
        <a href="/#samples" className="font-semibold text-sky-950 underline underline-offset-2 hover:text-accent">
          「サンプル」セクション
        </a>
        をご覧ください。
        <span className="mt-1 block text-[11px] text-sky-900/80">
          別途 サーバー・ドメイン費用 月3,000円〜（込み）。{MONITOR_SLOT_NOTE}
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
              AIで素早く起こすたたき台を、読み順とCTAで「動くLP」に整える
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
            Instagramを見た人が、<br className="hidden sm:block" />
            次に何をすればいいか明確になるLP。
          </h1>

          {/* Subheading */}
          <p
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto animate-fade-in-up leading-relaxed text-pretty"
            style={{ animationDelay: '0.35s' }}
          >
            大阪の個人店に特化した1枚LP。<strong className="font-semibold text-sky-900">フォロワーだけに依存しない「公式の受け皿」</strong>
            で、メニュー・料金・アクセス・予約までを迷わせずつなげます。制作費は3万円〜・モニター枠は審査付き無料。
            AIで構成・文案のたたきを素早く作り、その上から訴求の順番とCTAを人の目で仕上げます。
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
            <Link href="/hearing">
              <Button
                size="lg"
                className="btn-primary w-full px-8 py-6 text-sm font-semibold text-primary-foreground sm:w-auto"
              >
                {PRIMARY_CTA_HEARING_FULL}
                <ArrowRight className="ml-1.5" size={17} />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold text-foreground hover:bg-sky-50" asChild>
              <a href="#services">サービス内容を確認</a>
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

      <div id="workflow" className={`${SCROLL_MARGIN_CLASS} space-y-16 md:space-y-24`}>
      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            Problem
          </p>
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
          <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
            About
          </p>
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
                desc: 'LP制作費3万円〜の買い切り。サーバー・ドメイン込み月3,000円〜のランニングコストのみ。',
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
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-accent">Promise</p>
            <h3 className="mb-3 text-center text-lg font-bold text-sky-950">ご返信までの目安・スコープ</h3>
            <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">{RESPONSE_SLA}</p>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <p className="mb-3 text-sm font-semibold text-sky-950">標準で含めるイメージ</p>
                <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                  {SCOPE_INCLUDED_BULLETS.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-sky-950">お受けしない・別途となることが多いもの</p>
                <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-sky-400">
                  {SCOPE_EXCLUDED_BULLETS.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground" asChild>
              <Link href="/hearing">
                {PRIMARY_CTA_HEARING_FULL}
                <ArrowRight className="ml-1.5 inline" size={17} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href="#pricing">料金・フローを見る</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ヒアリング・クロージング（下部） */}
      <section className="border-t border-sky-100/90 bg-gradient-to-b from-orange-50/80 via-[#fffaf5] to-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-[1.65rem] border-2 border-primary/35 bg-white/95 px-7 py-10 shadow-lg shadow-orange-100/60 md:p-14">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-primary">Apply</p>
            <h2 className="mb-3 text-center text-2xl font-bold leading-snug md:text-[1.7rem]">
              {HEARING_FLOW_SHORT}
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-center text-[13px] leading-relaxed text-muted-foreground text-pretty">
              {RESPONSE_SLA}
            </p>
            <ul className="mx-auto mb-8 max-w-lg space-y-3 text-center text-[13px] leading-relaxed text-muted-foreground text-pretty">
              <li>
                ● 質問は<span className="font-semibold text-sky-950">少しずつ4ステップ</span>。「次へ」だけで入力が終わります。
              </li>
              <li>
                ● 最後に回答をコピーして<span className="font-semibold text-sky-950">InstagramのDM</span>へ。ログイン中のアカウントから届くので、運営側で送信元が分かります。貼り付けて送信すれば完了です。
              </li>
            </ul>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-primary w-full max-w-sm px-10 py-7 text-[15px] font-bold text-primary-foreground shadow-md shadow-sky-300/35" asChild>
                <Link href="/hearing" className="gap-2">
                  <ClipboardList className="size-5" aria-hidden />
                  {PRIMARY_CTA_HEARING_FULL}
                  <ArrowRight className="size-5 shrink-0" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-center text-[11px] text-muted-foreground">
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
