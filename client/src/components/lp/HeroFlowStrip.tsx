import { ChevronRight } from 'lucide-react';

import { APPLICATION_FLOW_VISUAL_LABELS } from '@/data/conversionMessaging';
import { ProductionFlowJumpLink } from '@/components/lp/ProductionFlowJumpLink';

/**
 * ヒーロー用：短文ラベルのみ。説明文は料金タイムライン（#production-flow）にひとつに集約。
 */
export function HeroFlowStrip() {
  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-lg px-0 sm:max-w-xl" style={{ animationDelay: '0.52s' }}>
      <p id="hero-flow-micro" className="text-center text-[11px] font-semibold tracking-wide text-sky-800/90 sm:text-xs">
        制作までの順序（概要）
      </p>
      <ol
        aria-labelledby="hero-flow-micro"
        className="mt-3 flex flex-wrap items-center justify-center gap-x-0.5 gap-y-3 sm:gap-x-1"
      >
        {APPLICATION_FLOW_VISUAL_LABELS.map((label, idx) => (
          <li key={label} className="flex items-center gap-1 sm:gap-1.5">
            <span className="inline-flex max-w-fit items-center whitespace-nowrap rounded-full border border-sky-200 bg-sky-50/98 py-2 ps-3 pe-[0.6875rem] text-[11px] font-semibold tracking-tight text-sky-900 shadow-sm ring-1 ring-sky-100/70 sm:py-2 sm:text-xs sm:leading-none">
              <span className="-ms-1 me-2 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground shadow-inner shadow-sky-900/10">
                {idx + 1}
              </span>
              <span>{label}</span>
            </span>
            {idx < APPLICATION_FLOW_VISUAL_LABELS.length - 1 ? (
              <ChevronRight aria-hidden className="mx-px size-[0.9375rem] shrink-0 text-sky-300 sm:size-[1.125rem]" />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="jp-keep-all mt-6 text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
        手順の本文はサイト内では重複させず、
        <ProductionFlowJumpLink className="mx-1 inline-flex min-h-11 items-center px-1 sm:min-h-0">料金ページの制作の流れ</ProductionFlowJumpLink>
        だけにおいています。
      </p>
    </div>
  );
}
