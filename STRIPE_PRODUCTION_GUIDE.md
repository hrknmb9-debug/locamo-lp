# Locamo LP - Stripe 本番環境切り替え手順

## 概要

このドキュメントは、Stripe テスト環境（サンドボックス）から本番環境への切り替え手順を説明しています。

---

## 現在の状態

### テスト環境（サンドボックス）

現在、Locamo LP は Stripe テスト環境で動作しています：

- **テスト用 Secret Key**: `sk_test_*`
- **テスト用 Publishable Key**: `pk_test_*`
- **Webhook Secret**: `whsec_test_*`

テスト環境では以下のテストカードで決済をシミュレートできます：

| カード | 用途 |
|--------|------|
| `4242 4242 4242 4242` | 成功 |
| `4000 0000 0000 0002` | 拒否 |
| `4000 0025 0000 3155` | 3D Secure |

---

## ステップ 1: Stripe サンドボックスの請求権を取得

1. 以下のリンクにアクセス：
   ```
   https://dashboard.stripe.com/claim_sandbox/YWNjdF8xVFNCV1E1TkRqcUlDNmFwLDE3Nzg4NTA0NjEv100EQm5rs2M
   ```

2. Stripe アカウントにログイン（または新規作成）

3. 「Claim this sandbox」をクリック

4. 確認画面で「Confirm」をクリック

これで、このサンドボックスの完全な管理権が得られます。

---

## ステップ 2: Stripe ダッシュボードで本番環境を設定

### 2.1 本番環境の有効化

1. Stripe ダッシュボード（https://dashboard.stripe.com）にログイン

2. 左上の「テストモード」トグルをオフにして本番モードに切り替え

3. 「設定」→「API キー」に移動

### 2.2 本番環境の API キーを取得

1. **Secret Key（秘密鍵）**:
   - 「Secret key」の右側にある「Reveal」をクリック
   - 表示されたキーをコピー（`sk_live_*` で始まる）

2. **Publishable Key（公開鍵）**:
   - 「Publishable key」をコピー（`pk_live_*` で始まる）

### 2.3 Webhook Signing Secret を取得

1. 「設定」→「Webhooks」に移動

2. 本番環境のエンドポイントを確認：
   ```
   https://locamolp-tlkk59sz.manus.space/api/stripe/webhook
   ```

3. Webhook Signing Secret をコピー（`whsec_live_*` で始まる）

---

## ステップ 3: Manus Management UI で本番キーを設定

### 3.1 Management UI にアクセス

1. Manus プロジェクト管理画面を開く

2. 右上の「Settings」パネルを開く

3. 「Secrets」タブを選択

### 3.2 環境変数を更新

以下の 3 つの環境変数を本番キーに更新：

