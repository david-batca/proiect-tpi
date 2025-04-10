import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Groups } from "./groups";

export const Series = pgTable("series", {
  id: serial().primaryKey(),
  name: varchar({ length: 3 }).notNull().unique(),
  groupsYear1: integer().notNull(),
  groupsYear2: integer().notNull(),
  groupsYear3: integer().notNull(),
  groupsYear4: integer().notNull(),
});

export const SeriesRelations = relations(Series, ({ one, many }) => {
  return {
    groups: many(Groups),
  };
});
