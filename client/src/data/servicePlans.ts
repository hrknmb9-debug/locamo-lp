export type PlanId = 'lp' | 'hp' | 'instagram';

export interface ServicePlanCopy {
  id: PlanId;
  title: string;
  description: string;
  pages: string;
  features: string[];
  timeline: string;
  price: string;
  highlight?: boolean;
  /** 詳細ページ用の概要 */
  detailLead: string;
  /** 詳細ページの箇条書き（本文とは別粒度） */
  detailSections: { heading: string; items: string[] }[];
}

export const SERVICE_PLANS: ServicePlanCopy[] = [
  {
    id: 'lp',
    title: 'LP制作',
    description:
      '1ページ完結型。店舗情報・メニュー・アクセス・問合せをまとめたランディングページ。',
    pages: '1ページ',
    features: [
      '店舗情報の掲載',
      'メニュー・料金表',
      'アクセス・営業時間',
      'お問合せ導線',
      'Instagram連携',
      'モバイル対応',
      'SEO基本対応',
    ],
    timeline: '2週間目安',
    price: '3万円〜',
    detailLead:
      '来店につなげることを目的にした1ページ完結のLPです。Instagramからの流入を想定し、必要な情報を迷わず辿れる導線にまとめます。',
    detailSections: [
      {
        heading: 'こんな店舗向け',
        items: ['初めてWebで集客の土台を作りたい方', '予約・問い合わせを一本化したい方', 'SNSだけだと情報が分散している方'],
      },
      {
        heading: '制作の進め方',
        items: [
          'ヒアリング・構成案のご提案',
          'デザイン・実装・モバイル最適化',
          'Instagram連携箇所の設定',
          '公開前チェック・納品',
        ],
      },
    ],
  },
  {
    id: 'hp',
    title: 'ホームページ制作',
    description: '複数ページ構成。ブランドとして育てる本格的なホームページ。',
    pages: '複数ページ',
    features: [
      'トップページ',
      'サービス紹介',
      'ブログ機能',
      'ギャラリー',
      'お問合せフォーム',
      'Instagram連携',
      'モバイル対応',
      'SEO対策',
      'Google Analytics連携',
    ],
    timeline: '3〜4週間目安',
    price: '要相談',
    highlight: true,
    detailLead:
      '複数ページでブランドやサービスを段階的に伝えられる構成です。ブログやギャラリーなど、長く運用する前提のサイトに向いています。',
    detailSections: [
      {
        heading: '含められる機能の例',
        items: ['トップ・サービス紹介・会社／店舗情報', 'ブログ・ニュースでの更新', '問い合わせフォームとアクセス情報', '計測（Google Analytics 等）の設置'],
      },
      {
        heading: '料金について',
        items: ['ページ数・機能によりお見積もりいたします', '運用保守のご相談も可能です', 'Instagram連携は標準で設計に組み込みます'],
      },
    ],
  },
  {
    id: 'instagram',
    title: 'Instagram連携設計',
    description: '既存Instagramからの流入導線をLP/HPに組み込む設計。上記2プランに含まれます。',
    pages: 'LP or HP',
    features: [
      'Instagramフィード埋め込み',
      'Instagram投稿へのリンク',
      'フォロー導線の最適化',
      'DM誘導ボタン',
      'ストーリーズ連携',
    ],
    timeline: '制作に含む',
    price: '無料',
    detailLead:
      'Instagramで集めた関心を、LPやサイト上で問い合わせ・予約につなぐための設計です。単体サービスというよりLP/HPプランに含まれる設計サービスになります。',
    detailSections: [
      {
        heading: '連携でできることの例',
        items: ['フィード表示といいね・フォローへの動線', 'プロフィールからのリンク先LPの最短導線', 'DMでの問い合わせを促すボタン配置'],
      },
      {
        heading: 'お申込みについて',
        items: ['LPまたはホームページ制作とセットでご提供です', '既存サイトへの後付けご相談もDMでお問い合わせください'],
      },
    ],
  },
];

export function getPlan(id: string): ServicePlanCopy | undefined {
  return SERVICE_PLANS.find(p => p.id === id);
}
