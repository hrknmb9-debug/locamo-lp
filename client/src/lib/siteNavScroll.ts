/** シングルページ版トップでのセクションスクロール */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSiteAnchor(anchorId: string): void {
  const el = document.getElementById(anchorId);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

/** フラグメントだけ付け替え（サブパス配備でも現在 pathname を維持） */
export function replaceUrlHash(anchorId: string): void {
  if (typeof window === 'undefined' || typeof window.history?.replaceState !== 'function') return;
  window.history.replaceState(null, '', `#${anchorId}`);
}

/**
 * `/payment` や `/orders` からホームの料金などへ：`/` に遷移したあとアンカーへスクロール。
 */
export function navigateToHomeAnchor(
  navigate: (path: string, opts?: { replace?: boolean }) => unknown,
  anchorId: string,
): void {
  navigate('/');
  window.setTimeout(() => {
    scrollToSiteAnchor(anchorId);
    replaceUrlHash(anchorId);
  }, 120);
}
