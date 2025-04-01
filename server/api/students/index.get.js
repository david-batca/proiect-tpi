import { db } from "~/server/drizzle";
import { students } from "~/server/drizzle/schema/students";

export default defineEventHandler(async (event) => {
  return await db.select().from(students);
});
