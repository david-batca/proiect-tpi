import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Series } from "./series";
import { relations } from "drizzle-orm";
import { Students } from "./students";

export const Groups = pgTable("groups", {
  id: serial().primaryKey(),
  name: varchar({ length: 10 }).notNull().unique(),
  year: integer().notNull(),
  seriesId: integer("series_id")
    .references(() => Series.id, { onDelete: "cascade" })
    .notNull(),
});

export const GroupsRelations = relations(Groups, ({ one, many }) => {
  return {
    series: one(Series, {
      fields: [Groups.seriesId],
      references: [Series.id],
    }),

    students: many(Students),
  };
});
