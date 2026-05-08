import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link } from 'wouter';
import { DM_URL, IG_HANDLE, IG_URL } from '@/constants/locamo';
import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Portfolio from '@/components/sections/Portfolio';
import InstagramPage from '@/components/sections/Instagram';
import Contact from '@/components/sections/Contact';
import type { PrimaryTabId } from '@/types/homeTabs';
import { PRIMARY_TAB_LABELS } from '@/types/homeTabs';

function tabFromLocationHash(): PrimaryTabId {
  if (typeof window === 'undefined') return 'overview';
  const raw = window.location.hash.slice(1) as PrimaryTabId;
  return raw && PRIMARY_TAB_LABELS.some(t => t.id === raw) ? raw : 'overview';
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<PrimaryTabId>(tabFromLocationHash);
  const [tabStack, setTabStack] = useState<PrimaryTabId[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activeTab]);

  useEffect(() => {
    const onHash = () => {
      const t = tabFromLocationHash();
      setActiveTab(t);
      setTabStack([]);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goTab = (tabId: PrimaryTabId) => {
    if (tabId === activeTab) {
      setMobileMenuOpen(false);
      return;
    }
    setTabStack(s => [...s, activeTab]);
    setActiveTab(tabId);
    window.location.hash = tabId;
    setMobileMenuOpen(false);
  };

  /** タブ「戻る」またはブラウザ風に一つ手前のページ（タブ）へ */
  const goBackNav = () => {
    setTabStack(s => {
      if (s.length === 0) {
        if (activeTab !== 'overview') {
          setActiveTab('overview');
          window.location.hash = 'overview';
        }
        return s;
      }
      const cp = [...s];
      const prev = cp.pop()!;
      setActiveTab(prev);
      window.location.hash = prev;
      return cp;
    });
  };

  const resetHomeTabs = () => {
    setTabStack([]);
    setActiveTab('overview');
    window.location.hash = 'overview';
    setMobileMenuOpen(false);
  };

  const backDisabled = tabStack.length === 0 && activeTab === 'overview';

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview goToTab={goTab} />;
      case 'services':
        return <Services />;
      case 'pricing':
        return <Pricing />;
      case 'portfolio':
        return <Portfolio />;
      case 'instagram':
        return <InstagramPage goToTab={goTab} />;
      case 'contact':
        return <Contact goToTab={goTab} />;
      default:
        return <Overview goToTab={goTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? 'shadow-sm shadow-sky-200/40' : 'border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-3">
          {/* Logo */}
          <button type="button" onClick={resetHomeTabs} className="text-xl font-bold tracking-tight text-sky-950 shrink-0">
            Loca<span className="text-accent">mo</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5 flex-wrap justify-end">
            <button
              type="button"
              aria-label="一つ前のページに戻る"
              onClick={goBackNav}
              disabled={backDisabled}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition-all ${
                backDisabled ? 'cursor-not-allowed text-sky-300' : 'text-sky-800 hover:bg-sky-100'
              }`}
            >
              戻る
            </button>
            {PRIMARY_TAB_LABELS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => goTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-sm shadow-sky-300/40'
                    : 'text-sky-900/80 hover:bg-sky-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-xl border border-sky-200 p-2 text-sky-950 transition-colors hover:bg-sky-50 shrink-0"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-sky-100 bg-[#f8fcff]">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              <button
                type="button"
                onClick={() => {
                  goBackNav();
                  setMobileMenuOpen(false);
                }}
                disabled={backDisabled}
                className={`w-full rounded-full px-4 py-3 text-left text-sm font-semibold transition-all ${
                  backDisabled ? 'text-sky-300' : 'text-sky-950 hover:bg-sky-50'
                }`}
              >
                戻る
              </button>
              {PRIMARY_TAB_LABELS.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => goTab(tab.id)}
                  className={`w-full rounded-full px-4 py-3 text-left text-sm font-semibold transition-all ${
                    activeTab === tab.id ? 'bg-accent text-white' : 'text-sky-900 hover:bg-sky-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{renderContent()}</main>

      {/* Footer */}
      <footer className="mt-8 border-t border-sky-100 bg-sky-50/60">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-lg font-bold mb-2">
                Loca<span className="text-accent">mo</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">大阪の個人店向けLP・ホームページ制作サービス</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-sm mb-3">ページ</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/hearing" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    LPヒアリング送信
                  </Link>
                </li>
                {PRIMARY_TAB_LABELS.map(tab => (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onClick={() => goTab(tab.id)}
                      className="text-muted-foreground hover:text-accent text-xs transition-colors"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-3">お問合せ</h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                まずはヒアリングフォーム送信で結構です。必要に応じて Instagram でもご連絡ください。
              </p>
              <Link href="/hearing" className="inline-block text-xs text-accent underline-offset-2 hover:underline">
                LPご依頼フォームへ
              </Link>
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent hover:underline transition-colors"
              >
                <Instagram size={14} />
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
