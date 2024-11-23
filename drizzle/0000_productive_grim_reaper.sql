CREATE TABLE IF NOT EXISTS "elections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"issue" text NOT NULL,
	"options" text[] NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"status" boolean
);
