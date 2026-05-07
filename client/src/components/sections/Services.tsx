import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Check } from 'lucide-react';

interface ServicePlan {
  id: string;
  title: string;
  description: string;
  pages: string;
  features: string[];
  timeline: string;
  price: string;
  highlight?: boolean;
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
      timeline: '3〜4週間目安',
      price: '要相談',
      highlight: true,
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
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
          Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          サービス内容
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          大阪の個人店向けに、3つのプランをご用意しています
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative bg-card border rounded-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-lg animate-fade-in-up ${
                plan.highlight
                  ? 'border-accent shadow-md shadow-blue-100'
                  : 'border-border'
              }`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              )}
              {plan.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-semibold bg-blue-50 text-accent px-2 py-0.5 rounded-full border border-blue-100">
                    おすすめ
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="p-5 pb-4 border-b border-border">
                <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1">
                <div className="space-y-2.5 mb-5 pb-5 border-b border-border">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">ページ数</span>
                    <span className="font-semibold">{plan.pages}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">納期</span>
                    <span className="font-semibold">{plan.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">料金</span>
                    <span className={`font-bold ${plan.highlight ? 'text-accent' : ''}`}>{plan.price}</span>
                  </div>
                </div>

                {/* Accordion */}
                <button
                  onClick={() => toggleExpand(plan.id)}
                  className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-3"
                >
                  <span>含まれる機能を見る</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${expandedPlan === plan.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedPlan === plan.id && (
                  <ul className="space-y-1.5 animate-fade-in">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              <div className="p-5 pt-0">
                <Button
                  className={`w-full text-sm rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'btn-primary bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/70 border border-border'
                  }`}
                >
                  詳細を見る
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-bold mb-5">プラン比較</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3.5 px-4 font-semibold text-foreground">機能</th>
                  <th className="text-center py-3.5 px-4 font-semibold text-foreground">LP制作</th>
                  <th className="text-center py-3.5 px-4 font-semibold text-accent">ホームページ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ページ数', lp: '1ページ', hp: '複数ページ' },
                  { feature: 'レスポンシブ対応', lp: '○', hp: '○' },
                  { feature: 'SEO対応', lp: '基本', hp: '詳細' },
                  { feature: 'ブログ機能', lp: '—', hp: '○' },
                  { feature: 'ギャラリー', lp: '基本', hp: '充実' },
                  { feature: 'Instagram連携', lp: '○', hp: '○' },
                  { feature: 'Google Analytics', lp: '○', hp: '○' },
                  { feature: '納期', lp: '2週間', hp: '3〜4週間' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.lp}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground text-sm mb-4">
            ご質問やご不明な点がございましたら、お気軽にお問合せください
          </p>
          <Button
            size="lg"
            className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
          >
            無料診断を受ける
          </Button>
        </div>
      </div>
    </div>
  );
}
