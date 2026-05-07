import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

/**
 * Pricing Section
 * Design: Neo-Tokyo Minimal
 * - Pricing comparison table
 * - Process timeline
 * - FAQ accordion
 */

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'サーバーやドメインは別途必要ですか？',
      a: 'はい、サーバーとドメインは別途実費となります。年間約2,000円～の費用が必要です。初期設定のサポートは制作費に含まれています。',
    },
    {
      q: '制作後の修正や更新はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。大幅な変更の場合は別途費用をいただく場合がございます。',
    },
    {
      q: '支払い方法は？',
      a: '銀行振込またはクレジットカード決済に対応しています。詳細はお問合せ時にご説明いたします。',
    },
    {
      q: 'InstagramがなくてもLP制作できますか？',
      a: 'もちろんです。ただし、Locamoはinstagram連携を強みとしているため、Instagramとの組み合わせをお勧めしています。',
    },
  ];

  const steps = [
    {
      num: '1',
      title: 'お問合せ・無料診断',
      desc: 'Instagram DMからお問合せいただき、現状のお悩みをお聞かせください。無料診断を行います。',
    },
    {
      num: '2',
      title: 'ご提案・お見積もり',
      desc: '診断結果に基づいて、最適なプランをご提案し、お見積もりをお出しします。',
    },
    {
      num: '3',
      title: '制作開始',
      desc: 'ご契約後、制作を開始します。進捗状況を随時ご報告いたします。',
    },
    {
      num: '4',
      title: '納品・公開',
      desc: 'LPまたはホームページが完成したら、ご確認いただき、公開いたします。',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          料金・プロセス
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          透明性のある料金体系と、シンプルな制作フロー
        </p>

        {/* Pricing Highlight */}
        <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/30 rounded-lg p-8 md:p-12 mb-16 text-center animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            制作費は買い切り。<span className="text-accent">月額費用なし。</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            一度ご契約いただければ、毎月の費用は発生しません。
          </p>
          <div className="bg-card border border-border rounded-lg p-6 inline-block">
            <p className="text-sm text-muted-foreground mb-2">サーバー・ドメイン費用</p>
            <p className="text-2xl font-bold">年間 約2,000円～</p>
            <p className="text-xs text-muted-foreground mt-2">（別途実費）初期設定サポート込み</p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6">料金比較</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">項目</th>
                  <th className="text-center py-4 px-4 font-semibold">LP制作</th>
                  <th className="text-center py-4 px-4 font-semibold">ホームページ制作</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '制作費', lp: '要相談', hp: '要相談' },
                  { item: '月額費用', lp: '0円', hp: '0円' },
                  { item: 'サーバー費用', lp: '年2,000円～', hp: '年2,000円～' },
                  { item: 'ドメイン費用', lp: '年1,000円～', hp: '年1,000円～' },
                  { item: '納期', lp: '2週間', hp: '3～4週間' },
                  { item: '修正対応', lp: '簡易修正無料', hp: '簡易修正無料' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.item}</td>
                    <td className="text-center py-4 px-4">{row.lp}</td>
                    <td className="text-center py-4 px-4">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8">制作の流れ</h3>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-6 pb-8 relative"
                style={{
                  borderLeft: idx !== steps.length - 1 ? '2px solid var(--border)' : 'none',
                  paddingLeft: '24px',
                  marginLeft: '8px',
                }}
              >
                {/* Step Number */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold -ml-3">
                  {step.num}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8">よくある質問</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-secondary transition-colors"
                >
                  <span className="font-semibold text-left">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-accent transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border text-muted-foreground animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <p className="text-lg font-semibold mb-4">
            ご不明な点やご質問がございましたら、お気軽にお問合せください
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
