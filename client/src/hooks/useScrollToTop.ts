import { useLayoutEffect } from 'react';

/** ページ遷移直後に先頭へスクロールさせる（アンカーや復元スクロールの干渉を避ける） */
export function useScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
