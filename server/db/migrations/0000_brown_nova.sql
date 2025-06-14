CREATE TABLE "groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(10) NOT NULL,
	"year" integer NOT NULL,
	"series_id" integer NOT NULL,
	CONSTRAINT "groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "series" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(3) NOT NULL,
	"groupsYear1" integer NOT NULL,
	"groupsYear2" integer NOT NULL,
	"groupsYear3" integer NOT NULL,
	"groupsYear4" integer NOT NULL,
	CONSTRAINT "series_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(12) NOT NULL,
	"group_id" integer,
	CONSTRAINT "students_email_unique" UNIQUE("email"),
	CONSTRAINT "students_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
ALTER TABLE "groups" ADD CONSTRAINT "groups_series_id_series_id_fk" FOREIGN KEY ("series_id") REFERENCES "public"."series"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE set null ON UPDATE no action;