ALTER TABLE "groups" ADD COLUMN "series_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "series" ADD COLUMN "groupsYear1" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "series" ADD COLUMN "groupsYear2" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "series" ADD COLUMN "groupsYear3" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "series" ADD COLUMN "groupsYear4" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "group_id" integer;--> statement-breakpoint
ALTER TABLE "groups" ADD CONSTRAINT "groups_series_id_series_id_fk" FOREIGN KEY ("series_id") REFERENCES "public"."series"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE set null ON UPDATE no action;