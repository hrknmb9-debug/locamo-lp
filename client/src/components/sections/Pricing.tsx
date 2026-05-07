import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const DM_URL = 'https://ig.me/m/locamo.ink';

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'サーバーやドメインは別途必要ですか？',
      a: 'サーバーとドメインは別途実費となります。両方込みで月3,000円〜が目安です。初期設定のサポートは制作費に含まれています。',
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
      a: 'もちろんです。ただし、LocamoはInstagram連携を強みとしているため、Instagramとの組み合わせをお勧めしています。',
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
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <p className="text-xs font-semibold tracking-widest text-accent uppercase text-center mb-3">
          Pricing
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          料金・プロセス
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          透明性のある料金体系と、シンプルな制作フロー
        </p>

        {/* Pricing Highlight */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-7 md:p-10 mb-14 text-center animate-fade-in-up">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            LP制作費<span className="text-accent">3万円〜</span>の買い切り。月額不要。
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            制作費は一括払い。毎月かかるのはサーバー・ドメインのみです。
          </p>
          <div className="bg-white border border-border rounded-xl p-5 inline-block shadow-sm">
            <p className="text-xs text-muted-foreground mb-1">サーバー・ドメイン費用（込み）</p>
            <p className="text-2xl font-bold text-foreground">月3,000円〜</p>
            <p className="text-xs text-muted-foreground mt-1">初期設定サポート込み</p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-5">料金比較</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3.5 px-4 font-semibold">項目</th>
                  <th className="text-center py-3.5 px-4 font-semibold">LP制作</th>
                  <th className="text-center py-3.5 px-4 font-semibold">ホームページ制作</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '制作費', lp: '3万円〜', hp: '要相談' },
                  { item: '月額費用', lp: '0円', hp: '0円' },
                  { item: 'サーバー・ドメイン', lp: '月3,000円〜', hp: '月3,000円〜' },
                  { item: '納期', lp: '2週間', hp: '3〜4週間' },
                  { item: '修正対応', lp: '簡易修正無料', hp: '簡易修正無料' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium">{row.item}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.lp}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-7">制作の流れ</h3>
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx !== steps.length - 1 && (
                  <div className="absolute left-4 top-10 bottom-0 w-px bg-border" />
                )}
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold z-10">
                  {step.num}
                </div>
                <div className="pb-8">
                  <h4 className="text-sm font-semibold mb-1 mt-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-6">よくある質問</h3>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-card hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-muted-foreground transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 py-4 bg-secondary/30 border-t border-border text-muted-foreground text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <p className="text-muted-foreground text-sm mb-4">
            ご不明な点やご質問がございましたら、お気軽にお問合せください
          </p>
          <a href={DM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="btn-primary bg-accent text-accent-foreground font-semibold px-7 py-5 text-sm rounded-lg"
            >
              無料診断を受ける
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
