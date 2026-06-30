CREATE TYPE "public"."table_status" AS ENUM('available', 'booked', 'occupied');--> statement-breakpoint
CREATE TYPE "public"."table_type" AS ENUM('single', 'couple', 'family');--> statement-breakpoint
CREATE TABLE "table_bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"table_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"booking_date" timestamp NOT NULL,
	"booking_time" text NOT NULL,
	"party_size" integer NOT NULL,
	"status" text DEFAULT 'confirmed' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tables" (
	"id" serial PRIMARY KEY NOT NULL,
	"table_number" integer NOT NULL,
	"type" "table_type" NOT NULL,
	"capacity" integer NOT NULL,
	"status" "table_status" DEFAULT 'available' NOT NULL,
	CONSTRAINT "tables_table_number_unique" UNIQUE("table_number")
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "clerk_id" text;--> statement-breakpoint
ALTER TABLE "table_bookings" ADD CONSTRAINT "table_bookings_table_id_tables_id_fk" FOREIGN KEY ("table_id") REFERENCES "public"."tables"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "table_bookings" ADD CONSTRAINT "table_bookings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id");