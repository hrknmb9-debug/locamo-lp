import { useEffect, useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const COLLAGE = '/images/course-collage.png';

const NAV: { id: string; label: string }[] = [
  { id: 'hero', label: '01 ヒーロー' },
  { id: 'spread', label: '02 ビジュアル' },
  { id: 'panels', label: '03 パネル' },
  { id: 'cta', label: '04 申込' },
];

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-900 bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_#ec4899]">
      <span className="tabular-nums text-zinc-300">{n}</span>
      <span>{title}</span>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f2e8] text-zinc-950 antialiased [&_a]:underline-offset-4">
      <header
        className={cn(
          'sticky top-0 z-50 border-b-2 transition-colors',
          navSolid
            ? 'border-zinc-900 bg-[#f6f2e8]/95 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        )}
      >
        <div className="container mx-auto flex h-[3.25rem] max-w-[1200px] items-center justify-between gap-4 px-4 md:h-14">
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="rounded-lg px-2 py-1 text-left text-sm font-black tracking-tight md:text-base"
          >
            ポートフォリオ講座
            <span className="hidden sm:inline text-zinc-500">／若手クリエイター向け</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-900 hover:text-[#daf54c]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="メニュー"
              className="rounded-xl border-2 border-zinc-900 bg-white p-2 shadow-[4px_4px_0_#18181b]"
            >
              {mobileOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t-2 border-zinc-900 bg-[#fdfaf3] md:hidden">
            <div className="container mx-auto flex max-w-[1200px] flex-col px-4 py-3">
              {NAV.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-zinc-800 hover:bg-[#dff24b]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 01 */}
        <section id="hero" className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
          <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-[40%] bg-[#4f46e5]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-48 h-72 w-72 rounded-[35%] bg-[#fb7185]/25 blur-3xl" />

          <div className="container relative mx-auto max-w-[1180px] px-4">
            <SectionLabel n="01" title="コンセプトビジュアル" />

            <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
              <div className="space-y-5">
                <p className="font-zine-script text-3xl leading-none text-[#2563eb] md:text-[2.35rem]">
                  Show your Creative!
                </p>
                <h1 className="text-balance text-3xl font-black leading-[1.12] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  伝わるポートフォリオから、クリエイターの最初の一歩を。
                </h1>
                <p className="max-w-xl text-pretty text-sm leading-relaxed text-zinc-700 md:text-base">
                  このLPは講座の世界観をそのまま持ち運べるように、キービジュアルの写真・コラージュをセクション単位でも何度でも使いました。質感や色がブレないのが強みです。
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToId('cta')}
                    className="rounded-2xl border-2 border-zinc-900 bg-[#daf54c] px-5 py-3 text-sm font-bold shadow-[6px_6px_0_#18181b] transition hover:-translate-y-0.5 active:translate-y-0 active:shadow-[3px_3px_0_#18181b]"
                  >
                    申込・詳細へ
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToId('spread')}
                    className="rounded-2xl border-2 border-zinc-900 bg-white px-5 py-3 text-sm font-bold shadow-[6px_6px_0_#18181b]"
                  >
                    ビジュアルを見る
                  </button>
                </div>
              </div>

              <div className="relative lg:justify-self-end">
                <div className="pointer-events-none absolute inset-[-8%] -z-10 rotate-[-2deg] rounded-[34px] border-2 border-dashed border-zinc-900/25" />
                <figure className="lp-tape-edge relative rotate-[1.75deg] overflow-hidden rounded-[28px] border-[3px] border-zinc-900 bg-white">
                  <img
                    src={COLLAGE}
                    alt="若手クリエイター向けポートフォリオ講座のキービジュアルコラージュ"
                    className="h-auto w-full object-cover"
                    width={960}
                    height={960}
                    loading="eager"
                    decoding="async"
                  />
                  <figcaption className="flex items-center justify-between gap-4 border-t-2 border-zinc-900 bg-[#ff4f8b] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white">
                    <span>Four-panel collage</span>
                    <span className="tabular-nums">01 — 04</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 02 */}
        <section id="spread" className="relative border-y-2 border-zinc-900 bg-[#eae4ff] py-14 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-32 lp-dots-soft opacity-40" />

          <div className="container relative mx-auto max-w-[1180px] px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel n="02" title="ビジュアル展開（同一画像の切り替え）" />
                <h2 className="mt-4 text-2xl font-black md:text-3xl">
                  「一枚のデザインデータ」を、サイト上で繰り返し使う
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-zinc-800 md:text-sm">
                印刷物でもWebでも、この一枚を起点に統一されます。スクロールのたびに角度とトリミングを変えれば、資料のページ送りみたいにリズムが出ます。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                  {(
                    [
                      ['lp-collage-quarter-tl', 'Panel 01 — Opening'],
                      ['lp-collage-quarter-tr', 'Panel 02 — Curriculum'],
                      ['lp-collage-quarter-bl', 'Panel 03 — Target'],
                      ['lp-collage-quarter-br', 'Panel 04 — Detail & QR'],
                    ] as const
                  ).map(([cls, caption]) => (
                    <figure
                      key={cls}
                      className={cn(
                        cls,
                        'group relative overflow-hidden rounded-3xl border-[3px] border-zinc-900 shadow-[8px_8px_0_#18181b] transition hover:-rotate-1'
                      )}
                    >
                      <div className="aspect-[5/7] w-full md:aspect-[4/5]" />
                      <figcaption className="border-t-[3px] border-zinc-900 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-800">
                        {caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 md:self-stretch">
                <div className="relative h-full min-h-[240px] overflow-hidden rounded-3xl border-[3px] border-zinc-900 bg-black shadow-[12px_12px_0_#daf54c] md:min-h-0">
                  <img src={COLLAGE} alt="" className="h-full w-full object-cover opacity-90" aria-hidden loading="lazy" />
                  <div className="absolute inset-0 mix-blend-screen bg-gradient-to-tr from-[#22d3ee]/40 via-transparent to-[#f472b6]/45" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/85 p-3 text-[11px] font-semibold backdrop-blur">
                    メインビジュアルと同じアセットで、色相とブレンドを足すだけで「別ページにした」ような表情にできます。
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border-[3px] border-zinc-900 bg-[#0f172a] shadow-[10px_10px_0_#ec4899]">
              <div className="grid md:grid-cols-[1.05fr_minmax(0,0.95fr)]">
                <img
                  src={COLLAGE}
                  alt=""
                  className="h-full w-full object-cover saturate-125 contrast-105"
                  loading="lazy"
                />
                <div className="relative px-7 py-8 text-[#eef2ff]">
                  <div className="pointer-events-none absolute inset-0 lp-dots-soft opacity-[0.15]" />
                  <p className="font-zine-script text-[2rem] leading-none text-[#c7d2fe]">Poster strip</p>
                  <p className="mt-5 text-lg font-black md:text-xl">ヒーロー直下でも、一覧でも、インパクトある帯広告として機能</p>
                  <p className="mt-3 text-xs leading-relaxed text-indigo-100/85 md:text-sm">
                    SNS・LP・メール・印刷のどれでも、この横長トリミングを流用すると世界観のブレがありません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section id="panels" className="relative overflow-hidden bg-[#f6f2e8] py-14 md:py-20">
          <div className="pointer-events-none absolute right-[-6rem] top-24 h-[22rem] w-[22rem] rounded-full bg-[#fb923c]/20 blur-[90px]" />
          <div className="container relative mx-auto max-w-[1180px] space-y-12 px-4">
            <div>
              <SectionLabel n="03" title="パネルを縦スクロールに落とす" />
              <h2 className="mt-4 text-2xl font-black md:text-3xl">
                「スライド4枚」を、LPの縦ストーリーに沿って配置
              </h2>
            </div>

            <div className="grid gap-8 lg:gap-14">
              {(
                [
                  {
                    id: 'p1',
                    q: 'lp-collage-quarter-tl' as const,
                    title: '世界観の宣言',
                    desc: '色面・筆迹・ポートレートまで含めたキャッチ。そのまま大きく掲載し、第一印象をロックします。',
                  },
                  {
                    id: 'p2',
                    q: 'lp-collage-quarter-tr' as const,
                    title: 'カリキュラム概要',
                    desc: '構成の核はアイコン付きステップ。このパネルを右側／背景に載せて、スクロールに合わせて見せます。',
                  },
                  {
                    id: 'p3',
                    q: 'lp-collage-quarter-bl' as const,
                    title: 'こんな人へ',
                    desc: '悩みのチェックと実物モックアップのコラージュで共感から反応への導線を作ります。',
                  },
                  {
                    id: 'p4',
                    q: 'lp-collage-quarter-br' as const,
                    title: '開催情報と申込',
                    desc: '日時・場所・定員などのリストと QR／ボタンの塊。このブロックだけを差し替えやすくしてあります。',
                  },
                ]
              ).map((row, idx) => (
                <article
                  key={row.id}
                  className={cn(
                    'grid gap-6 rounded-[34px] border-[3px] border-zinc-900 bg-white p-4 shadow-[10px_10px_0_#18181b] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:p-6',
                    idx % 2 === 1 && 'md:[&>div:first-child]:order-2'
                  )}
                >
                  <div className={cn('relative overflow-hidden rounded-[26px] border-2 border-zinc-900', row.q)}>
                    <div className="aspect-[5/7] w-full md:aspect-[16/11]" />
                    <span className="absolute left-4 top-4 rounded-full border border-zinc-900 bg-white px-3 py-1 text-[10px] font-black">
                      Slide {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="px-2 md:px-5">
                    <h3 className="text-xl font-black md:text-2xl">{row.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-[15px]">{row.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 */}
        <section id="cta" className="relative border-t-2 border-zinc-900 bg-[#d8f957] pb-16 pt-14 md:pb-24 md:pt-16">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-[3px] -translate-y-1/2 bg-zinc-900" />
          <div className="container relative mx-auto max-w-[900px] px-4">
            <div className="mx-auto rounded-[42px] border-[3px] border-zinc-900 bg-[#ede9fe] px-6 py-8 shadow-[14px_14px_0_#18181b] md:px-10 md:py-10">
              <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-md space-y-3">
                  <SectionLabel n="Apply" title="お申込み" />
                  <h2 className="text-balance text-3xl font-black md:text-[2rem]">
                    LINE / DM / フォーム、どこに誘導しても視覚の芯は崩さない。
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-800 md:text-[15px]">
                    ここだけ差し替えれば運用フェーズにも耐えられます（QRダミーでも雰囲気チェックできます）。
                  </p>
                  <dl className="grid gap-3 border-t border-zinc-900/15 pt-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="font-bold text-zinc-900">フォーマット</dt>
                      <dd className="text-right font-semibold text-zinc-800">オンライン（Zoom 想定）</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-bold text-zinc-900">ひとつの区切り</dt>
                      <dd className="text-right font-semibold text-zinc-800">約 120 分</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-bold text-zinc-900">運営</dt>
                      <dd className="text-right font-semibold text-zinc-800">Locamo</dd>
                    </div>
                  </dl>
                </div>

                <figure className="relative w-full max-w-[340px] self-center md:self-auto">
                  <div className="absolute -top-10 right-[-6%] h-36 w-36 rotate-[8deg] rounded-[40%] border-[3px] border-zinc-900 bg-black/85 lp-collage-quarter-br shadow-[10px_10px_0_#22d3ee]" />
                  <div className="relative overflow-hidden rounded-[36px] border-[3px] border-zinc-900 bg-white p-5 shadow-[10px_10px_0_#18181b]">
                    <div className="mx-auto mb-5 grid aspect-square max-w-[200px] place-items-center rounded-3xl border-2 border-dashed border-zinc-400 bg-zinc-100 text-[11px] font-bold text-zinc-600">
                      QR プレースホルダー
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://www.instagram.com/locamo.ink/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-zinc-900 bg-black px-4 py-3 text-sm font-bold text-white hover:bg-zinc-900 min-[420px]:flex-none"
                      >
                        <Instagram size={18} strokeWidth={2.2} />
                        Instagram
                      </a>
                      <button
                        type="button"
                        onClick={() => scrollToId('hero')}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white px-4 py-3 text-sm font-bold min-[420px]:flex-none"
                      >
                        上に戻る
                      </button>
                    </div>
                  </div>
                  <figcaption className="sr-only">
                    QRコードと SNS への導線。キービジュアルのトリミングを添えています。
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-zinc-900 bg-black py-14 text-[#eef2ff]">
        <div className="container mx-auto grid max-w-[1180px] gap-10 px-4 md:grid-cols-12">
          <div className="md:col-span-5 space-y-3">
            <div className="text-lg font-black">Locamo</div>
            <p className="max-w-md text-[13px] leading-relaxed text-zinc-300">
              「一枚の強い画像」からLPを組み立てるデモ構成です。文章・項目・リンクは案件に合わせて差し替え可能です。
            </p>
          </div>
          <div className="hidden md:col-span-3 md:block" />
          <div className="md:col-span-4 space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">social</div>
            <a
              href="https://www.instagram.com/locamo.ink/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-[#dff24b]"
            >
              <Instagram size={18} strokeWidth={2} />
              @locamo.ink
            </a>
            <button
              type="button"
              onClick={() => scrollToId('cta')}
              className="rounded-xl border border-zinc-700 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-900"
            >
              お申込みブロックへ
            </button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1180px] border-t border-zinc-800 px-4 pt-8 text-center text-[11px] text-zinc-500">
          &copy; 2026 NANBA企画. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
