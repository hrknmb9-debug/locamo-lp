import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'wouter';
import type { RouteComponentProps } from 'wouter';

import { buttonVariants } from '@/components/ui/button';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { cn } from '@/lib/utils';
import { LINE_OFFICIAL_URL } from '@/constants/locamo';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { PRIMARY_CTA_LINE_FULL } from '@/data/conversionMessaging';
import { getPlan } from '@/data/servicePlans';
import { LP_IMAGES } from '@/lp-images';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import NotFound from '@/pages/NotFound';

const ServiceDetail: FC<RouteComponentProps<{ planId: string }>> = ({ params }) => {
  useScrollToTop();
  const plan = params?.planId ? getPlan(params.planId) : undefined;

  if (!plan) {
    return <NotFound />;
  }

  return (
    <div className="flex min-h-screen min-w-0 w-full overflow-x-clip flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
        <div className="container mx-auto flex h-14 min-h-14 items-center gap-4 px-4">
          <a
            href="/"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'inline-flex shrink-0 items-center gap-1.5 rounded-full border-sky-200 px-4'
            )}
          >
            <ArrowLeft size={18} aria-hidden />
            <span className="text-sm font-medium">戻る</span>
          </a>
          <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
                Loca<span className="text-accent">mo</span>
              </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-10 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="container mx-auto max-w-3xl">
          <LpSectionEyebrow className="mb-4 text-left sm:text-center">プラン詳細</LpSectionEyebrow>
          <h1 className="mb-4 text-3xl font-bold">{plan.title}</h1>

          <figure className="mb-10 overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-md shadow-sky-200/25">
            <img
              src={LP_IMAGES.servicesBanner}
              alt={`${plan.title}に含まれる制作範囲のイメージを示す共通ヘッダー画像`}
              width={1728}
              height={576}
              className="aspect-[21/9] max-h-[10rem] w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <figcaption className="sr-only">プランに共通するサービス概要のイメージ</figcaption>
          </figure>

          <div className="mb-10 rounded-[1.25rem] border border-sky-100 bg-secondary/60 p-6">
            <div className="grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <p className="text-muted-foreground">ページ数</p>
                <p className="font-semibold">{plan.pages}</p>
              </div>
              <div>
                <p className="text-muted-foreground">納期の目安</p>
                <p className="font-semibold">{plan.timeline}</p>
              </div>
              <div>
                <p className="text-muted-foreground">料金</p>
                <p className={`font-semibold ${plan.highlight ? 'text-accent' : ''}`}>{plan.price}</p>
              </div>
            </div>
          </div>

          <p className="mb-10 text-muted-foreground leading-relaxed">{plan.description}</p>
          <p className="mb-12 text-[15px] leading-relaxed text-foreground">{plan.detailLead}</p>

          <ul className="mb-14 space-y-2">
            <p className="mb-2 text-sm font-semibold text-sky-900">含まれる機能</p>
            {plan.features.map(f => (
              <li key={f} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {plan.detailSections.map(section => (
            <section key={section.heading} className="mb-12">
              <h2 className="mb-4 text-xl font-bold">{section.heading}</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {section.items.map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="rounded-[1.25rem] border border-sky-100 bg-secondary/80 p-6 text-center md:p-8">
            <p className="mb-6 text-sm text-muted-foreground text-pretty">
              ご依頼・ご質問は公式LINEからお送りください。トークにお店の状況やご希望を書いていただければ、こちらから順にお返事し、お見立てまでご案内します。
            </p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <a
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'btn-primary inline-flex items-center justify-center gap-2 px-6 text-primary-foreground'
                )}
                onClick={(e) => activateExternalHref(e, LINE_OFFICIAL_URL)}
              >
                <MessageCircle size={18} aria-hidden />
                {PRIMARY_CTA_LINE_FULL}
                <ArrowRight className="inline size-5" aria-hidden />
              </a>
              <a
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'inline-flex justify-center rounded-full border-sky-200'
                )}
              >
                サイト内のお問い合わせへ
              </a>
              <a
                href="/"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'inline-flex justify-center rounded-full border-sky-200'
                )}
              >
                サービス一覧に戻る
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
