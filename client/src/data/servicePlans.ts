export type PlanId = 'lp';

export interface ServicePlanCopy {
  id: PlanId;
  title: string;
  description: string;
  pages: string;
  features: string[];
  timeline: string;
  price: string;
  highlight?: boolean;
  detailLead: string;
  detailSections: { heading: string; items: string[] }[];
}

export const SERVICE_PLANS: ServicePlanCopy[] = [
  {
    id: 'lp',
    title: 'LP制作',
    description:
      '1ページ完結型。個人店の公式拠点として、メニュー・料金・アクセス・問い合わせ・LINEを一枚に収め、「見られたら問い合わせ・来店」の流れまで設計します。',
    pages: '1ページ',
    features: [
      'ご相談から公開までディレクション',
      '構成・文言のドラフト〜推敲',
      '店舗情報・メニュー・料金の整理',
      'アクセス・営業時間のわかりやすい体裁',
      '問い合わせ・LINE等へのCTAボタン',
      'レスポンシブ・モバイル最適化',
      'SEOの基本セット',
    ],
    timeline: '2週間目安',
    price: '3万円〜',
    highlight: true,
    detailLead:
      '個人店・小規模店では、まず「公式の一枚」があれば多くは十分です。見せたい要素を読む順に並べ、LPを読み終わったときにどう動いてほしいかから逆算します。AIで素早く骨子を出し、担当がCTAまで整え、問い合わせ〜予約へのハードルを下げます。',
    detailSections: [
      {
        heading: 'こんなご依頼に向いています',
        items: [
          '公式ページを持つのは初めてで、情報を一枚にまとめたい',
          '検索や地図経由での初めての来店・予約を増やしたい',
          'Instagramや口コミだけではメニューやアクセス説明が散らばっている',
        ],
      },
      {
        heading: '進め方',
        items: [
          '公式LINEで概要を確認し、お見立てまでご案内',
          '構成・ワイヤーとお見立て・お見積り',
          'デザイン・実装〜公開チェックまで一気通貫',
        ],
      },
    ],
  },
];

export function getPlan(id: string): ServicePlanCopy | undefined {
  return SERVICE_PLANS.find(p => p.id === id);
}
