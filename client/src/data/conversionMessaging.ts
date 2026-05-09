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

/** 「スコープ」見出しの親しみやすい日本語（About内の約束ボックスなど） */
export const SCOPE_INCLUDED_HEADING = 'ご依頼に含まれやすいこと';
export const SCOPE_EXCLUDED_HEADING = '込みにくいこと・ご相談になりやすいこと';

/** Landing ファーストビューの「約束」を一言にまとめた見出し */
export const HERO_VALUE_HOOK =
  '大阪の個人店のため・ご来店や予約まで迷わせない「公式の1枚LP」をつくります。';

/** ヒアリングフォーム送信直前までの環境インフォメーション（Instagram 依存の開示） */
export const HEARING_DM_PREREQUISITE =
  '入力の最後で回答がクリップボードへコピーされ、InstagramのDMが開きます。送信完了まで、アプリまたはWebからInstagramへログインできる環境があると進めやすいです。質問のみのご相談は、このページに進まずDMのみでも大丈夫です（アカウント未作成の場合はまずInstagramの準備などもご相談ください）。';

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

export type ApplicationFlowStep = {
  readonly num: string;
  readonly title: string;
  /** スクロール量を抑える要約（トップなど） */
  readonly short: string;
  /** 料金ページ・問合せのカード詳細など */
  readonly detail: string;
};

export const APPLICATION_FLOW_STEPS: ApplicationFlowStep[] = [
  {
    num: '1',
    title: 'サイトでヒアリング → DMで送信',
    short:
      '4ステップの入力のあとボタン一つでコピー。そのままInstagramのDMに貼り付けて送信すれば、その時点で正式なお申込みになります。',
    detail:
      'サイトの4ステップに入力し「コピーしてInstagramのDMへ」で全文がコピーされ、DM画面が開きます。入力欄に長押しで貼り付け、送信するとお申し込みとして受け付けます。',
  },
  {
    num: '2',
    title: 'DMでのご返信・お見立て',
    short:
      '原則2営業日以内を目安に、InstagramのDMで構成の方向感や質問にお答えし、見立てまでご案内します。',
    detail:
      '内容確認のうえ、構成の方向感やご質問にお答えし、お見立てまでをInstagramのDM中心でご案内します。ご返信の目安詳細についてはFAQ・お問い合わせにも記載があります。',
  },
  {
    num: '3',
    title: 'ご契約・お支払い・制作開始',
    short:
      '内容にご納得いただいたタイミングでご契約。お支払いはサイト内のお支払いページ（ログイン後、Stripeチェックアウト）からがスムーズです。振込ご希望などはご相談ください。',
    detail:
      'ご契約確定後、制作を開始します。クレジットカードでのお支払いは当サイトのアカウントログイン後にご案内した決済ページから行えます（銀行振込ご希望時はご相談ください）。進捗は適宜ご共有します。',
  },
  {
    num: '4',
    title: '納品・公開チェックまで',
    short: 'ページが完成したらご確認。その後、公開チェックまで伴走します。',
    detail:
      'LPまたはホームページが完成したら、ご確認いただき問題なければ公開します。サイト公開やドメインに伴う月額についてはご案内のとおりです。',
  },
];
