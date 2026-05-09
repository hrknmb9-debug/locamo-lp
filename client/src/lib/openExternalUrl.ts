/** iframe / クロスオリジンで `window.top` を参照すると例外になることがある */
export function isEmbeddedInIframe(): boolean {
  try {
    return typeof window !== 'undefined' && window.self !== window.top;
  } catch {
    return true;
  }
}

/** Instagram / ig.me / 決済インボイス等 iframe でも開けるよう親ウィンドウの _blank を優先する */
export function openExternalUrl(url: string): void {
  try {
    if (typeof window !== 'undefined' && window.self !== window.top && window.top) {
      const w = window.top.open(url, '_blank', 'noopener,noreferrer');
      if (w) return;
    }
  } catch {
    /* noop */
  }
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/** 埋め込み時、`a[target=_blank]` が子フレームに閉じこもることがあるため親へ委譲 */
export function interceptExternalAnchorInIframe(e: { preventDefault(): void }, url: string): void {
  if (!isEmbeddedInIframe()) return;
  e.preventDefault();
  openExternalUrl(url);
}
