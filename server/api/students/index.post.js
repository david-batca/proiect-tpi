import { generateDateString } from "~/server/utils";
import { db } from "~/server/db";
import { Students } from "~/server/db/schema";
import { z } from "zod";

const studentForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data introdusa nu este valabila",
  }),
  year: z.number().min(1).max(4),
  group: z.number().int(),
  email: z.string().email("Adresa de email nu este valida"),
  phone: z.string().regex(/^(\+4)?07\d{8}$/, {
    message: "Numarul de telefon nu este valid",
  }),
  universityEmail: z
    .string()
    .email("Adresa de email universitara nu este valida"),
});

export default defineEventHandler(async (event) => {
  try {
    const {
      firstName,
      lastName,
      birthDate,
      year,
      group,
      email,
      phone,
      universityEmail,
    } = await readBody(event);

    const parsed = studentForm.safeParse({
      firstName,
      lastName,
      birthDate,
      year,
      group,
      email,
      phone,
      universityEmail,
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

    await db.insert(Students).values({
      firstName: firstName,
      lastName: lastName,
      birthDate: generateDateString(birthDate),
      year: year,
      groupId: group,
      email: email,
      phone: phone,
      universityEmail: universityEmail,
    });
    return {
      status: "success",
      message: "Studentul a fost adaugat cu succes",
    };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: err.statusCode || 500,
        statusMessage: err.statusMessage || "Eroare interna de server",
        data: err.data || null,
      })
    );
  }
});
