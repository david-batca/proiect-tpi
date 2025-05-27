import { db } from "~/server/db";
import { Series } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  //   const body = await readBody(event);

  //   await db.insert(Series).values({});
  return true;
  //   return body;
  //   return JSON.parse(body);
});
