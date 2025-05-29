ALTER TABLE "students" RENAME COLUMN "name" TO "first_name";--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "last_name" text NOT NULL;