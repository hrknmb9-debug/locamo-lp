import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { DM_URL } from '@/constants/locamo';
import type { PlanId } from '@/data/servicePlans';
import { LP_IMAGES } from '@/lp-images';

/**
 * Portfolio Section
 * Design: Neo-Tokyo Minimal
 * - Coming Soon placeholder
 * - Portfolio cards
 * - Early client recruitment banner
 */

export default function Portfolio() {
  const portfolioItems: {
    id: number;
    storeName: string;
    category: string;
    description: string;
    planId: PlanId;
  }[] = [
    {
      id: 1,
      storeName: 'Sample Store 1',
      category: '飲食店',
      description: 'LP制作',
      planId: 'lp',
    },
    {
      id: 2,
      storeName: 'Sample Store 2',
      category: '小売店',
      description: 'ホームページ制作',
      planId: 'hp',
    },
    {
      id: 3,
      storeName: 'Sample Store 3',
      category: '専門店',
      description: 'LP制作 + Instagram連携',
      planId: 'lp',
    },
    {
      id: 4,
      storeName: 'Sample Store 4',
      category: '飲食店',
      description: 'ホームページ制作',
      planId: 'hp',
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
        <div className="animate-fade-in-up mb-12 overflow-hidden rounded-[1.25rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50/70 to-white text-center shadow-sm shadow-sky-950/5 md:grid md:grid-cols-[minmax(0,1fr)_260px] md:items-center md:text-left md:gap-10 md:p-0">
          <div className="p-8 pb-6 md:p-12 md:pb-12">
            <h3 className="mb-2 text-2xl font-bold">制作実績 Coming Soon</h3>
            <p className="mb-4 text-muted-foreground">現在、初期クライアント様を募集中です。</p>
            <p className="text-sm text-muted-foreground">
              ご契約いただいたクライアント様の実績は、ご許可をいただいた上で掲載させていただきます。
            </p>
          </div>
          <div className="hidden h-full min-h-[180px] border-t border-sky-100/80 md:block md:border-l md:border-t-0 md:border-sky-100/80">
            <img src={LP_IMAGES.hero} alt="" className="h-full min-h-[200px] w-full object-cover object-left" loading="lazy" />
          </div>
          <div className="h-44 border-t border-sky-100/80 px-8 pb-6 md:hidden">
            <div className="mx-auto overflow-hidden rounded-xl border border-sky-100">
              <img src={LP_IMAGES.hero} alt="" className="h-44 w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className="lp-card group overflow-hidden rounded-[1.25rem] transition-all animate-fade-in-up hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-200/50"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Card visual */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-sky-50 to-secondary">
                <img
                  src={LP_IMAGES.portfolio[idx]}
                  alt={`カテゴリ「${item.category}」の参考イメージ`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
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
                <Link
                  href={`/services/${item.planId}`}
                  className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 text-sm font-semibold underline-offset-2 hover:underline"
                >
                  詳細を見る
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Early Client Recruitment */}
        <div className="lp-card animate-fade-in-up overflow-hidden rounded-[1.25rem] border-2 border-accent px-6 py-10 text-center shadow-md shadow-sky-200/40 sm:px-8 md:p-12">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl">
            初期クライアント様を<span className="text-accent">特別価格</span>で募集中！
          </h3>
          <div className="mx-auto mb-6 max-w-2xl text-pretty px-1 text-muted-foreground sm:px-0">
            <p>
              Locamoは現在、初期段階のため、実績構築のため初期クライアント様を特別価格でお受けしています。この機会にぜひご利用ください。
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
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

          <div className="flex w-full justify-center px-1 sm:px-3">
            <Button size="lg" className="btn-primary mx-auto inline-flex max-w-[min(100%,22rem)] min-w-0 flex-nowrap px-6 py-7 text-[15px] font-semibold text-primary-foreground sm:py-8" asChild>
              <a href={DM_URL} target="_blank" rel="noopener noreferrer" className="w-full justify-center gap-2">
                初期クライアント価格で申し込む
                <ArrowRight className="size-5 shrink-0" aria-hidden />
              </a>
            </Button>
          </div>
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
