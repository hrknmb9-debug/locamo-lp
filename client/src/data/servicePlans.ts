export type PlanId = 'lp' | 'hp';

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
      '1ページ完結型。店舗情報・メニュー・アクセス・問い合わせ先を収め、「見られたら問い合わせ・来店」の流れまで設計。',
    pages: '1ページ',
    features: [
      'ヒアリングから公開までディレクション',
      '構成・文言のドラフト〜推敲',
      '店舗情報・メニュー・料金の整理',
      'アクセス・営業時間のわかりやすい体裁',
      '問い合わせ・LINE等へのCTAボタン',
      'レスポンシブ・モバイル最適化',
      'SEOの基本セット',
    ],
    timeline: '2週間目安',
    price: '3万円〜',
    detailLead:
      '「LPを読んだその場でどう動いてほしいか」から逆算します。AIで素早く骨子を出し、その上から担当が並び順・見せ方まで整え、注文〜問い合わせへの心理的ハードルを下げます。',
    detailSections: [
      {
        heading: 'こんなご依頼に向いています',
        items: [
          '検索や地図経由での初めての来店・予約を増やしたい',
          'Instagramや口コミだけでは情報が散らばっている',
          'まず一枚のページで伝えられる要素を決めきりたい',
        ],
      },
      {
        heading: '進め方',
        items: [
          'サイト内ヒアリング入力 → コピーしてInstagramのDMで送信',
          '構成・ワイヤーとお見立て・お見積り',
          'デザイン・実装〜公開チェックまで一気通貫',
        ],
      },
    ],
  },
  {
    id: 'hp',
    title: 'ホームページ制作',
    description: '複数ページ構成。サービス詳細やブログで、運用まで見据えた発信軸までお任せいただけます。',
    pages: '複数ページ',
    features: [
      'サイトマップ〜情報設計',
      'デザインテンプレートの構成',
      'ブログまたはニュース枠の設計',
      'ギャラリー・スタッフ紹介など拡張',
      '問い合わせ・予約への導線',
      'モバイル最適化',
      'SEOと計測（Google Analytics）のセットアップ支援',
    ],
    timeline: '3〜4週間目安',
    price: '要相談',
    highlight: true,
    detailLead:
      'サービス単位での訴求を深める・更新の型を決める構成です。複数ページで「読み進められる理由」を持たせやすく、広告や紹介のランディングと組み合わせて運用していただけます。',
    detailSections: [
      {
        heading: 'ページ例',
        items: ['トップ / コンセプト', 'サービス・商品紹介', '店舗・会社概要', 'アクセス／お問い合わせ／予約への導線'],
      },
      {
        heading: 'ご相談の流れ',
        items: [
          'サイト内ヒアリング → DMで送信し概要を確認',
          'ページ数・更新頻度に合わせたお見立て・お見積り',
          'デザイン・実装〜公開および初期運用ヒントの共有',
        ],
      },
    ],
  },
];

export function getPlan(id: string): ServicePlanCopy | undefined {
  return SERVICE_PLANS.find(p => p.id === id);
}
