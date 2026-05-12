/**
 * 申込〜初回連絡までの説明・CTAを全LPで一致させるための共通文面
 */

export const HEARING_FLOW_SHORT =
  'まずはLINEでお気軽にご連絡ください。担当よりヒアリングシートをお送りします。';

export const HEARING_FLOW_LINES = [
  'LINEで「ヒアリングシートをください」とお送りください。',
  '担当よりヒアリングシートをお送りします。',
  'ご記入いただき、LINEで返信いただいた時点で制作のご依頼として受け付けます。',
] as const;

export const RESPONSE_SLA =
  '内容を確認のうえ、原則2営業日以内にLINEでご返信します（混雑時は前後することがあります）。';

export const SCOPE_INCLUDED_BULLETS = [
  'LP1枚の構成・文案のたたき・スマホ最適化・公開までの設定サポート（プランによる範囲は各ページを参照）。',
  'ご納品前の軽微な文言・表示の修正（大幅な作り直しは別途相談）。',
] as const;

export const SCOPE_EXCLUDED_BULLETS = [
  '検索順位やアクセス数の「数値保証」。',
  '広告運用の単独代行、撮影や動画制作のみなど、ウェブ公開が主目的でない単発請負。',
  '公開後の無制限な機能追加や全面リニューアル（規模に応じ都度お見積り）。',
] as const;

export const MONITOR_SLOT_NOTE =
  'モニター枠は先着・審査あり。枠外・通常依頼は制作費3万円〜。無料枠でもサイト公開に伴う月額費（ドメインなど）は別途実費の旨をご案内します。';

/** ヒーロー用モニター帯（複数行でレイアウトし、単語中途改行を避ける） */
export const MONITOR_BADGE_LINES = [
  'モニター先行・最大3店舗まで',
  'ご採用いただいた店舗は制作費無料',
  '（審査付き／先着）',
] as const;

export const PRIMARY_CTA_HEARING = 'ヒアリングに進む';

export const PRIMARY_CTA_HEARING_FULL = 'LP制作のヒアリングに進む';

/** 短め（オレンジ pill のはみ出し防止）— 長いラベルはボタン内で別表示可 */
export const PRIMARY_CTA_DM_CONTACT = 'LINEで無料相談する';

/** 「DMで相談」ボタンの補足（視覚的に短く） */
export const PRIMARY_CTA_DM_SUBLINE = 'LINE';

export const SCOPE_INCLUDED_HEADING = 'ご依頼に含まれやすいこと';
export const SCOPE_EXCLUDED_HEADING = '標準には含まれないこと（ご相談・別見積り）';

/** Landing ファーストビューの「約束」を一言にまとめた見出し */
export const HERO_VALUE_HOOK =
  '大阪の個人店向けに、来店や予約まで迷わせない公式の1枚LPをつくります。';

/** ヒーロー直下リード（価格・手段を一段に収め、スクロール前の読了負荷を下げる） */
export const HERO_PRIMARY_LEAD =
  'SNSとメニューを公式の一枚にそろえ、次の行動（問い合わせや予約）までを読み順で見せます。AIが構成と文案の素案を出し、担当がCTAまで整えます。';

/** ヒーロー用の料金ハイライト（数値のみ短文） */
export const HERO_PRICE_TEASER = 'LP制作費は買い切り3万円〜／公開・ドメインは別途・月3,000円〜。';

/** お問い合わせ先頭：受付開始を前向きに言い切る（返信SLAは別途続ける） */
export const CONTACT_INTAKE_SUMMARY =
  'LINEでお気軽にご連絡ください。担当よりヒアリングシートをお送りし、ご記入いただいた時点で制作のご依頼として受け付けます。';

/** メールのみ希望などInstagram中心で苦手な方向けの一文 */
export const DM_CHANNEL_FLEX_NOTE =
  'LINEのみでのご相談も可能です。ご契約・決済リンクのご案内はLINEを中心にお送りします。';

/** ヒアリングフォーム送信直前までの環境インフォメーション（Instagram 依存の開示） */
export const HEARING_DM_PREREQUISITE =
  'LINEでお気軽にご連絡ください。ヒアリングシートをお送りし、ご記入いただいた内容をもとに制作を進めます。';

/** 「お約束」（返信〜スコープ）の短いキャプション見出し */
export const PROMISE_SECTION_EYEBROW = 'ご返信までの約束・範囲';

/** 「まず進む」（Apply帯など）の短いキャプション見出し */
export const APPLY_SECTION_EYEBROW = 'まず進むとき';

/** トップ・アンカーナビでの「問題提起」キャプション */
export const WORKFLOW_SECTION_EYEBROW = 'よくある偏り・課題';

/** 「Locamoとは」直上のキャプション */
export const ABOUT_SECTION_EYEBROW = 'このサービスの考え方';

/** サイト全体で共有するお申込み〜公開までの概要（一覧は `APPLICATION_FLOW_STEPS`）。 */
export const APPLICATION_FLOW_HEADING = 'お申込み〜公開まで（ざっくりの流れ）';

/** ヒーロー等の短文ラベル（改行しない）—詳細タイムラインは料金の「制作の流れ」へ集約 */
export const APPLICATION_FLOW_VISUAL_LABELS = [
  'LINEで相談',
  'ヒアリング送信',
  'ご返答',
  '契約〜公開',
] as const;

export type ApplicationFlowStep = {
  readonly num: string;
  readonly title: string;
  /** スクロール量を抑える要約（トップなど） */
  readonly short: string;
  /** 料金ページ・お問い合わせのカード詳細など */
  readonly detail: string;
};

export const APPLICATION_FLOW_STEPS: ApplicationFlowStep[] = [
  {
    num: '1',
    title: 'LINEでご相談 → ヒアリングシート送信',
    short:
      'LINEで「ヒアリングシートをください」とお送りください。担当よりヒアリングシートをお送りし、ご記入いただいた時点で制作のご依頼として受け付けます。',
    detail:
      'LINEで「ヒアリングシートをください」とお送りください。担当よりヒアリングシートをお送りします。ご記入いただき、LINEで返信いただいた時点で制作のご依頼として受け付けます。',
  },
  {
    num: '2',
    title: 'LINEでのご返信・お見立て',
    short:
      '原則2営業日以内を目安に、LINEで構成の方向感や質問にお答えし、見立てまでご案内します。',
    detail:
      '内容を確認のうえ、構成の方向感やご質問にお答えし、お見立てまでLINEを中心にご案内します。',
  },
  {
    num: '3',
    title: 'ご契約・お支払い・制作開始',
    short:
      '内容にご納得いただいたタイミングでご契約。お支払いはLINEでお送りする決済リンク（Stripe Payment Links／カード決済）からお手続きください。',
    detail:
      'ご契約確定後、制作を開始します。決済はすべて送付するPayment Link上で完結し、銀行振込は受け付けていません。サイト内でカード番号を入力いただくページはありません。進捗は適宜ご共有します。',
  },
  {
    num: '4',
    title: '納品・公開チェックまで',
    short: 'ページが完成したらご確認。その後、公開チェックまで伴走します。',
    detail:
      'LPまたはホームページが完成したら、ご確認いただき問題なければ公開します。サイト公開やドメインに伴う月額についてはご案内のとおりです。',
  },
];

/** h1 用のメインキーワード含有テキスト（SEO 対策） */
export const HERO_H1_SEO =
  '大阪の個人店向けLP制作｜3万円から始める公式ランディングページ';
