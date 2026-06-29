ALTER TABLE "payments" ALTER COLUMN "razorpay_payment_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "payments" ADD COLUMN "stripe_session_id" text;--> statement-breakpoint
ALTER TABLE "payments" ADD COLUMN "stripe_payment_intent_id" text;