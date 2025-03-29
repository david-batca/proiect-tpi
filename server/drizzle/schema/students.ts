import { integer, serial, text } from "drizzle-orm/pg-core";

export const students = {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
};
