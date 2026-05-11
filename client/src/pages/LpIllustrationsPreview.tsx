import type { ComponentType, FC } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  IllustContactHearingDm,
  IllustFeatureBuyout,
  IllustFeatureCta,
  IllustFeatureLocal,
  IllustFlowContract,
  IllustFlowDm,
  IllustFlowLaunch,
  IllustFlowSiteInput,
  IllustGuideExcluded,
  IllustGuideIncluded,
  IllustGuideReply,
  IllustPlanHp,
  IllustPlanLp,
  IllustProblemEntry,
  IllustProblemFollower,
  IllustProblemReach,
  IllustProblemScatter,
  IllustWorkflowProblemStrip,
} from '@/components/lp/BespokeIllustrations';
import { useScrollToTop } from '@/hooks/useScrollToTop';

type Item = { label: string; Comp: ComponentType<{ className?: string }>; note?: string };

const GROUPS: { heading: string; items: Item[] }[] = [
  {
    heading: '課題セクション・デコ',
    items: [
      { label: 'IllustWorkflowProblemStrip', Comp: IllustWorkflowProblemStrip, note: '見出し下の帯' },
      { label: 'IllustProblemFollower', Comp: IllustProblemFollower },
      { label: 'IllustProblemReach', Comp: IllustProblemReach },
      { label: 'IllustProblemScatter', Comp: IllustProblemScatter },
      { label: 'IllustProblemEntry', Comp: IllustProblemEntry },
    ],
  },
  {
    heading: 'ご案内（ご返信・スコープ）',
    items: [
      { label: 'IllustGuideReply', Comp: IllustGuideReply },
      { label: 'IllustGuideIncluded', Comp: IllustGuideIncluded },
      { label: 'IllustGuideExcluded', Comp: IllustGuideExcluded },
    ],
  },
  {
    heading: 'Locamoとは（特徴3枚）',
    items: [
      { label: 'IllustFeatureLocal', Comp: IllustFeatureLocal },
      { label: 'IllustFeatureBuyout', Comp: IllustFeatureBuyout },
      { label: 'IllustFeatureCta', Comp: IllustFeatureCta },
    ],
  },
  {
    heading: '制作の流れ（料金ページ）',
    items: [
      { label: 'IllustFlowSiteInput', Comp: IllustFlowSiteInput },
      { label: 'IllustFlowDm', Comp: IllustFlowDm },
      { label: 'IllustFlowContract', Comp: IllustFlowContract },
      { label: 'IllustFlowLaunch', Comp: IllustFlowLaunch },
    ],
  },
  {
    heading: 'サービス・コンタクト',
    items: [
      { label: 'IllustPlanLp', Comp: IllustPlanLp },
      { label: 'IllustPlanHp', Comp: IllustPlanHp },
      { label: 'IllustContactHearingDm', Comp: IllustContactHearingDm },
    ],
  },
];

const LpIllustrationsPreview: FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen min-w-0 bg-[#fafcff] text-foreground">
      <header className="sticky top-0 z-10 border-b border-sky-100/80 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-sky-950">
            Loca<span className="text-accent">mo</span>
          </Link>
          <Button variant="outline" size="sm" className="rounded-full border-sky-200 gap-2" asChild>
            <Link href="/">
              <ArrowLeft size={16} aria-hidden />
              TOPへ
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-10 pb-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Preview</p>
        <h1 className="mb-2 text-2xl font-bold text-sky-950">LP用インラインSVGイラスト一覧</h1>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <code className="rounded bg-sky-100/80 px-1 py-0.5 text-[13px] text-sky-950">BespokeIllustrations.tsx</code>{' '}
          に定義しているコンポーネントです。デザインチェック・差し替えのたたき台に使えます。
        </p>

        <div className="space-y-14">
          {GROUPS.map(group => (
            <section key={group.heading}>
              <h2 className="mb-6 border-b border-sky-100 pb-2 text-lg font-bold text-sky-950">{group.heading}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map(({ label, Comp, note }) => (
                  <figure
                    key={label}
                    className="overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-950/5"
                  >
                    <figcaption className="mb-4 flex flex-wrap items-baseline gap-2">
                      <span className="font-mono text-[11px] font-semibold text-sky-950 sm:text-xs">{label}</span>
                      {note ? (
                        <span className="text-[11px] text-muted-foreground sm:text-xs">{note}</span>
                      ) : null}
                    </figcaption>
                    <div className="flex min-h-[120px] items-center justify-center rounded-xl bg-muted/50 px-3 py-6">
                      <Comp className="h-auto max-h-[140px] w-full max-w-[280px]" />
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LpIllustrationsPreview;
