import { db } from "~/server/db";
import { Students } from "~/server/db/schema/students";

export default defineEventHandler(async (event) => {
  return await db.query.Students.findMany({
    with: {
      group: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });
});
