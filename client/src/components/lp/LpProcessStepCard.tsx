import type { ComponentType } from 'react';

export function LpProcessStepCard({
  stepNum,
  title,
  detail,
  Illustration,
  isLast,
}: {
  stepNum: string;
  title: string;
  detail: string;
  Illustration: ComponentType<{ className?: string }>;
  isLast: boolean;
}) {
  const label = stepNum.length >= 2 ? stepNum : `0${stepNum}`;

  return (
    <div className="relative">
      <div className="relative z-[1] overflow-hidden rounded-[1.25rem] border border-sky-100 bg-card lp-card">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-[3.25rem] w-[3.25rem]">
          <svg className="h-full w-full text-accent" viewBox="0 0 56 56" aria-hidden>
            <path fill="currentColor" d="M0 0 L56 0 L0 56 Z" />
          </svg>
          <span className="absolute left-2 top-[0.625rem] text-[11px] font-bold leading-none text-accent-foreground drop-shadow-[0_1px_0_rgb(0_0_0_/_0.06)]">
            {label}
          </span>
        </div>

        <div className="flex flex-col gap-5 px-6 pb-8 pt-10 md:flex-row md:items-start md:gap-8 md:px-8 md:pb-10 md:pt-9">
          <div className="flex shrink-0 justify-center md:w-[42%] md:justify-end">
            <Illustration className="h-auto w-full max-w-[220px] drop-shadow-sm" />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <h4 className="mb-2 text-base font-semibold leading-snug text-sky-950">{title}</h4>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{detail}</p>
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="flex justify-center py-5" aria-hidden>
          <span className="inline-flex size-2.5 shrink-0 rounded-full bg-primary/60 shadow-sm shadow-orange-400/30" />
        </div>
      )}
    </div>
  );
}
