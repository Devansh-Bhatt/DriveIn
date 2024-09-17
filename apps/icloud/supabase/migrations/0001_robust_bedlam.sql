CREATE TABLE IF NOT EXISTS "passkey" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"credentialId" text NOT NULL,
	"publicKey" text NOT NULL,
	"counter" integer DEFAULT 0,
	"createdAt" integer DEFAULT 1726584155305
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "passkey" ADD CONSTRAINT "passkey_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
