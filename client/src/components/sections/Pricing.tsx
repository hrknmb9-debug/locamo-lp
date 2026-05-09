import { useState } from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, Loader2 } from 'lucide-react';
import { DM_URL } from '@/constants/locamo';
import { HEARING_FLOW_SHORT, MONITOR_SLOT_NOTE, PRIMARY_CTA_HEARING, RESPONSE_SLA } from '@/data/conversionMessaging';
import { LP_IMAGES } from '@/lp-images';
import { trpc } from '@/lib/trpc';

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { data: checkoutPrices } = trpc.payment.getCheckoutPrices.useQuery();

  const faqs = [
    {
      q: 'サイトを公開する環境やドメインは別途必要ですか？',
      a: 'ドメインとサイト公開先（レンタル等）は別途実費となります。両方込みで月3,000円〜が目安です。初期設定のサポートは制作費に含まれています。',
    },
    {
      q: 'お申し込みの流れを教えてください',
      a: `${HEARING_FLOW_SHORT} ${RESPONSE_SLA}`,
    },
    {
      q: 'Instagramアカウントは必要ですか？',
      a: 'DMでお申し込み内容をお送りいただく形式のため、アプリからご連絡できるInstagramアカウントをおすすめします。アカウントをお持ちでない場合は、別途Instagramのご用意からご相談ください。',
    },
    {
      q: 'モニター無料枠は誰でも使えますか？',
      a: MONITOR_SLOT_NOTE,
    },
    {
      q: '制作後の修正や更新はできますか？',
      a: '制作完了後の簡易的な修正は無料で対応いたします。大幅な変更や新規ページ追加は別途お見積りとなります。',
    },
    {
      q: '支払い方法は？',
      a: '銀行振込またはクレジットカード決済に対応しています。詳細はご提案時にご説明いたします。',
    },
  ];

  const steps = [
    {
      num: '1',
      title: 'ヒアリング → コピー → DM送信',
      desc: 'サイトの4ステップに入力し「コピーしてInstagramのDMへ」で全文がコピーされ、DMページが開きます。開いたDMに貼り付けて送信すると、お申し込みとして受け付けます。',
    },
    {
      num: '2',
      title: 'お見立て・ご提案',
      desc: '内容確認後に、構成案とラフなお見積りをDM等でご返信します。',
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
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
          透明な料金と制作の流れです。受付手順・初回ご返信は下の「よくある質問」に集約しています。
        </p>

        <figure className="mx-auto mb-12 max-w-3xl overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-md shadow-sky-200/25">
          <img
            src={LP_IMAGES.servicesBanner}
            alt=""
            loading="lazy"
            className="aspect-[21/9] max-h-[9rem] w-full object-cover md:max-h-[10rem]"
          />
          <figcaption className="sr-only">料金と制作フローを象徴するイメージ</figcaption>
        </figure>

        {/* Pricing Highlight */}
        <div className="lp-soft-band mb-14 animate-fade-in-up rounded-[1.5rem] border border-sky-100 p-7 text-center shadow-sm shadow-sky-950/5 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            LP制作費<span className="text-accent">3万円〜</span>の買い切り。月額不要。
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            制作費は一括払い。毎月かかるのはサイト公開・ドメインのランニングのみです。
          </p>
          <div className="inline-block rounded-[1.25rem] border border-sky-100 bg-white p-5 shadow-sm">
            <p className="text-xs text-muted-foreground mb-1">公開環境・ドメイン（込み）</p>
            <p className="text-2xl font-bold text-foreground">月3,000円〜</p>
            <p className="text-xs text-muted-foreground mt-1">初期設定サポート込み</p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-5">料金比較</h3>
          <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-sm shadow-sky-950/5">
            <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              <table className="min-w-[19rem] w-full text-sm sm:min-w-full">
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
                  { item: '公開環境・ドメイン', lp: '月3,000円〜', hp: '月3,000円〜' },
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
        </div>

        {/* Process Timeline */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-7">制作の流れ</h3>
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx !== steps.length - 1 && (
                  <div className="absolute bottom-0 left-4 top-10 w-px bg-sky-200" />
                )}
                <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm shadow-sky-300/50">
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
              <div key={idx} className="overflow-hidden rounded-[1.25rem] border border-sky-100 bg-card shadow-sm shadow-sky-950/5">
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

        {/* Payment Options */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-6">今すぐ申し込む</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LP制作 */}
            <div className="rounded-[1.25rem] border border-sky-100 p-6 shadow-sm shadow-sky-950/5">
              <h4 className="text-lg font-bold mb-2">LP制作</h4>
              <p className="text-muted-foreground text-sm mb-4">シンプルで効果的なLP制作</p>
              <p className="text-3xl font-bold mb-6">3万円<span className="text-lg text-muted-foreground">〜</span></p>
              {checkoutPrices ? (
                <PaymentButton
                  priceId={checkoutPrices.lp.priceId}
                  planName={checkoutPrices.lp.planName}
                >
                  LP制作を申し込む
                </PaymentButton>
              ) : (
                <Button size="lg" className="w-full" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  準備中…
                </Button>
              )}
              <p className="text-xs text-muted-foreground mt-3 text-center">
                クレジットカード決済の前にアカウントログインが必要です。
              </p>
            </div>

            {/* ホームページ制作 */}
            <div className="rounded-[1.25rem] border border-sky-100 p-6 shadow-sm shadow-sky-950/5">
              <h4 className="text-lg font-bold mb-2">ホームページ制作</h4>
              <p className="text-muted-foreground text-sm mb-4">複数ページの本格的なサイト</p>
              <p className="text-3xl font-bold mb-6">要相談</p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href={DM_URL} target="_blank" rel="noopener noreferrer">
                  お見積り依頼（DM）
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-14 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-6">サイト公開・ドメイン（月額）</h3>
          <div className="rounded-[1.25rem] border border-sky-100 p-6 shadow-sm shadow-sky-950/5">
            <p className="text-muted-foreground text-sm mb-4">制作後のサイト公開・ドメイン管理を継続</p>
            <p className="text-3xl font-bold mb-6">月3,000円<span className="text-lg text-muted-foreground">〜</span></p>
            {checkoutPrices ? (
              <PaymentButton
                priceId={checkoutPrices.monthly.priceId}
                planName={checkoutPrices.monthly.planName}
                isSubscription
              >
                月額プランを申し込む
              </PaymentButton>
            ) : (
              <Button size="lg" className="w-full" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                準備中…
              </Button>
            )}
            <p className="text-xs text-muted-foreground mt-3 text-center">
              ログイン後に Stripe Checkout が新しいタブで開きます。
            </p>
            <p className="text-xs text-muted-foreground mt-1 text-center">初期設定サポート込み</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <p className="text-muted-foreground text-sm mb-4">料金だけ先に教えてほしい場合も、ヒアリング経由で順にお返しします。</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING}
            </a>
            <Button size="lg" variant="outline" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href={DM_URL} target="_blank" rel="noopener noreferrer">
                口頭での相談（DM任意）
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
