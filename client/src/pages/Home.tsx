import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram } from 'lucide-react';
import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Portfolio from '@/components/sections/Portfolio';
import InstagramPage from '@/components/sections/Instagram';
import Contact from '@/components/sections/Contact';

/**
 * Design Philosophy: Neo-Tokyo Minimal
 * - Dark base (#0f0f0f) with neon green accent (#00ff88)
 * - Modern sans-serif (Geist/Outfit) + Noto Sans JP
 * - Scroll-driven animations, smooth interactions
 * - Mobile-first, SPA-style tab navigation
 */

type TabType = 'overview' | 'services' | 'pricing' | 'portfolio' | 'instagram' | 'contact';

const TABS: { id: TabType; label: string; icon?: string }[] = [
  { id: 'overview', label: '概要' },
  { id: 'services', label: 'サービス' },
  { id: 'pricing', label: '料金' },
  { id: 'portfolio', label: '実績' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'contact', label: 'お問合せ' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle hash-based navigation
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
      case 'overview':
        return <Overview />;
      case 'services':
        return <Services />;
      case 'pricing':
        return <Pricing />;
      case 'portfolio':
        return <Portfolio />;
      case 'instagram':
        return <InstagramPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-['Geist']">
              Loca<span className="text-accent">mo</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-secondary'
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
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-xl font-bold font-['Geist'] mb-4">
                Loca<span className="text-accent">mo</span>
              </div>
              <p className="text-muted-foreground text-sm">
                大阪の個人店向けLP・ホームページ制作サービス
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">ページ</h4>
              <ul className="space-y-2 text-sm">
                {TABS.map(tab => (
                  <li key={tab.id}>
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">お問合せ</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Instagram DMからお気軽にご連絡ください
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Instagram size={20} />
                <span>Locamo</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 NANBA企画. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
