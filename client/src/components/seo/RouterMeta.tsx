import { HEARING_PATH, LP_ILLUSTRATIONS_PREVIEW_PATH } from '@/constants/spaRoutes';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

/** クローラー／タブ表示共通。公開URLの title と矛盾しないよう大阪の個人店訴求に統一 */
export const DEFAULT_SITE_TITLE =
  'Locamo - 大阪の個人店向けLP・ホームページ制作サービス｜3万円から' as const;

const DEFAULT_DESCRIPTION =
  '大阪府の個人店・小規模店向けに、公式LPとホームページを制作。制作費買い切り3万円〜。InstagramのDMからヒアリングし、構成から公開まで伴走します。';

function normalizePathname(pathname: string): string {
  return pathname === '' || pathname === '/'
    ? '/'
    : pathname.endsWith('/') && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;
}

function titleForPath(pathname: string): string {
  const p = normalizePathname(pathname);

  if (p === HEARING_PATH) return `ヒアリング・お申込み｜Locamo`;
  if (p === LP_ILLUSTRATIONS_PREVIEW_PATH) return `インラインSVG一覧（確認用）｜Locamo`;
  if (p.startsWith('/services/')) return `プラン詳細｜Locamo`;
  if (p === '/privacy') return `プライバシーポリシー｜Locamo`;
  if (p === '/404') return `ページが見つかりません｜Locamo`;

  return DEFAULT_SITE_TITLE;
}

const OG_IMAGE_PATH = '/manus-storage/locamo-hero_769daceb.png';

function upsertAttrMeta(attrName: 'name' | 'property', key: string, content: string) {
  const escaped = CSS.escape(key);
  const selector =
    attrName === 'name' ? `meta[name="${escaped}"]` : `meta[property="${escaped}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  const sel = `link[rel="${CSS.escape(rel)}"][data-seo-router="locamo"]`;
  let link = document.querySelector(sel) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    link.dataset.seoRouter = 'locamo';
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * SPA 内遷移に合わせて canonical と OGP の URL・タイトルを揃える（サイトはシングルオリジン前提）。
 */
export function RouterMeta() {
  const [path] = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const docTitle = titleForPath(path);
    document.title = docTitle;

    const p = normalizePathname(path);

    const u = new URL(window.location.href);
    u.hash = '';
    const canonical = `${u.origin}${u.pathname}${u.search}`;

    upsertAttrMeta('name', 'description', DEFAULT_DESCRIPTION);
    upsertAttrMeta('name', 'robots', p === LP_ILLUSTRATIONS_PREVIEW_PATH ? 'noindex,nofollow' : 'index,follow');
    upsertAttrMeta('property', 'og:title', docTitle);
    upsertAttrMeta('property', 'og:description', DEFAULT_DESCRIPTION);
    upsertAttrMeta('property', 'og:type', 'website');
    upsertAttrMeta('property', 'og:locale', 'ja_JP');
    upsertAttrMeta('property', 'og:url', canonical);

    upsertAttrMeta('name', 'twitter:card', 'summary_large_image');
    upsertAttrMeta('name', 'twitter:title', docTitle);
    upsertAttrMeta('name', 'twitter:description', DEFAULT_DESCRIPTION);

    const ogImage = `${u.origin}${OG_IMAGE_PATH}`;
    upsertAttrMeta('property', 'og:image', ogImage);
    upsertAttrMeta('property', 'og:image:alt', '店舗の集客とSNS・Webを結ぶコンセプトビジュアル');

    upsertLink('canonical', canonical);
  }, [path]);

  return null;
}
