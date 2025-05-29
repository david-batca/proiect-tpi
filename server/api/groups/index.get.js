import { eq, sql } from "drizzle-orm";
import { db } from "~/server/db";
import { Groups, Series, Students } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const { id } = getQuery(event);

    if (id) {
      const result = await db
        .select()
        .from(Groups)
        .where(eq(Groups.id, Number(id)));

      if (!result.length)
        throw createError({
          statusCode: 404,
          statusMessage: "Nu a fost gasit niciun rezultat",
        });

      return result[0];
    }
    return await db
      .select({
        id: Groups.id,
        name: Groups.name,
        year: Groups.year,
        series: {
          id: Series.id,
          name: Series.name,
        },
        studentsCount: sql`COUNT(${Students.id})`,
      })
      .from(Groups)
      .leftJoin(Students, eq(Students.groupId, Groups.id))
      .innerJoin(Series, eq(Series.id, Groups.seriesId))
      .groupBy(Students.id, Groups.id, Series.id)
      .orderBy(Groups.id);
  } catch (err) {
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
    });
  }
});
