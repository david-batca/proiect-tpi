import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/server/db";
import { Groups, Series } from "~/server/db/schema";

const seriesForm = z.object({
  name: z.string(),
  groupsPerYear: z.object({
    1: z
      .number()
      .min(1, "Numarul minim de grupe din fiecare an este 1")
      .max(5, "Numarul maxim de grupe din fiecare an este 5"),
    2: z
      .number()
      .min(1, "Numarul minim de grupe din fiecare an este 1")
      .max(5, "Numarul maxim de grupe din fiecare an este 5"),
    3: z
      .number()
      .min(1, "Numarul minim de grupe din fiecare an este 1")
      .max(5, "Numarul maxim de grupe din fiecare an este 5"),
    4: z
      .number()
      .min(1, "Numarul minim de grupe din fiecare an este 1")
      .max(5, "Numarul maxim de grupe din fiecare an este 5"),
  }),
});

export default defineEventHandler(async (event) => {
  const { name, groupsPerYear } = await readBody(event);

  const parsed = seriesForm.safeParse({
    name,
    groupsPerYear,
  });

  if (!parsed.success) {
    const firstError = Object.values(
      parsed.error.flatten().fieldErrors
    )[0]?.[0];

    throw createError({
      statusCode: 422,
      statusMessage: firstError || "Toate campurile sunt obligatorii",
    });
  }

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
