/**
 * 申込〜初回連絡までの説明・CTAを全LPで一致させるための共通文面
 */

export const HEARING_FLOW_SHORT =
  '4ステップで回答し、ボタン一つでコピー。そのままInstagramのDMへ進みます。';

export const HEARING_FLOW_LINES = [
  'サイト内の4ステップに沿ってお店の状況を入力します。',
  '最後のボタンで回答全文がクリップボードにコピーされ、そのままInstagramのDMページへ進みます。',
  'DMの入力欄に長押しで貼り付け、送信するとお申し込みとして受け付けます（送信はログイン中のInstagramから届きます）。',
] as const;

export const RESPONSE_SLA =
  '内容を確認のうえ、原則2営業日以内にInstagramのDMでご返信します（混雑時は前後することがあります）。';

export const SCOPE_INCLUDED_BULLETS = [
  'LP1枚の構成・文案のたたき・スマホ最適化・公開までの設定サポート（プランによる範囲は各ページを参照）。',
  'ご納品前の軽微な文言・表示の修正（大幅な作り直しは別途相談）。',
] as const;

export const SCOPE_EXCLUDED_BULLETS = [
  '検索順位やアクセス数の数値保証。',
  '広告運用の代行のみ・撮影・動画制作のみを主目的とした単発請負。',
  '公開後の無制限な機能追加（都度お見積り）。',
] as const;

export const MONITOR_SLOT_NOTE =
  'モニター枠は先着・審査あり。枠外・通常依頼は制作費3万円〜。無料枠でもサイト公開に伴う月額費（ドメインなど）は別途実費の旨をご案内します。';

export const PRIMARY_CTA_HEARING = 'ヒアリングに進む';

export const PRIMARY_CTA_HEARING_FULL = 'LP制作のヒアリングに進む';

/** 短め（オレンジ pill のはみ出し防止）— 長いラベルはボタン内で別表示可 */
export const PRIMARY_CTA_DM_CONTACT = 'DMで相談';

/** 「DMで相談」ボタンの補足（視覚的に短く） */
export const PRIMARY_CTA_DM_SUBLINE = 'Instagram';

/** 返信SLAなどの詳細が別セクションにあるときの短文（フローのくどさ防止用） */
export const REFER_CONTACT_FOR_SLA = '初回ご返信の目安や受付手順は、ページ内「お問合せ」の記載に準じます。';
