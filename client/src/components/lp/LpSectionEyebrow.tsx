import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/** 見出し直上のキャプション（コーポレートLP由来の準日本語・アクセントライン付き） */
export function LpSectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-6 flex justify-center px-2 sm:mb-7', className)}>
      <p className="flex max-w-[min(100%,28rem)] items-center justify-center gap-3 text-center">
        <span className="h-px w-8 shrink-0 bg-gradient-to-r from-transparent via-sky-400/75 to-sky-500 sm:w-10" aria-hidden />
        <span className="min-w-0 text-[11px] font-semibold tracking-[0.14em] text-sky-800 sm:text-[0.8125rem] sm:tracking-[0.16em]">
          {children}
        </span>
        <span className="h-px w-8 shrink-0 bg-gradient-to-l from-transparent via-sky-400/75 to-sky-500 sm:w-10" aria-hidden />
      </p>
    </div>
  );
}
