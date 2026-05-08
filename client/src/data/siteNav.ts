/**
 * シングルページLPのスクロールアンカー（ヘッダー／フッター／本文で共通）
 */
export type SiteAnchor = 'top' | 'workflow' | 'services' | 'pricing' | 'works' | 'instagram' | 'contact';

/** sticky ヘッダー分のオフセット（tailwind: scroll-mt-20） */
export const SCROLL_MARGIN_CLASS = 'scroll-mt-20';

export const SITE_SCROLL_NAV: { anchor: Exclude<SiteAnchor, 'top'>; label: string }[] = [
  { anchor: 'workflow', label: '課題とご案内' },
  { anchor: 'services', label: 'サービス' },
  { anchor: 'pricing', label: '料金' },
  { anchor: 'works', label: '納品事例' },
  { anchor: 'instagram', label: 'Instagram' },
  { anchor: 'contact', label: 'お問合せ' },
];
