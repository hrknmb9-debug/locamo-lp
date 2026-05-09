import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function SubscriptionSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pb-[env(safe-area-inset-bottom,0px)]">
      <Card className="max-w-md w-full p-8 text-center shadow-sm border-sky-100">
        <CheckCircle className="mx-auto mb-4 text-emerald-500" size={48} aria-hidden />
        <h1 className="text-xl font-bold mb-2">月額プランの登録が完了しました</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          サブスクリプションの状況は「支払い履歴」から確認できます。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button className="btn-primary" asChild>
            <Link href="/orders">契約・履歴を見る</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">ホームへ</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
