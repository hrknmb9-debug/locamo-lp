/**
 * LP特化サイト用：匿名カテゴリとの比較（特定の事業者名は載せない）。
 * 表示は「◎○△×」中心。補足テキストは主に自社列。
 */

export const LP_COMPETITOR_TABLE_CAPTION =
  '特定のサービス名は記載していません。世に多いタイプごとの一例です。◎○△×は相対的な目安であり、案件ごとに異なります。';

export type ComparisonGrade = '◎' | '○' | '△' | '×';

/** 記号の読み上げ用 */
export const COMPARISON_GRADE_ARIA: Record<ComparisonGrade, string> = {
  '◎': '最も優れていると判断できる傾向',
  '○': 'おおむね良いが条件あり',
  '△': '弱くなりがち／要確認が多い',
  '×': '合わない・負担がかかりがちになりやすい',
};

/** thead。先頭セルは行見出し用 */
export const LP_COMPETITOR_COLUMNS = [
  { id: 'point', heading: '比較項目' },
  { id: 'locamo', heading: 'Locamo', highlight: true },
  { id: 'mass', heading: '大手Web制作会社' },
  { id: 'system', heading: 'システム会社' },
  { id: 'freelancer', heading: '個人・フリーランス' },
] as const;

export interface LpComparisonRow {
  point: string;
  locamo: { grade: ComparisonGrade; note: string };
  mass: ComparisonGrade;
  system: ComparisonGrade;
  freelancer: ComparisonGrade;
}

export const LP_COMPETITOR_ROWS: LpComparisonRow[] = [
  {
    point: 'お値段・総額のわかりやすさ',
    locamo: {
      grade: '◎',
      note: 'LPは買い切り3万円〜。制作費の月額課金なし。公開・ドメインは別途とセットで案内。',
    },
    mass: '○',
    system: '△',
    freelancer: '○',
  },
  {
    point: '手直し・相談のしやすさ',
    locamo: {
      grade: '◎',
      note: '公式LINEひとつに集約。簡易的な文言・表示修正は無料範囲で対応（大幅改修は別途）。',
    },
    mass: '○',
    system: '△',
    freelancer: '○',
  },
  {
    point: 'デザイン・読みやすさ（一枚LP）',
    locamo: {
      grade: '◎',
      note: '個人店向けに「読む順番」とCTAまで一緒に設計。',
    },
    mass: '◎',
    system: '△',
    freelancer: '○',
  },
  {
    point: '周辺サポート・伴走の幅',
    locamo: {
      grade: '◎',
      note: 'インスタとのつなぎ方や、LINE公式への導線づくりなど、公開までひと続きで相談しやすい。',
    },
    mass: '○',
    system: '○',
    freelancer: '△',
  },
  {
    point: '個人店への寄り添い・理解',
    locamo: {
      grade: '◎',
      note: '大阪の個人店・小規模店のみを対象に、現場で使う言い回しまで詰める。',
    },
    mass: '△',
    system: '△',
    freelancer: '◎',
  },
];
