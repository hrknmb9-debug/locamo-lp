import { APPLICATION_FLOW_HEADING, APPLICATION_FLOW_STEPS } from '@/data/conversionMessaging';
import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';

/**
 * ヒーロー直下：モバイルで縦積み + 適度なタイポ。本文と料金への導線を一本化する。
 */
export function ConversionFlowRibbon() {
  return (
    <section
      aria-labelledby="lp-short-flow-heading"
      className="animate-fade-in-up mx-auto w-full max-w-lg px-0 sm:max-w-xl md:max-w-[28rem]"
      style={{ animationDelay: '0.52s' }}
    >
      <h2 id="lp-short-flow-heading" className="text-center text-[0.9375rem] font-bold leading-snug text-sky-950 md:text-base">
        {APPLICATION_FLOW_HEADING}
      </h2>
      <ol className="mt-5 space-y-2.5 sm:space-y-3">
        {APPLICATION_FLOW_STEPS.map(step => (
          <li key={step.num}>
            <div className="flex gap-3 rounded-2xl border border-sky-100 bg-card/95 px-3 py-3.5 shadow-sm shadow-sky-950/[0.04] sm:px-4 sm:py-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-sm shadow-sky-300/45"
                aria-hidden
              >
                {step.num}
              </span>
              <div className="min-w-0 text-left pt-0.5">
                <p className="text-sm font-semibold leading-snug text-sky-950">{step.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground text-pretty sm:text-[0.9375rem]">
                  {step.short}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 px-1 text-center text-[11px] leading-relaxed text-muted-foreground sm:px-0 sm:text-xs">
        料金表・オンライン決済の入口はページ内{' '}
        <a
          href="#pricing"
          className="-mx-1 inline-flex min-h-11 items-center px-3 font-semibold text-accent underline underline-offset-[3px] decoration-accent/40 hover:opacity-95 sm:mx-0 sm:inline sm:min-h-0 sm:px-1"
          onClick={e => {
            e.preventDefault();
            scrollToSiteAnchor('pricing');
            replaceUrlHash('pricing');
          }}
        >
          「料金」
        </a>
        でまとめて確認できます。
      </p>
    </section>
  );
}
