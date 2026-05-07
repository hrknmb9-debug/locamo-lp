import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

/**
 * Services Section
 * Design: Neo-Tokyo Minimal
 * - Service cards with accordion details
 * - Plan comparison
 * - Feature highlights
 */

interface ServicePlan {
  id: string;
  title: string;
  description: string;
  pages: string;
  features: string[];
  timeline: string;
  price: string;
  expanded?: boolean;
}

export default function Services() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans: ServicePlan[] = [
    {
      id: 'lp',
      title: 'LP制作',
      description: '1ページ完結型。店舗情報・メニュー・アクセス・問合せをまとめたランディングページ。',
      pages: '1ページ',
      features: [
        '店舗情報の掲載',
        'メニュー・料金表',
        'アクセス・営業時間',
        'お問合せ導線',
        'Instagram連携',
        'モバイル対応',
        'SEO基本対応',
      ],
      timeline: '2週間目安',
      price: '要相談',
    },
    {
      id: 'hp',
      title: 'ホームページ制作',
      description: '複数ページ構成。ブランドとして育てる本格的なホームページ。',
      pages: '複数ページ',
      features: [
        'トップページ',
        'サービス紹介',
        'ブログ機能',
        'ギャラリー',
        'お問合せフォーム',
        'Instagram連携',
        'モバイル対応',
        'SEO対策',
        'Google Analytics連携',
      ],
      timeline: '3～4週間目安',
      price: '要相談',
    },
    {
      id: 'instagram',
      title: 'Instagram連携設計',
      description: '既存Instagramからの流入導線をLP/HPに組み込む設計。上記2プランに含まれます。',
      pages: 'LP or HP',
      features: [
        'Instagramフィード埋め込み',
        'Instagram投稿へのリンク',
        'フォロー導線の最適化',
        'DM誘導ボタン',
        'ストーリーズ連携',
      ],
      timeline: '制作に含む',
      price: '無料',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedPlan(expandedPlan === id ? null : id);
  };

  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          サービス内容
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          大阪の個人店向けに、3つのプランをご用意しています
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-6 border-b border-border">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Quick Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ページ数</span>
                    <span className="font-semibold">{plan.pages}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">納期</span>
                    <span className="font-semibold">{plan.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">料金</span>
                    <span className="font-semibold text-accent">{plan.price}</span>
                  </div>
                </div>

                {/* Accordion Button */}
                <button
                  onClick={() => toggleExpand(plan.id)}
                  className="w-full flex items-center justify-between px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors mb-4"
                >
                  <span className="font-semibold text-sm">詳しく見る</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedPlan === plan.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedPlan === plan.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3 animate-fade-in-up">
                    <h4 className="font-semibold text-sm text-accent">含まれる機能</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-sm">
                          <span className="text-accent mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-border">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all hover:scale-105 btn-shimmer"
                >
                  詳細を見る
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6">プラン比較</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">機能</th>
                  <th className="text-center py-4 px-4 font-semibold">LP制作</th>
                  <th className="text-center py-4 px-4 font-semibold">ホームページ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ページ数', lp: '1ページ', hp: '複数ページ' },
                  { feature: 'レスポンシブ対応', lp: '○', hp: '○' },
                  { feature: 'SEO対応', lp: '基本', hp: '詳細' },
                  { feature: 'ブログ機能', lp: '×', hp: '○' },
                  { feature: 'ギャラリー', lp: '基本', hp: '充実' },
                  { feature: 'Instagram連携', lp: '○', hp: '○' },
                  { feature: 'Google Analytics', lp: '○', hp: '○' },
                  { feature: '納期', lp: '2週間', hp: '3～4週間' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4">{row.feature}</td>
                    <td className="text-center py-4 px-4">{row.lp}</td>
                    <td className="text-center py-4 px-4">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            ご質問やご不明な点がございましたら、お気軽にお問合せください
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6"
          >
            無料診断を受ける
          </Button>
        </div>
      </div>
    </div>
  );
}
