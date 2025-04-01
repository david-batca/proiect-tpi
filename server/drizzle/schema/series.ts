import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const series = pgTable("series", {
  id: serial().primaryKey(),
  name: varchar({ length: 3 }).notNull().unique(),
});
