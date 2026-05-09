import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { getLoginUrl } from '@/const';

const PRICING_PLANS = [
  {
    id: 'lp-creation',
    name: 'LP制作',
    description: '1ページのランディングページ制作',
    price: 33000,
    currency: 'JPY',
    features: [
      'ページ設計・構成案',
      'デザイン・コーディング',
      'レスポンシブ対応',
      'SEO基本対応',
      '修正対応（3回まで）',
    ],
  },
  {
    id: 'monthly-hosting',
    name: '月額管理費',
    description: 'ホスティング・保守・更新',
    price: 3000,
    currency: 'JPY',
    interval: 'month',
    features: [
      'ホスティング',
      '定期バックアップ',
      'セキュリティ更新',
      'テクニカルサポート',
      '月1回の更新対応',
    ],
  },
];

export default function Payment() {
  const { user, isAuthenticated, loading } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const createCheckoutMutation = trpc.payment.createOneTimeCheckout.useMutation();
  const createSubscriptionMutation = trpc.payment.createSubscriptionCheckout.useMutation();

  const handleCheckout = async (planId: string) => {
    if (!isAuthenticated) {
      window.location.href = getLoginUrl();
      return;
    }

    if (!user) return;

    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      const plan = PRICING_PLANS.find(p => p.id === planId);
      if (!plan) {
        toast.error('プランが見つかりません');
        return;
      }

      let checkoutUrl: string | null = null;

      if (plan.interval === 'month') {
        // Subscription
        const result = await createSubscriptionMutation.mutateAsync({
          priceId: 'price_1TUqxU7nv8WWcHmoT7AnbBnY', // Monthly hosting price
          planName: plan.name,
        });
        checkoutUrl = result.url;
      } else {
        // One-time payment
        const result = await createCheckoutMutation.mutateAsync({
          priceId: 'price_1TV9LR7nv8WWcHmoIiJKYRM0', // LP creation price
          planName: plan.name,
        });
        checkoutUrl = result.url;
      }

      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
        toast.success('決済ページを開きました');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('決済ページの作成に失敗しました');
    } finally {
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="border-b border-sky-100 sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Loca<span className="text-accent">mo</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-accent">
              ホーム
            </Link>
            {isAuthenticated && (
              <Link href="/orders" className="text-sm text-muted-foreground hover:text-accent">
                注文履歴
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">お支払い</h1>
            <p className="text-lg text-muted-foreground">
              {isAuthenticated
                ? 'ご希望のプランをお選びください'
                : 'お支払いにはログインが必要です'}
            </p>
          </div>

          {!isAuthenticated && (
            <div className="text-center mb-12">
              <Button
                onClick={() => {
                  const loginUrl = getLoginUrl();
                  window.location.href = loginUrl + '?returnTo=/payment';
                }}
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                ログイン
              </Button>
            </div>
          )}

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {PRICING_PLANS.map(plan => (
              <Card key={plan.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold">
                      ¥{plan.price.toLocaleString()}
                    </div>
                    {plan.interval && (
                      <div className="text-sm text-muted-foreground">
                        /{plan.interval === 'month' ? '月' : '一度'}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    onClick={() => handleCheckout(plan.id)}
                    disabled={isProcessing && selectedPlan === plan.id}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    {isProcessing && selectedPlan === plan.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        処理中...
                      </>
                    ) : (
                      'このプランで支払う'
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-sky-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">支払い方法は何が使えますか？</h3>
                <p className="text-sm text-muted-foreground">
                  クレジットカード、Apple Pay、Google Pay、Link などが使用できます。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">支払い後のキャンセルはできますか？</h3>
                <p className="text-sm text-muted-foreground">
                  支払い後のキャンセルについては、お問い合わせページからご連絡ください。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">月額管理費はいつから請求されますか？</h3>
                <p className="text-sm text-muted-foreground">
                  初回は本日、以降は毎月同じ日に自動請求されます。
                </p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              ご不明な点やご質問がある場合は、お気軽にお問い合わせください。
            </p>
            <Link href="/hearing" className="inline-block text-accent hover:underline">
              お問い合わせページへ →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-sky-100 bg-sky-50/60 pb-[env(safe-area-inset-bottom,0px)]">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center text-muted-foreground text-xs">
            &copy; 2026 NANBA企画. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
