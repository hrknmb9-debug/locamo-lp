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

type TabType = 'overview' | 'services' | 'pricing' | 'portfolio' | 'instagram' | 'contact';

const TABS: { id: TabType; label: string }[] = [
  { id: 'overview', label: '概要' },
  { id: 'services', label: 'サービス' },
  { id: 'pricing', label: '料金' },
  { id: 'portfolio', label: '実績' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'contact', label: 'お問合せ' },
];

function tabFromLocationHash(): TabType {
  if (typeof window === 'undefined') return 'overview';
  const raw = window.location.hash.slice(1) as TabType;
  return raw && TABS.some(t => t.id === raw) ? raw : 'overview';
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>(tabFromLocationHash);
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
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as TabType;
      if (hash && TABS.some(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':   return <Overview />;
      case 'services':   return <Services />;
      case 'pricing':    return <Pricing />;
      case 'portfolio':  return <Portfolio />;
      case 'instagram':  return <InstagramPage />;
      case 'contact':    return <Contact />;
      default:           return <Overview />;
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
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleTabClick('overview')}
            className="text-xl font-bold tracking-tight text-sky-950"
          >
            Loca<span className="text-accent">mo</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-xl border border-sky-200 p-2 text-sky-950 transition-colors hover:bg-sky-50"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-sky-100 bg-[#f8fcff]">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full rounded-full px-4 py-3 text-left text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent text-white'
                      : 'text-sky-900 hover:bg-sky-50'
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
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-sky-100 bg-sky-50/60">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-lg font-bold mb-2">
                Loca<span className="text-accent">mo</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                大阪の個人店向けLP・ホームページ制作サービス
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-sm mb-3">ページ</h4>
              <ul className="space-y-1.5">
                {TABS.map(tab => (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      className="text-muted-foreground hover:text-accent text-xs transition-colors"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    href="/hearing"
                    className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors"
                  >
                    ヒアリングシート
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="inline-block text-muted-foreground hover:text-accent text-xs transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-3">お問合せ</h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                Instagram DMからお気軽にご連絡ください（無料診断はDMから）。
              </p>
              <a
                href={DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline transition-colors"
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

          <div className="border-t border-border pt-6 text-center text-muted-foreground text-xs">
            &copy; 2026 NANBA企画. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
