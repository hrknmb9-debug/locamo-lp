import type { FC } from 'react';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

import { Button } from '@/components/ui/button';
import { LINE_OFFICIAL_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';

/** 旧 `/hearing` ブックマーク向け：フォームは廃止し公式LINEへ誘導 */
const HearingRedirect: FC = () => {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.href = LINE_OFFICIAL_URL;
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-[#fafcff] px-4 py-16 text-foreground">
      <header className="mx-auto mb-10 flex w-full max-w-lg justify-between gap-3">
        <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
          Loca<span className="text-accent">mo</span>
        </Link>
        <Button variant="outline" size="sm" className="rounded-full border-sky-200 gap-2" asChild>
          <Link href="/">
            <ArrowLeft size={16} aria-hidden />
            TOPへ
          </Link>
        </Button>
      </header>
      <main className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold text-sky-950">お問い合わせは公式LINEに統一しました</p>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          まもなく公式LINEが開きます。自動で開かない場合は下のボタンから追加してください。
        </p>
        <Button size="lg" className="btn-primary mb-6 rounded-full px-10 font-semibold text-primary-foreground" asChild>
          <a
            href={LINE_OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => activateExternalHref(e, LINE_OFFICIAL_URL)}
          >
            公式LINEを開く
          </a>
        </Button>
        <Link href="/#contact-faq" className="text-sm text-accent underline underline-offset-2 hover:opacity-90">
          よくある質問・お問い合わせ欄へ
        </Link>
      </main>
    </div>
  );
};

export default HearingRedirect;
