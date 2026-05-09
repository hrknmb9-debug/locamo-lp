import { useAuth } from '@/_core/hooks/useAuth';
import { PaymentButton } from '@/components/PaymentButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';

/**
 * Stripe Checkout はサーバーが解決した Price ID（getCheckoutPrices / create*Checkout）で完結。
 */
export default function Payment() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { data: checkoutPrices, isLoading: pricesLoading } = trpc.payment.getCheckoutPrices.useQuery();
  const cp = checkoutPrices;

  return (
    <div className="min-h-screen bg-background pb-[env(safe-area-inset-bottom,0px)]">
      <header className="border-b border-sky-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-14 min-h-14 items-center justify-between gap-3 px-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-sky-950 hover:opacity-90">
            Loca<span className="text-accent">mo</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
              <Link href="/orders">支払い履歴</Link>
            </Button>
            <Button size="sm" className="btn-primary text-xs sm:text-sm" asChild>
              <Link href="/">ホームへ</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">お支払い</h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          LP 制作費・月額管理費は、ログイン後に Stripe の安全な決済ページでお支払いいただけます。未ログインの場合はボタンからログインへ進みます。
        </p>

        {!authLoading && !isAuthenticated && (
          <Card className="mb-8 border-amber-200 bg-amber-50/90 p-4 text-sm text-amber-950">
            アカウントにログインしてから決済ボタンを押してください。（ボタンを押すとログインへ誘導されます）
          </Card>
        )}

        <div className="space-y-6">
          <Card className="p-6 shadow-sm shadow-sky-950/5 border-sky-100">
            <h2 className="text-lg font-semibold mb-1">LP 制作（一括）</h2>
            <p className="text-muted-foreground text-xs mb-4">Checkout でカード決済（サーバー設定の Price ID）</p>
            {cp && !pricesLoading ? (
              <PaymentButton priceId={cp.lp.priceId} planName={cp.lp.planName}>
                LP 制作の決済へ進む
              </PaymentButton>
            ) : (
              <Button size="lg" className="w-full" disabled>
                <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                読み込み中…
              </Button>
            )}
          </Card>

          <Card className="p-6 shadow-sm shadow-sky-950/5 border-sky-100">
            <h2 className="text-lg font-semibold mb-1">月額管理費（サブスク）</h2>
            <p className="text-muted-foreground text-xs mb-4">毎月のご利用料（サイト公開・ドメイン）</p>
            {cp && !pricesLoading ? (
              <PaymentButton
                priceId={cp.monthly.priceId}
                planName={cp.monthly.planName}
                isSubscription
              >
                月額プランの決済へ進む
              </PaymentButton>
            ) : (
              <Button size="lg" className="w-full" disabled>
                <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                読み込み中…
              </Button>
            )}
          </Card>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          料金や流れは{' '}
          <Link href="/#pricing" className="text-accent underline-offset-2 hover:underline">
            ホームの料金セクション
          </Link>
          もご覧ください。
        </p>
      </main>
    </div>
  );
}
