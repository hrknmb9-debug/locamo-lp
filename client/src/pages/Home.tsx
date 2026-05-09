import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link } from 'wouter';

import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Portfolio from '@/components/sections/Portfolio';
import InstagramPage from '@/components/sections/Instagram';
import Contact from '@/components/sections/Contact';
import { Button } from '@/components/ui/button';
import { ScrollLandmark } from '@/components/lp/ScrollLandmark';
import { DM_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';
import { PRIMARY_CTA_HEARING } from '@/data/conversionMessaging';
import { SITE_SCROLL_NAV } from '@/data/siteNav';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** 共通のコンテンツ到達スクロール */
function scrollToAnchor(anchorId: string) {
  const el = document.getElementById(anchorId);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
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
        window.history.replaceState(null, '', '/');
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
    window.history.replaceState(null, '', '/');
    closeMobile();
  };

  const navLinkBase =
    'rounded-full px-3.5 py-2 text-xs font-semibold text-sky-900/85 transition-colors hover:bg-sky-100 sm:text-sm sm:px-4';

  /** モバイルドロワー：44px級のタッチ領域 */
  const navLinkDrawer =
    'flex min-h-11 w-full items-center rounded-full px-3.5 py-3 text-left text-sm font-semibold text-sky-900/85 transition-colors hover:bg-sky-100 active:bg-sky-100 sm:px-4';

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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

          <nav className="hidden items-center gap-0.5 md:flex lg:gap-1" aria-label="ページ内リンク">
            {SITE_SCROLL_NAV.map(({ anchor, label }) => (
              <a key={anchor} href={`/#${anchor}`} className={navLinkBase}>
                {label}
              </a>
            ))}
            <Button
              size="sm"
              className="ml-2 shrink-0 whitespace-nowrap btn-primary px-4 text-xs font-semibold text-primary-foreground sm:text-sm"
              asChild
            >
              <Link href="/hearing">{PRIMARY_CTA_HEARING}</Link>
            </Button>
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
                <a key={anchor} href={`/#${anchor}`} className={navLinkDrawer} onClick={closeMobile}>
                  {label}
                </a>
              ))}
              <Button className="mt-3 min-h-11 w-full justify-center btn-primary px-6 text-base font-semibold text-primary-foreground" asChild>
                <Link href="/hearing" onClick={closeMobile}>
                  {PRIMARY_CTA_HEARING}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1 outline-none">
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
                    <a href={`/#${anchor}`} className="text-muted-foreground hover:text-accent text-xs transition-colors">
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
                <li>
                  <Link href="/payment" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    お支払いページ
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    支払い履歴
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3">お問合せ・お支払い</h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                まずヒアリングページで入力し、コピーのうえDMにお送りください。質問のみはDMでも可能です。
              </p>
              <Link href="/hearing" className="inline-block text-xs text-accent underline-offset-2 hover:underline">
                LP制作のヒアリングページへ
              </Link>
              <Link
                href="/payment"
                className="mt-2 inline-block text-xs font-medium text-accent underline-offset-2 hover:underline"
              >
                お支払いページ
              </Link>
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent hover:underline transition-colors"
              >
                <Instagram size={14} aria-hidden />
                {IG_HANDLE}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-xs text-muted-foreground hover:text-accent hover:underline"
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
