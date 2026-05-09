import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/** 見出し直上の字幕（日本語・アクセント）— モバイルでも視認できるサイズ・余白 */
export function LpSectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-accent mb-3 text-center text-xs font-semibold tracking-wider', className)}>{children}</p>
  );
}
