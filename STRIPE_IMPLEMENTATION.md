# Locamo LP - Stripe 決済機能実装計画

## 概要

Locamo LP に Stripe 決済機能を統合します。以下の決済フローをサポート：

1. **一括払い**: LP制作費（3万円～）
2. **サブスクリプション**: サイト公開・ドメイン費用（月3,000円～）

## データベーススキーマ設計

### 必須テーブル

#### `stripe_customers` テーブル
- `id` (PK): 自動採番
- `user_id` (FK): users.id
- `stripe_customer_id`: Stripe Customer ID（一意）
- `created_at`: 作成日時
- `updated_at`: 更新日時

#### `stripe_subscriptions` テーブル
- `id` (PK): 自動採番
- `user_id` (FK): users.id
- `stripe_subscription_id`: Stripe Subscription ID（一意）
- `stripe_price_id`: Stripe Price ID（月額プラン）
- `status`: 'active' | 'past_due' | 'canceled' | 'paused'
- `current_period_start`: 現在の課金期間開始
- `current_period_end`: 現在の課金期間終了
- `cancel_at_period_end`: 期間終了時にキャンセル予定か
- `created_at`: 作成日時
- `updated_at`: 更新日時

#### `stripe_payments` テーブル
- `id` (PK): 自動採番
- `user_id` (FK): users.id
- `stripe_payment_intent_id`: Stripe PaymentIntent ID（一意）
- `stripe_price_id`: Stripe Price ID（一括払いプラン）
- `amount_cents`: 金額（セント単位）
- `currency`: 通貨（JPY）
- `status`: 'succeeded' | 'processing' | 'requires_payment_method' | 'canceled'
- `created_at`: 作成日時
- `updated_at`: 更新日時

## 商品・価格定義

### 一括払い（ワンタイム）

| プラン | 金額 | Stripe Price ID |
|--------|------|-----------------|
| LP制作 | ¥30,000 | `price_lp_basic` |
| ホームページ制作 | ¥50,000 | `price_hp_standard` |
| 複数ページ制作 | ¥80,000 | `price_hp_premium` |

### サブスクリプション（月額）

| プラン | 金額 | Stripe Price ID |
|--------|------|-----------------|
| 基本プラン | ¥3,000/月 | `price_sub_basic` |
| スタンダード | ¥5,000/月 | `price_sub_standard` |
| プレミアム | ¥10,000/月 | `price_sub_premium` |

## バックエンド実装

### 1. tRPC ルーター（`server/routers/payment.ts`）

```ts
// 一括払いチェックアウト
payment.createCheckout: protectedProcedure
  .input(z.object({ priceId: z.string() }))
  .mutation(async ({ ctx, input }) => {
    // Checkout Session 作成
    // 成功時: checkoutUrl を返す
  })

// サブスクリプションチェックアウト
payment.createSubscriptionCheckout: protectedProcedure
  .input(z.object({ priceId: z.string() }))
  .mutation(async ({ ctx, input }) => {
    // Subscription Checkout Session 作成
  })

// 支払い履歴取得
payment.getPayments: protectedProcedure
  .query(async ({ ctx }) => {
    // ユーザーの支払い履歴を返す
  })

// サブスクリプション情報取得
payment.getSubscription: protectedProcedure
  .query(async ({ ctx }) => {
    // ユーザーのアクティブなサブスクリプションを返す
  })

// サブスクリプションキャンセル
payment.cancelSubscription: protectedProcedure
  .mutation(async ({ ctx }) => {
    // サブスクリプションをキャンセル
  })
```

### 2. Webhook ハンドラー（`server/_core/stripeWebhook.ts`）

```ts
// イベント処理
- checkout.session.completed: 支払い完了 → DB に記録
- payment_intent.succeeded: 一括払い成功
- customer.subscription.created: サブスクリプション作成
- customer.subscription.updated: サブスクリプション更新
- customer.subscription.deleted: サブスクリプション削除
- invoice.paid: 請求書支払い完了
```

## フロントエンド実装

### 1. 決済ページ（`client/src/pages/Payment.tsx`）

- 一括払いプラン表示
- サブスクリプションプラン表示
- 「今すぐ支払う」ボタン

### 2. 支払い履歴ページ（`client/src/pages/PaymentHistory.tsx`）

- 過去の支払い一覧
- サブスクリプション管理（キャンセル機能）

## テスト計画

### テストカード
- 成功: `4242 4242 4242 4242`
- 拒否: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

### テストシナリオ
1. 一括払い成功フロー
2. サブスクリプション作成フロー
3. サブスクリプションキャンセルフロー
4. Webhook イベント処理

## 実装順序

1. ✅ web-db-user へのアップグレード
2. ✅ Stripe 統合準備
3. ⏳ データベーススキーマ設計・実装
4. ⏳ バックエンド実装（tRPC ルーター・Webhook）
5. ⏳ フロントエンド実装（決済ページ・支払い履歴）
6. ⏳ テスト・最適化

## 環境変数

自動設定済み：
- `STRIPE_SECRET_KEY`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`

## 参考資料

- Stripe API ドキュメント: https://stripe.com/docs/api
- Stripe Checkout: https://stripe.com/docs/payments/checkout
- Stripe Webhooks: https://stripe.com/docs/webhooks
