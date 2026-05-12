/**
 * お問い合わせ〜初回連絡までの説明・CTAを全LPで一致させるための共通文面（公式LINE統一）
 */

export const LINE_CONTACT_FLOW_SHORT =
  'ご依頼・ご質問はすべて公式LINEからお送りください。友だち追加後、トークでお店の状況やご希望をお書きいただければ大丈夫です。';

export const LINE_CONTACT_FLOW_LINES = [
  '公式LINEを開き、友だち追加します。',
  'トーク画面にお店の名前・ご希望・質問などをそのまま送信してください。',
  'いただいた内容をもとに、こちらから順にお返事し、お見立てまでご案内します。',
] as const;

export const RESPONSE_SLA =
  '内容を確認のうえ、原則2営業日以内に公式LINEでご返信します（混雑時は前後することがあります）。';

export const SCOPE_INCLUDED_BULLETS = [
  'LP1枚の構成・文案のたたき・スマホ最適化・公開までの設定サポート。',
  'ご納品前の軽微な文言・表示の修正（大幅な作り直しは別途相談）。',
] as const;

export const SCOPE_EXCLUDED_BULLETS = [
  '検索順位やアクセス数の「数値保証」。',
  '広告運用の単独代行、撮影や動画制作のみなど、ウェブ公開が主目的でない単発請負。',
  '公開後の無制限な機能追加や全面リニューアル（規模に応じて都度お見積り）。',
] as const;

export const MONITOR_SLOT_NOTE =
  'モニター枠は先着・審査あり。枠外・通常依頼は制作費3万円〜。無料枠でもサイト公開に伴う月額費（ドメインなど）は別途実費の旨をご案内します。';

/** ヒーロー用モニター帯（複数行でレイアウトし、単語中途改行を避ける） */
export const MONITOR_BADGE_LINES = [
  'モニター先行・最大3店舗まで',
  'ご採用いただいた店舗は制作費無料',
  '（審査付き／先着）',
] as const;

export const PRIMARY_CTA_LINE = '公式LINEで相談';

export const PRIMARY_CTA_LINE_FULL = '公式LINEでお問い合わせ';

/** ボタン内の短い補足（視覚用） */
export const PRIMARY_CTA_LINE_SUBLINE = '友だち追加';

export const SCOPE_INCLUDED_HEADING = 'ご依頼に含まれやすいこと';
export const SCOPE_EXCLUDED_HEADING = '標準には含まれないこと（ご相談・別見積り）';

/** Landing ファーストビューの「約束」を一言にまとめた見出し */
export const HERO_VALUE_HOOK =
  '大阪の個人店向けに、公式の受け皿となる一枚LPをつくります（多くの店ではまずこれで十分です）。';

/** ヒーロー直下リード（価格・手段を一段に収め、スクロール前の読了負荷を下げる） */
export const HERO_PRIMARY_LEAD =
  'メニュー・料金・アクセス・予約・LINEまでを一枚にそろえ、迷わず次の行動へ進める読み順にします。個人店の公式ページは、この一枚からで十分なケースがほとんどです。AIが構成と文案の素案を出し、担当がCTAまで整えます。';

/** ヒーロー用の料金ハイライト（数値のみ短文） */
export const HERO_PRICE_TEASER = 'LP制作費は買い切り3万円〜／公開・ドメインは別途・月3,000円〜。';

/** サービスセクション：LP必要性のナラティブ見出し */
export const SERVICES_LP_STORY_TITLE = 'なぜいま、個人店は「公式の一枚LP」から始めるべきか';

/** サービスセクション：導入のリード */
export const SERVICES_LP_STORY_LEAD =
  'ストーリーズやフィードだけだと、料金・アクセス・予約までの情報が分散し、「決める直前」のお客様が離れやすいです。共通のリンクをひとつ置くだけで説明の手間も減り、初めての方にも伝わる順で見せられるので、インバウンドの質が上がりやすくなります。Locamoでは複数ページのサイト制作はお受けしていません。その分、一枚に集中して勝てる状態をつくります。';

/** サービスセクション：箇条書きトークポイント */
export const SERVICES_LP_STORY_BULLETS = [
  '検索・地図・紹介リンクから開いたとき、いちばん知りたい順に読める一枚にまとめる',
  'LINE・電話・予約ボタンの位置まで「読み終わったら何をすべきか」がぶれないようにする',
  '「うちはここを見て」とリンクを渡せる安心感があると、自分から売りにくい店主ほど心理的ハードルが下がります',
] as const;

/** サービスセクション：他社（タイプ別）比較表タイトル */
export const SERVICES_COMPARISON_SECTION_TITLE =
  '他のつくり方と何がちがう？（名前は出さず、よくあるパターンで整理）';

/** お問い合わせ先頭の受付説明 */
export const CONTACT_INTAKE_SUMMARY =
  '公式LINEでご連絡いただいたメッセージをもとに、制作のご依頼またはご質問として順にお取り扱いします。';

/** LINE が不安な方向けの一文（決済・ツール名は書かない） */
export const LINE_CHANNEL_FLEX_NOTE =
  'LINEがはじめての場合も、トーク画面に指示どおり入力いただければ大丈夫です。詳細なご質問はお問い合わせセクションのFAQもご覧ください。';

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

/** ヒーロー等の短文ラベル — 詳細タイムラインは料金の「制作の流れ」へ集約 */
export const APPLICATION_FLOW_VISUAL_LABELS = [
  '公式LINE',
  'ご返信',
  'ご契約・制作',
  '公開',
] as const;

export type ApplicationFlowStep = {
  readonly num: string;
  readonly title: string;
  readonly short: string;
  readonly detail: string;
};

export const APPLICATION_FLOW_STEPS: ApplicationFlowStep[] = [
  {
    num: '1',
    title: '公式LINEでご連絡',
    short:
      '友だち追加後、トークにお店の状況・ご希望・質問を送信してください。この時点でご依頼のお預かり、または質問へのご案内を開始します。',
    detail:
      '公式LINEのトークにお店名・業種・ご希望やお困りごとを書いていただければ結構です。写真やリンクがあるとよりスムーズです。',
  },
  {
    num: '2',
    title: '公式LINEでのご返信・お見立て',
    short:
      '原則2営業日以内を目安に、公式LINEで構成の方向感や確認事項にお答えし、お見立てまでご案内します。',
    detail:
      '内容を確認のうえ、構成の方向感やご質問にお答えし、お見立てまで公式LINEでご連絡します。',
  },
  {
    num: '3',
    title: 'ご契約・制作開始',
    short:
      '内容にご納得いただいたタイミングでご契約となり、その後すぐに制作に着手します。手続きやご質問は公式LINEでサポートします。',
    detail:
      'ご契約の確認がとれたら制作を開始します。進捗や確認事項は公式LINEで共有します。',
  },
  {
    num: '4',
    title: '納品・公開チェックまで',
    short: 'ページが完成したらご確認。その後、公開チェックまで伴走します。',
    detail:
      'LPが完成したらご確認いただき、問題なければ公開まで伴走します。サイト公開やドメインに伴う月額についてはご案内のとおりです。',
  },
];

/** h1 用のメインキーワード含有テキスト（SEO 対策） */
export const HERO_H1_SEO =
  '大阪の個人店向けLP制作｜制作費3万円〜の公式ランディングページ';
