export const HEARING_FIELDS = [
  { id: 'shop', label: '店舗名・屋号（必須）', placeholder: '例：カフェ ○○', rows: 2 },
  { id: 'name', label: 'ご担当者氏名（必須）', placeholder: 'フルネームまたは担当のお名前', rows: 2 },
  {
    id: 'address',
    label: '住所（必須）',
    placeholder: '例：大阪府〇〇市〇〇区〜番地まで（マンション名・号室がある場合も記載）',
    rows: 3,
  },
  {
    id: 'phone',
    label: '電話番号（必須）',
    placeholder: '例：090-1234-5678（日中ご連絡がつく番号）',
    rows: 2,
  },
  { id: 'industry', label: '業種・取り扱いの概要', placeholder: '例：飲食（カフェ）／美容室 など', rows: 3 },
  { id: 'instagram', label: 'SNSアカウント・URL（任意）', placeholder: 'Instagram/X など、あれば', rows: 2 },
  { id: 'web', label: '現在のWeb・予約ページ等（あればURL）', placeholder: 'なければ「なし」と記載 OK', rows: 2 },
  { id: 'pain', label: 'いま困っていること・課題', placeholder: '集客、更新の手間、情報の散在 など', rows: 4 },
  { id: 'goal', label: 'LPで実現したいこと', placeholder: '例：予約増、メニュー掲載、問い合わせ一本化…', rows: 3 },
  {
    id: 'design',
    label: 'デザイン・見た目のご希望（任意）',
    placeholder:
      '好きな雰囲気（ポップ／高級感／北欧／ナチュラルなど）、写真多め／イラスト比率、ブランドカラーや避けたい色、参考にしたいサイトがあればURL など（未定でも「おまかせ」でOK）',
    rows: 5,
  },
  { id: 'deadline', label: '希望の納期・公開時期の目安', placeholder: '例：◯月中 / 急ぎではない など', rows: 2 },
  { id: 'budget', label: 'ご予算の目安（任意）', placeholder: '例：制作費◯万円前後 など', rows: 2 },
  { id: 'other', label: 'その他・ご質問', placeholder: '追加で伝えたいことがあれば', rows: 3 },
] as const;
