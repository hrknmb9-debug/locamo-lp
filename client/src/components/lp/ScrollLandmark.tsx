import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { SCROLL_MARGIN_CLASS } from '@/data/siteNav';

/** 共通: sticky ヘッダーとの干渉を避けるスクロール到達点（id とセットで利用） */
export function ScrollLandmark({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div id={id} className={cn(SCROLL_MARGIN_CLASS, className)}>
      {children}
    </div>
  );
}
