import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const groups = pgTable("groups", {
  id: serial().primaryKey(),
  name: varchar({ length: 10 }).notNull().unique(),
});
