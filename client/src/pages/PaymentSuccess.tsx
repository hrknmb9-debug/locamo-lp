import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pb-[env(safe-area-inset-bottom,0px)]">
      <Card className="max-w-md w-full p-8 text-center shadow-sm border-sky-100">
        <CheckCircle className="mx-auto mb-4 text-emerald-500" size={48} aria-hidden />
        <h1 className="text-xl font-bold mb-2">お支払いが完了しました</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          ご登録のメールをご確認ください。履歴は「支払い履歴」からもご覧いただけます。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button className="btn-primary" asChild>
            <Link href="/orders">支払い履歴を見る</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">ホームへ</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
