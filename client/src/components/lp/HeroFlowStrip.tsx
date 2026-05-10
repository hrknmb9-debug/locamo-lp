import { ChevronDown, ChevronRight } from 'lucide-react';

import { APPLICATION_FLOW_VISUAL_LABELS } from '@/data/conversionMessaging';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';

/**
 * ヒーロー用：短文ラベルのみ。説明文は料金タイムライン（#production-flow）にひとつに集約。
 */
export function HeroFlowStrip() {
  return (
    <div className="animate-fade-in-up mx-auto w-full min-w-0 max-w-lg px-0 sm:max-w-xl" style={{ animationDelay: '0.52s' }}>
      <p id="hero-flow-micro" className="text-center text-[11px] font-semibold tracking-wide text-sky-800/90 sm:text-xs">
        制作までの順序（概要）
      </p>
      <ol
        aria-labelledby="hero-flow-micro"
        className="mt-3 flex min-w-0 max-w-full list-none flex-col items-center gap-2 p-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-0.5 sm:gap-y-3"
      >
        {APPLICATION_FLOW_VISUAL_LABELS.map((label, idx) => (
          <li key={label} className="flex w-full max-w-[min(20rem,calc(100vw-2.5rem))] flex-col items-center gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:flex-initial">
            <span className="inline-flex w-full max-w-full min-w-0 items-center whitespace-nowrap rounded-full border border-sky-200 bg-sky-50/98 px-3 py-2 ps-3 text-[11px] font-semibold tracking-tight text-sky-900 shadow-sm ring-1 ring-sky-100/70 sm:w-auto sm:text-xs sm:leading-none">
              <span className="-ms-1 me-2 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground shadow-inner shadow-sky-900/10">
                {idx + 1}
              </span>
              <span>{label}</span>
            </span>
            {idx < APPLICATION_FLOW_VISUAL_LABELS.length - 1 ? (
              <>
                <ChevronDown aria-hidden className="size-5 shrink-0 text-sky-300 sm:hidden" />
                <ChevronRight
                  aria-hidden
                  className="mx-px hidden size-[0.9375rem] shrink-0 text-sky-300 sm:block sm:size-[1.125rem]"
                />
              </>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="jp-keep-all mt-5 px-1 text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
        くわしくは{' '}
        <ProductionFlowJumpLink className="mx-auto inline-block max-sm:mt-1 sm:mx-1 sm:inline">料金ページの制作の流れ</ProductionFlowJumpLink>{' '}
        をご覧ください。
      </p>
    </div>
  );
}
