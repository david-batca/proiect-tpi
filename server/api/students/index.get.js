import { db } from "~/server/drizzle";
import { Students } from "~/server/drizzle/schema/students";

export default defineEventHandler(async (event) => {
  return await db.select().from(Students);
});
