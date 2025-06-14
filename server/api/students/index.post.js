import { generateDateString } from "~/server/utils";
import { db } from "~/server/db";
import { Students } from "~/server/db/schema";

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
    console.log(err);
  }
});
