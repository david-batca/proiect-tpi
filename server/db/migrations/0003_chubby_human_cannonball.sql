ALTER TABLE "students" ADD COLUMN "university_email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_university_email_unique" UNIQUE("university_email");