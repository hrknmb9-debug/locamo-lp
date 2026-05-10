import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { LpSectionEyebrow } from '@/components/lp/LpSectionEyebrow';
import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';
import { Link } from 'wouter';
import { DM_URL } from '@/constants/locamo';
import { PRIMARY_CTA_HEARING } from '@/data/conversionMessaging';
import { activateExternalHref } from '@/lib/openExternalUrl';
import { SERVICE_PLANS } from '@/data/servicePlans';
import { LP_IMAGES } from '@/lp-images';

export default function Services() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans = SERVICE_PLANS;

  const toggleExpand = (id: string) => {
    setExpandedPlan(expandedPlan === id ? null : id);
  };

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <LpSectionEyebrow>サービス</LpSectionEyebrow>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          サービス内容
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm leading-relaxed">
          メインは下記の2プランです。申し込みから初回返信までのルールは<strong className="font-semibold text-sky-950">料金・お問い合わせ</strong>
          と同じです（詳細はそちらをご覧ください）。
        </p>

        <figure className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-[1.35rem] border border-sky-100 shadow-md shadow-sky-200/30">
          <img
            src={LP_IMAGES.servicesBanner}
            alt="LP制作とホームページ制作など、Locamoのサービスラインアップを端的にまとめたヘッダー画像"
            width={1728}
            height={576}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] max-h-[12rem] w-full object-cover sm:max-h-[13rem]"
          />
          <figcaption className="sr-only">サービスラインアップのイメージ</figcaption>
        </figure>

        {/* Service Cards */}
        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative flex flex-col overflow-hidden rounded-[1.25rem] border bg-card transition-shadow animate-fade-in-up ${
                plan.highlight
                  ? 'border-accent shadow-lg shadow-sky-200/60 ring-1 ring-sky-100'
                  : 'border-sky-100 lp-card shadow-sm'
              }`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              )}
              {plan.highlight && (
                <div className="absolute right-3 top-3 shrink-0">
                  <span className="rounded-full border border-primary/40 bg-orange-50/95 px-2.5 py-1 text-[10px] font-semibold leading-none text-primary">
                    おすすめ
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="p-5 pb-4 border-b border-border">
                <h3 className="mb-2 pr-12 text-lg font-bold md:pr-0">{plan.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1">
                <div className="space-y-2.5 mb-5 pb-5 border-b border-border">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">ページ数</span>
                    <span className="font-semibold">{plan.pages}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">納期</span>
                    <span className="font-semibold">{plan.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">料金</span>
                    <span className={`font-bold ${plan.highlight ? 'text-accent' : ''}`}>{plan.price}</span>
                  </div>
                </div>

                {/* Accordion */}
                <button
                  onClick={() => toggleExpand(plan.id)}
                  className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-3"
                >
                  <span>含まれる機能を見る</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${expandedPlan === plan.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedPlan === plan.id && (
                  <ul className="space-y-1.5 animate-fade-in">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm">
                        <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              <div className="flex min-h-[3.75rem] w-full shrink-0 flex-col px-5 pb-5 pt-0">
                <Button
                  variant={plan.highlight ? 'default' : 'outline'}
                  asChild
                  className={`h-12 w-full min-w-0 max-w-full rounded-full text-center text-sm font-semibold ${
                    plan.highlight ? 'btn-primary text-primary-foreground' : 'border-sky-200 bg-white hover:bg-sky-50'
                  }`}
                >
                  <Link href={`/services/${plan.id}`} className="inline-flex w-full justify-center px-6">
                    詳細を見る
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-bold mb-5">プラン比較</h3>
          <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 shadow-sm shadow-sky-950/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="text-left py-3.5 px-4 font-semibold text-foreground">機能</th>
                  <th className="text-center py-3.5 px-4 font-semibold text-foreground">LP制作</th>
                  <th className="text-center py-3.5 px-4 font-semibold text-accent">ホームページ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ページ数', lp: '1ページ', hp: '複数ページ' },
                  { feature: 'レスポンシブ対応', lp: '○', hp: '○' },
                  { feature: 'SEO対応', lp: '基本', hp: '詳細' },
                  { feature: 'ブログ機能', lp: '—', hp: '○' },
                  { feature: 'ギャラリー', lp: '基本', hp: '充実' },
                  { feature: 'CTA・問い合わせ導線の設計', lp: '○', hp: '○' },
                  { feature: 'Google Analytics', lp: '○', hp: '○' },
                  { feature: '納期', lp: '2週間', hp: '3〜4週間' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.lp}</td>
                    <td className="text-center py-3.5 px-4 text-muted-foreground">{row.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly cost note */}
        <p className="text-xs text-muted-foreground text-center mt-4">
          ※別途、サイト公開・ドメイン費用 月3,000円〜（込み）
        </p>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground text-sm mb-4 max-w-lg mx-auto text-pretty">
            「まずLPで足りるか」迷う段階でも、ヒアリング内容をいただければ構成の方向性までお返しします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/hearing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'btn-primary px-8 py-6 text-sm font-semibold text-primary-foreground'
              )}
            >
              {PRIMARY_CTA_HEARING}
            </Link>
            <Button size="lg" variant="outline" className="rounded-full border-sky-200 px-8 py-6 text-sm font-semibold" asChild>
              <a href={DM_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => activateExternalHref(e, DM_URL)}>
                追ってDMで話したい（任意）
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
