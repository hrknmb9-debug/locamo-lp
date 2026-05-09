import type { MouseEventHandler, ReactNode } from 'react';

import { replaceUrlHash, scrollToSiteAnchor } from '@/lib/siteNavScroll';
import { cn } from '@/lib/utils';

/** 料金内「制作の流れ」へのページ内スクロール（共通） */
export function ProductionFlowJumpLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const scroll: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    scrollToSiteAnchor('production-flow');
    replaceUrlHash('production-flow');
  };
  return (
    <a
      href="#production-flow"
      onClick={scroll}
      className={cn('font-semibold text-accent underline underline-offset-[3px] decoration-accent/35 hover:opacity-95', className)}
    >
      {children}
    </a>
  );
}
