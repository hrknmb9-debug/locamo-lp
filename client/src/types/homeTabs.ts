export type PrimaryTabId = 'overview' | 'services' | 'pricing' | 'portfolio' | 'instagram' | 'contact';

export const PRIMARY_TAB_LABELS: { id: PrimaryTabId; label: string }[] = [
  { id: 'overview', label: '概要' },
  { id: 'services', label: 'サービス' },
  { id: 'pricing', label: '料金' },
  { id: 'portfolio', label: '実績' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'contact', label: 'お問合せ' },
];
