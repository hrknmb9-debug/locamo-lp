/**
 * LP特化サイト用：匿名カテゴリとの比較（特定の事業者名は載せない）。
 * 表示は「◎○△×」中心。補足テキストは主に自社列。
 */

export const LP_COMPETITOR_TABLE_CAPTION =
  '世に多いタイプごとの一例です。◎○△×は相対的な目安であり、案件ごとに異なります。';

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
  { id: 'mass', heading: '大手テンプレ' },
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
    point: '料金・総額のわかりやすさ',
    locamo: {
      grade: '◎',
      note: 'LP買い切り3万円〜。制作に月額なし／公開ドメインは別途セットで案内。',
    },
    mass: '○',
    system: '△',
    freelancer: '○',
  },
  {
    point: '手直し・相談',
    locamo: {
      grade: '◎',
      note: '公式LINE集約。簡易文言・表示の修正は無料範囲（大作り替えは別途）。',
    },
    mass: '○',
    system: '△',
    freelancer: '○',
  },
  {
    point: 'デザイン・読みやすさ',
    locamo: {
      grade: '◎',
      note: '個人店向けに読む順とCTAまで一緒に設計。',
    },
    mass: '◎',
    system: '△',
    freelancer: '○',
  },
  {
    point: '伴走・周辺サポート',
    locamo: {
      grade: '◎',
      note: 'インスタ→LP、LINE導線など公開までの相談がしやすい。',
    },
    mass: '○',
    system: '○',
    freelancer: '△',
  },
  {
    point: '個人店への理解',
    locamo: {
      grade: '◎',
      note: '大阪の個人店・小規模店のみ。現場の言い回しまで詰める。',
    },
    mass: '△',
    system: '△',
    freelancer: '◎',
  },
];
