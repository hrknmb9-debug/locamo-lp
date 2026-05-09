/** iframe / クロスオリジンで `window.top` を参照すると例外になることがある */
export function isEmbeddedInIframe(): boolean {
  try {
    return typeof window !== 'undefined' && window.self !== window.top;
  } catch {
    return true;
  }
}

/** 新規タブ・修飾クリックなどはブラウザの既定処理に任せる */
export type ExternalAnchorPointerEvent = Pick<
  MouseEvent,
  'preventDefault' | 'metaKey' | 'ctrlKey' | 'shiftKey' | 'altKey' | 'button'
>;

function isAuxiliaryExternalLinkActivation(e: ExternalAnchorPointerEvent): boolean {
  return (
    !!e.metaKey ||
    !!e.ctrlKey ||
    !!e.shiftKey ||
    !!e.altKey ||
    (typeof e.button === 'number' && e.button !== 0)
  );
}

function tryOpenBlank(win: Window, url: string): Window | null {
  try {
    return win.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    return null;
  }
}

/** クロスオリジン親へは assign が弾かれることがあるので try/catch */
function tryAssignLocation(win: Window, url: string): boolean {
  try {
    win.location.assign(url);
    return true;
  } catch {
    try {
      win.location.href = url;
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * iframe でも Instagram / ig.me 等へ確実につなぐ。
 * 親で `_blank` がブロックされるプレビューでは、親を同一ウィンドウ遷移（プレビューからの脱出）にフォールバックする。
 */
export function openExternalUrl(url: string): void {
  if (typeof window === 'undefined') return;

  try {
    if (window.self !== window.top && window.top) {
      const topWin = window.top;
      const tab = tryOpenBlank(topWin, url);
      if (tab) return;
      if (tryAssignLocation(topWin, url)) return;
    }
  } catch {
    try {
      if (window.top && tryAssignLocation(window.top, url)) return;
    } catch {
      /* noop */
    }
  }

  try {
    const w = window.open(url, '_blank', 'noopener,noreferrer');
    if (w) return;
  } catch {
    /* noop */
  }

  window.location.assign(url);
}

/** 単純クリックのみ JS で開く（埋め込み・子フレームの `target=_blank` 不達の救済）。成否で boolean を返す */
export function activateExternalHref(event: ExternalAnchorPointerEvent, url: string): boolean {
  if (isAuxiliaryExternalLinkActivation(event)) return false;
  event.preventDefault();
  openExternalUrl(url);
  return true;
}
