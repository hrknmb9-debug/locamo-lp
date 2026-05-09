import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, AlertCircle, ShoppingBag } from 'lucide-react';
import { navigateToHomeAnchor } from '@/lib/siteNavScroll';
import { Link, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';

export default function Orders() {
  const [, navigate] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const { data: payments, isLoading: paymentsLoading, error: paymentsError } = trpc.payment.getPaymentHistory.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );
  const { data: subscriptions, isLoading: subsLoading, error: subsError } = trpc.payment.getSubscriptionStatus.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="p-8 max-w-md w-full text-center">
          <AlertCircle className="mx-auto mb-4 text-amber-500" size={48} />
          <h2 className="text-xl font-bold mb-2">ログインが必要です</h2>
          <p className="text-muted-foreground mb-6">支払い履歴を表示するにはログインしてください。</p>
          <Button asChild className="w-full">
            <Link href="/">ホームに戻る</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const isLoading = paymentsLoading || subsLoading;
  const hasError = paymentsError || subsError;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">支払い履歴</h1>
          <p className="text-muted-foreground">ご契約内容と支払い状況を確認できます</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin mr-2" />
            <span>読み込み中...</span>
          </div>
        )}

        {hasError && (
          <Card className="p-6 border-red-200 bg-red-50">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">エラーが発生しました</h3>
                <p className="text-red-800 text-sm">支払い情報の取得に失敗しました。しばらく経ってからお試しください。</p>
              </div>
            </div>
          </Card>
        )}

        {!isLoading && !hasError && (
          <>
            {/* Subscriptions Section */}
            {subscriptions && subscriptions.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">アクティブなサブスクリプション</h2>
                <div className="space-y-4">
                  {subscriptions.map((sub) => (
                    <Card key={sub.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{sub.planName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {sub.status === 'active' ? 'アクティブ' : 'キャンセル予定'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">¥{(sub.amount / 100).toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">/月</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">開始日</p>
                          <p className="font-medium">{new Date(sub.startDate).toLocaleDateString('ja-JP')}</p>
                        </div>
                        {sub.nextBillingDate && (
                          <div>
                            <p className="text-muted-foreground">次回請求日</p>
                            <p className="font-medium">{new Date(sub.nextBillingDate).toLocaleDateString('ja-JP')}</p>
                          </div>
                        )}
                      </div>
                      {sub.status === 'active' && (
                        <Button variant="outline" size="sm" className="w-full">
                          サブスクリプションを管理
                        </Button>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Payments Section */}
            {payments && payments.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">支払い履歴</h2>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <Card key={payment.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <ShoppingBag className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{payment.planName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(payment.createdAt).toLocaleDateString('ja-JP')}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">¥{(payment.amount / 100).toLocaleString()}</p>
                          <p className={`text-sm font-medium ${payment.status === 'succeeded' ? 'text-green-600' : 'text-amber-600'}`}>
                            {payment.status === 'succeeded' ? '支払い完了' : '処理中'}
                          </p>
                        </div>
                      </div>
                      {payment.invoiceUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={payment.invoiceUrl} target="_blank" rel="noopener noreferrer">
                            領収書を表示
                          </a>
                        </Button>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              !subscriptions || subscriptions.length === 0 ? (
                <Card className="p-12 text-center">
                  <ShoppingBag className="mx-auto mb-4 text-muted-foreground" size={48} />
                  <h3 className="text-xl font-semibold mb-2">支払い履歴がありません</h3>
                  <p className="text-muted-foreground mb-6">まだ支払いが行われていません。</p>
                  <Button type="button" onClick={() => navigateToHomeAnchor(navigate, 'pricing')}>
                    料金プランを見る
                  </Button>
                </Card>
              ) : null
            )}
          </>
        )}
      </div>
    </div>
  );
}
