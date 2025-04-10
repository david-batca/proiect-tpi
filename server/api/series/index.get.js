import { db } from "~/server/db";

export default defineEventHandler(async (event) => {
  return await db.query.Series.findMany({
    with: {
      groups: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });
});
