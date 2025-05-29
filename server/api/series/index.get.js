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

  // const groups = await db
  //   .select({
  //     id: Groups.id,
  //     name: Groups.name,
  //     year: Groups.year,
  //     series: {
  //       id: Series.id,
  //       name: Series.name,
  //     },
  //     studentsCount: sql`COUNT(${Students.id})`,
  //   })
  //   .from(Groups)
  //   .leftJoin(Students, eq(Students.groupId, Groups.id))
  //   .innerJoin(Series, eq(Series.id, Groups.seriesId))
  //   .groupBy(Students.id, Groups.id, Series.id)
  //   .orderBy(Groups.id);

  return series;
});
