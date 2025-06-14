import { eq, sql } from "drizzle-orm";
import { db } from "~/server/db";
import { Groups, Series, Students } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  const series = await db.query.Series.findMany({
    with: {
      groups: {
        id: true,
        name: true,
        year: true,
      },
    },
  });

  return series;
});
