import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial().primaryKey(),
  name: text().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 12 }).notNull(),
});
