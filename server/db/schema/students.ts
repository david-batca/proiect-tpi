import {
  date,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import { Groups } from "./groups";
import { relations } from "drizzle-orm";

export const Students = pgTable("students", {
  id: serial().primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  birthDate: date("birth_date").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 12 }).notNull().unique(),
  year: integer().notNull(),
  universityEmail: varchar("university_email", { length: 255 })
    .notNull()
    .unique(),
  groupId: integer("group_id")
    .references(() => Groups.id, {
      onDelete: "set null",
    })
    .notNull(),
});

export const StudentsRelations = relations(Students, ({ one, many }) => {
  return {
    group: one(Groups, {
      fields: [Students.groupId],
      references: [Groups.id],
    }),
  };
});
