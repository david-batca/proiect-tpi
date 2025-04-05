import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { Groups } from "./groups";

export const Students = pgTable("students", {
  id: serial().primaryKey(),
  name: text().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 12 }).notNull(),
  groupId: integer("group_id").references(() => Groups.id, {
    onDelete: "set null",
  }),
});
