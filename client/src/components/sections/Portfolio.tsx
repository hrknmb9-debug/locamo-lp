import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Portfolio Section
 * Design: Neo-Tokyo Minimal
 * - Coming Soon placeholder
 * - Portfolio cards
 * - Early client recruitment banner
 */

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      storeName: 'Sample Store 1',
      category: '飲食店',
      description: 'LP制作',
    },
    {
      id: 2,
      storeName: 'Sample Store 2',
      category: '小売店',
      description: 'ホームページ制作',
    },
    {
      id: 3,
      storeName: 'Sample Store 3',
      category: '専門店',
      description: 'LP制作 + Instagram連携',
    },
    {
      id: 4,
      storeName: 'Sample Store 4',
      category: '飲食店',
      description: 'ホームページ制作',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          制作実績
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          大阪の個人店様との実績をご紹介します
        </p>

        {/* Coming Soon Banner */}
        <div className="mb-12 animate-fade-in-up rounded-[1.25rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50/70 to-white p-8 text-center shadow-sm shadow-sky-950/5 md:p-12">
          <h3 className="text-2xl font-bold mb-2">制作実績 Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            現在、初期クライアント様を募集中です。
          </p>
          <p className="text-sm text-muted-foreground">
            ご契約いただいたクライアント様の実績は、ご許可をいただいた上で掲載させていただきます。
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className="lp-card group overflow-hidden rounded-[1.25rem] transition-all animate-fade-in-up hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-200/50"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Placeholder Image */}
              <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-sky-50 to-secondary">
                <div className="text-center">
                  <div className="text-4xl font-bold text-muted-foreground/30 mb-2">
                    {item.id}
                  </div>
                  <p className="text-sm text-muted-foreground">Portfolio Image</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{item.storeName}</h3>
                    <p className="text-sm text-accent">{item.category}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <button className="text-accent hover:text-accent/80 transition-colors text-sm font-semibold flex items-center gap-1">
                  詳細を見る
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Early Client Recruitment */}
        <div className="lp-card animate-fade-in-up rounded-[1.25rem] border-2 border-accent p-8 text-center md:p-12 shadow-md shadow-sky-200/40">
          <h3 className="text-2xl font-bold mb-4">
            初期クライアント様を<span className="text-accent">特別価格</span>で募集中！
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Locamoは現在、初期段階のため、実績構築のため初期クライアント様を特別価格でお受けしています。
            この機会にぜひご利用ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: '通常より', desc: '20%オフ' },
              { title: '無料診断', desc: '詳細コンサル付き' },
              { title: 'サポート', desc: '手厚い対応' },
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-[1rem] bg-secondary p-4">
                <p className="text-sm text-muted-foreground mb-1">{benefit.title}</p>
                <p className="text-lg font-bold text-accent">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="btn-primary px-8 py-7 text-base font-semibold text-primary-foreground">
            初期クライアント価格で申し込む
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up">
          {[
            { label: '制作実績', value: '50+' },
            { label: 'クライアント満足度', value: '98%' },
            { label: '平均納期短縮', value: '30%' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
