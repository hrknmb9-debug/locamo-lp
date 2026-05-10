import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link } from 'wouter';

import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Portfolio from '@/components/sections/Portfolio';
import InstagramPage from '@/components/sections/Instagram';
import Contact from '@/components/sections/Contact';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollLandmark } from '@/components/lp/ScrollLandmark';
import { DM_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';
import { PRIMARY_CTA_HEARING } from '@/data/conversionMessaging';
import { SITE_SCROLL_NAV } from '@/data/siteNav';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { prefersReducedMotion, replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';

/** 共通のコンテンツ到達スクロール */
function scrollToAnchor(anchorId: string) {
  scrollToSiteAnchor(anchorId);
}

function stripUrlHashPreservePath(): void {
  if (typeof window.history?.replaceState !== 'function') return;
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

/** 旧タブ型URLのブックマーク互換 */
const LEGACY_HASH_TO_ANCHOR: Record<string, string> = {
  overview: 'top',
  services: 'services',
  pricing: 'pricing',
  portfolio: 'works',
  samples: 'works',
  instagram: 'instagram',
  contact: 'contact',
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const run = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;
      const mapped = LEGACY_HASH_TO_ANCHOR[raw] ?? raw;
      if (mapped === 'top') {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
        stripUrlHashPreservePath();
        return;
      }
      scrollToAnchor(mapped);
    };
    run();
    window.addEventListener('hashchange', run);
    return () => window.removeEventListener('hashchange', run);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  const goDocumentTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
    stripUrlHashPreservePath();
    closeMobile();
  };

  const onSiteAnchorNavClick = (e: MouseEvent<HTMLAnchorElement>, anchor: string, closeDrawer?: boolean) => {
    e.preventDefault();
    scrollToSiteAnchor(anchor);
    replaceUrlHash(anchor);
    if (closeDrawer) closeMobile();
  };

  const navLinkBase =
    'rounded-full px-3.5 py-2 text-xs font-semibold text-sky-900/85 transition-colors hover:bg-sky-100 sm:text-sm sm:px-4';

  /** モバイルドロワー：44px級のタッチ領域 */
  const navLinkDrawer =
    'flex min-h-11 w-full items-center rounded-full px-3.5 py-3 text-left text-sm font-semibold text-sky-900/85 transition-colors hover:bg-sky-100 active:bg-sky-100 sm:px-4';

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-[max(1rem,env(safe-area-inset-left,0px))] focus:top-[calc(3.75rem+env(safe-area-inset-top,0px))] focus:z-[100] focus:rounded-xl focus:border focus:border-sky-200 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        メインコンテンツへスキップ
      </a>

      <header
        className={`sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur transition-shadow ${
          scrolled ? 'shadow-sm shadow-sky-200/40' : 'border-transparent'
        }`}
      >
        <div className="container mx-auto flex h-14 min-h-14 items-center justify-between gap-2 px-4">
          <button
            type="button"
            onClick={goDocumentTop}
            className="-ml-1 inline-flex min-h-11 shrink-0 items-center rounded-xl px-1 text-left text-xl font-bold tracking-tight text-sky-950 hover:opacity-90"
          >
            Loca<span className="text-accent">mo</span>
          </button>

          <nav
            className="hidden items-center gap-0.5 md:flex lg:gap-1"
            aria-label="ページ内のセクションへ移動できるナビゲーションほかInstagram公式プロフィール"
          >
            {SITE_SCROLL_NAV.map(({ anchor, label }) => (
              <a
                key={anchor}
                href={`#${anchor}`}
                className={navLinkBase}
                onClick={(e) => onSiteAnchorNavClick(e, anchor)}
              >
                {label}
              </a>
            ))}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${IG_HANDLE}のInstagramプロフィールを開く`}
              className={cn(
                navLinkBase,
                '-mr-1 inline-flex shrink-0 items-center justify-center gap-1 lg:gap-1.5 lg:px-4'
              )}
              onClick={(e) => activateExternalHref(e, IG_URL)}
            >
              <Instagram size={17} aria-hidden />
              <span className="max-w-[4.75rem] truncate sm:max-w-none">{IG_HANDLE}</span>
            </a>
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'sm' }),
                'btn-primary ml-2 inline-flex shrink-0 justify-center whitespace-nowrap px-4 text-xs font-semibold text-primary-foreground sm:text-sm'
              )}
            >
              {PRIMARY_CTA_HEARING}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(open => !open)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-sky-200 text-sky-950 transition-colors hover:bg-sky-50 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-lp-nav"
            aria-label={mobileMenuOpen ? 'ページ内ナビを閉じる' : 'ページ内ナビを開く'}
          >
            {mobileMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-lp-nav" className="border-t border-sky-100 bg-[#f8fcff] md:hidden" aria-label="ページ内リンク（モバイル）">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
              <button type="button" onClick={() => goDocumentTop()} className={navLinkDrawer}>
                ページ先頭へ
              </button>
              {SITE_SCROLL_NAV.map(({ anchor, label }) => (
                <a
                  key={anchor}
                  href={`#${anchor}`}
                  className={navLinkDrawer}
                  onClick={(e) => onSiteAnchorNavClick(e, anchor, true)}
                >
                  {label}
                </a>
              ))}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkDrawer}
                onClick={(e) => {
                  if (activateExternalHref(e, IG_URL)) closeMobile();
                }}
              >
                <Instagram size={18} aria-hidden className="shrink-0 text-sky-900/85" />
                Instagram（プロフィール）
              </a>
              <Link
                href="/hearing"
                onClick={closeMobile}
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'btn-primary mt-3 inline-flex min-h-11 w-full justify-center px-6 text-base font-semibold text-primary-foreground'
                )}
              >
                {PRIMARY_CTA_HEARING}
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className="w-full min-w-0 flex-1 overflow-x-clip outline-none">
        <Overview />

        <ScrollLandmark id="services">
          <Services />
        </ScrollLandmark>
        <ScrollLandmark id="pricing">
          <Pricing />
        </ScrollLandmark>
        <ScrollLandmark id="works">
          <Portfolio />
        </ScrollLandmark>
        <ScrollLandmark id="instagram">
          <InstagramPage />
        </ScrollLandmark>
        <ScrollLandmark id="contact">
          <Contact />
        </ScrollLandmark>
      </main>

      <footer className="mt-8 border-t border-sky-100 bg-sky-50/60 pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold mb-2">
                Loca<span className="text-accent">mo</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">大阪の個人店向けLP・ホームページ制作サービス</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">ページ内</h4>
              <ul className="space-y-1.5">
                <li>
                  <button type="button" onClick={goDocumentTop} className="text-muted-foreground hover:text-accent text-xs transition-colors">
                    トップへ
                  </button>
                </li>
                {SITE_SCROLL_NAV.map(({ anchor, label }) => (
                  <li key={anchor}>
                    <a
                      href={`#${anchor}`}
                      className="text-muted-foreground hover:text-accent text-xs transition-colors"
                      onClick={(e) => onSiteAnchorNavClick(e, anchor)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/hearing" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    {PRIMARY_CTA_HEARING}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">お問合せ・決済の進め方</h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                まずヒアリングページで入力し、コピーのうえDMにお送りください。質問のみはDMでも可能です。ご契約後のお支払いは<strong className="font-semibold text-sky-950">ご案内する決済リンクのみ</strong>
                で完結します（カード決済・Stripe Payment Links。サイト内チェックアウト・銀行振込は扱いません）。
              </p>
              <Link href="/hearing" className="inline-block text-xs text-accent underline-offset-2 hover:underline">
                LP制作のヒアリングページへ
              </Link>
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent hover:underline transition-colors"
                onClick={(e) => activateExternalHref(e, DM_URL)}
              >
                <Instagram size={14} aria-hidden />
                {IG_HANDLE}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-xs text-muted-foreground hover:text-accent hover:underline"
                onClick={(e) => activateExternalHref(e, IG_URL)}
              >
                プロフィールを見る →
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-muted-foreground text-xs">&copy; 2026 NANBA企画. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
