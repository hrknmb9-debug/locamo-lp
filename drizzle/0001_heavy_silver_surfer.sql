CREATE TABLE `stripe_customers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`stripe_customer_id` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `stripe_customers_id` PRIMARY KEY(`id`),
	CONSTRAINT `stripe_customers_user_id_unique` UNIQUE(`user_id`),
	CONSTRAINT `stripe_customers_stripe_customer_id_unique` UNIQUE(`stripe_customer_id`)
);
--> statement-breakpoint
CREATE TABLE `stripe_payments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`stripe_payment_intent_id` varchar(255) NOT NULL,
	`stripe_price_id` varchar(255) NOT NULL,
	`amount_cents` bigint NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'JPY',
	`status` enum('succeeded','processing','requires_payment_method','canceled') NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `stripe_payments_id` PRIMARY KEY(`id`),
	CONSTRAINT `stripe_payments_stripe_payment_intent_id_unique` UNIQUE(`stripe_payment_intent_id`)
);
--> statement-breakpoint
CREATE TABLE `stripe_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`stripe_subscription_id` varchar(255) NOT NULL,
	`stripe_price_id` varchar(255) NOT NULL,
	`status` enum('active','past_due','canceled','paused') NOT NULL,
	`current_period_start` timestamp,
	`current_period_end` timestamp,
	`cancel_at_period_end` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `stripe_subscriptions_id` PRIMARY KEY(`id`),
	CONSTRAINT `stripe_subscriptions_stripe_subscription_id_unique` UNIQUE(`stripe_subscription_id`)
);
