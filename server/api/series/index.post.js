import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { Groups, Series } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  const { name, groupsPerYear } = await readBody(event);

  const exists = await db.query.Series.findFirst({
    where: eq(Series.name, name),
  });

  if (exists)
    throw createError({
      statusCode: 400,
      statusMessage: "Exista o serie cu acelasi nume",
    });

  const requestBody = { name };

  for (let year in groupsPerYear) {
    requestBody[`groupsYear${year}`] = groupsPerYear[year];
  }

  const newSeries = await db.insert(Series).values(requestBody).returning();

  for (let year in groupsPerYear) {
    for (let i = 1; i <= groupsPerYear[year]; i++) {
      await db.insert(Groups).values({
        name: `4${year}${i}${newSeries.at(0).name}`,
        year: year,
        seriesId: newSeries.at(0).id,
      });
    }
  }

  const newSeriesWithGroups = await db.query.Series.findFirst({
    where: eq(Series.id, newSeries.at(0).id),
    with: { groups: true },
  });

  return {
    status: "success",
    data: newSeriesWithGroups,
    message: "Seria a fost adaugata cu succes",
  };
});
