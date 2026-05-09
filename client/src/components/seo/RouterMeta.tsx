import { useEffect } from 'react';
import { useLocation } from 'wouter';

const DEFAULT_DESCRIPTION =
  '大阪の個人店向け公式LP・ホームページ制作。買い切り3万円〜。Instagramでのご連絡から構成・公開まで対応します。';

const OG_IMAGE_PATH = '/manus-storage/locamo-hero_769daceb.png';

function upsertAttrMeta(attrName: 'name' | 'property', key: string, content: string) {
  const escaped = CSS.escape(key);
  const selector = attrName === 'name' ? `meta[name="${escaped}"]` : `meta[property="${escaped}"]`;
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
 * SPA 内遷移に合わせて canonical と OGP の URL を揃える（サイトはシングルオリジン前提）。
 */
export function RouterMeta() {
  const [path] = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const u = new URL(window.location.href);
    u.hash = '';
    const canonical = `${u.origin}${u.pathname}${u.search}`;

    upsertAttrMeta('name', 'description', DEFAULT_DESCRIPTION);
    upsertAttrMeta('property', 'og:title', document.title);
    upsertAttrMeta('property', 'og:description', DEFAULT_DESCRIPTION);
    upsertAttrMeta('property', 'og:type', 'website');
    upsertAttrMeta('property', 'og:locale', 'ja_JP');
    upsertAttrMeta('property', 'og:url', canonical);

    upsertAttrMeta('name', 'twitter:card', 'summary_large_image');
    upsertAttrMeta('name', 'twitter:title', document.title);
    upsertAttrMeta('name', 'twitter:description', DEFAULT_DESCRIPTION);

    const ogImage = `${u.origin}${OG_IMAGE_PATH}`;
    upsertAttrMeta('property', 'og:image', ogImage);
    upsertAttrMeta('property', 'og:image:alt', '店舗の集客とSNS・Webを結ぶコンセプトビジュアル');

    upsertLink('canonical', canonical);
  }, [path]);

  return null;
}
