import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Series = pgTable("series", {
  id: serial().primaryKey(),
  name: varchar({ length: 3 }).notNull().unique(),
  groupsYear1: integer().notNull(),
  groupsYear2: integer().notNull(),
  groupsYear3: integer().notNull(),
  groupsYear4: integer().notNull(),
});
