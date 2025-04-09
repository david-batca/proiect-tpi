import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Series } from "./series";

export const Groups = pgTable("groups", {
  id: serial().primaryKey(),
  name: varchar({ length: 10 }).notNull().unique(),
  seriesId: integer("series_id")
    .references(() => Series.id, { onDelete: "cascade" })
    .notNull(),
});