| 環境変数 | テスト値 | 本番値 |
|---------|---------|--------|
| `STRIPE_SECRET_KEY` | `sk_test_*` | `sk_live_*` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_*` | `pk_live_*` |
| `STRIPE_WEBHOOK_SECRET` | `whsec_test_*` | `whsec_live_*` |

**更新手順:**

1. 各環境変数をクリック

2. テスト値を本番値に置き換え

3. 「Save」をクリック

4. 確認ダイアログで「Confirm」をクリック

---

## ステップ 4: デプロイ

### 4.1 チェックポイントを作成

```bash
# ローカルで実行（または Management UI で実行）
webdev_save_checkpoint --description "Stripe 本番環境キーに更新"
```

### 4.2 本番環境にデプロイ

1. Management UI の「Publish」ボタンをクリック

2. デプロイが完了するまで待機（通常 2-5 分）

3. デプロイ完了後、サイトが本番 Stripe キーで動作開始

---

## ステップ 5: 本番環境の検証

### 5.1 テスト決済を実行

1. デプロイ完了後、Locamo LP にアクセス

2. 料金ページで「支払う」ボタンをクリック

3. 本番環境では **実際のカードが必要** です：
   - テストカードは使用できません
   - 小額（¥100 程度）でテスト決済を実行することを推奨

### 5.2 Stripe ダッシュボードで確認

1. Stripe ダッシュボード（本番モード）にアクセス

2. 「Payments」→「Charges」で決済履歴を確認

3. 「Customers」で顧客情報を確認

### 5.3 Webhook の動作確認

1. 「設定」→「Webhooks」に移動

2. エンドポイントをクリック

3. 「Recent events」で最近のイベントを確認

4. 各イベントの「Response」が `200` であることを確認

---

## トラブルシューティング

### 問題: 決済ボタンをクリックしても何も起こらない

**原因**: API キーが正しく設定されていない可能性

**解決策**:
1. Management UI の Secrets を確認
2. 環境変数が正しく保存されているか確認
3. デプロイが完了しているか確認
4. ブラウザのコンソール（F12）でエラーメッセージを確認

### 問題: 「Invalid API Key」エラーが表示される

**原因**: テストキーと本番キーが混在している可能性

**解決策**:
1. すべての環境変数が同じ環境（テストまたは本番）のキーであることを確認
2. テストキーは `sk_test_` / `pk_test_` で始まる
3. 本番キーは `sk_live_` / `pk_live_` で始まる

### 問題: Webhook イベントが受け取れない

**原因**: Webhook Signing Secret が正しくない可能性

**解決策**:
1. Stripe ダッシュボードで Webhook Signing Secret をコピー
2. Management UI で `STRIPE_WEBHOOK_SECRET` を更新
3. デプロイを再実行

### 問題: 本番環境で決済が失敗する

**原因**: Stripe アカウントが本番環境に対応していない可能性

**解決策**:
1. Stripe ダッシュボードで本番環境が有効になっているか確認
2. 「設定」→「ビジネス情報」で事業情報が登録されているか確認
3. 必要に応じて KYC（本人確認）を完了

---

## セキュリティに関する注意事項

### ⚠️ 重要

- **Secret Key は絶対に公開しないでください**
  - Git リポジトリにコミットしない
  - ログに出力しない
  - 他人と共有しない

- **本番環境では必ず HTTPS を使用してください**
  - Locamo LP は自動的に HTTPS で提供されます

- **Webhook Signing Secret を安全に保管してください**
  - テスト環境と本番環境のシークレットを混同しない

---

## 参考資料

- Stripe ダッシュボード: https://dashboard.stripe.com
- Stripe API ドキュメント: https://stripe.com/docs/api
- Stripe テスト環境ガイド: https://stripe.com/docs/testing
- Stripe 本番環境ガイド: https://stripe.com/docs/keys

---

## よくある質問（FAQ）

### Q: テスト環境から本番環境に切り替えた後、テスト決済はできますか？

A: いいえ、本番環境ではテストカードは使用できません。実際のカード情報が必要です。

### Q: 本番環境で誤った決済をしてしまった場合、どうすればいいですか？

A: Stripe ダッシュボードから返金（Refund）を実行できます。詳細は Stripe サポートにお問い合わせください。

### Q: 複数の環境（開発・ステージング・本番）を運用する場合、どうすればいいですか？

A: 各環境に対応する Stripe アカウントを作成し、環境ごとに異なる API キーを設定してください。

### Q: Stripe アカウントが複数ある場合、どうすればいいですか？

A: 本番環境用の Stripe アカウントを選択し、そのアカウントの本番キーを設定してください。

---

## 次のステップ

本番環境への切り替えが完了したら、以下の項目を確認してください：

- [ ] 本番環境で決済が正常に動作する
- [ ] Webhook イベントが正常に受け取られている
- [ ] 支払い履歴ページが正常に表示される
- [ ] サブスクリプション管理が正常に動作する
- [ ] エラーハンドリングが正常に機能している

---

**最終確認**: すべての項目が完了したら、Locamo LP は本番環境での運用準備が完了です。🎉
