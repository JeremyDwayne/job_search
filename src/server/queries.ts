import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { InsertJobApplication, job_applications } from "./db/schema";
import { jobApplicationValidator } from "~/app/applications/_components/JobApplicationForm";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";

export async function getMyJobApplications() {
  const user = auth();
  if (!user.userId) return []; //throw new Error("Unauthorized");

  const applications = await db.query.job_applications.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.updatedAt),
  });

  return applications;
}

export async function getJobApplication(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const application = await db.query.job_applications.findFirst({
    where: (model, { eq }) => eq(model.id, id),
    orderBy: (model, { desc }) => desc(model.updatedAt),
  });

  if (!application) throw new Error("Application not found");
  if (user.userId !== application.userId) throw new Error("Unauthorized");

  return application;
}

/*
export async function insertJobApplication(data: FormData) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  try {
    const parse = formSchema.parse({
      title: data.get("title"),
      company: data.get("company"),
      job_description_url: data.get("job_description_url"),
      salary_low: data.get("salary_low"),
      salary_high: data.get("salary_high"),
    });

    await db.insert(job_applications).values({
      title: parse.title,
      company: parse.company,
      job_description_url: parse.job_description_url,
      salary_low: parse.salary_low,
      salary_high: parse.salary_high,
    });

    return revalidatePath("/applications/new");
  } catch (e) {
    const error = e as ZodError;

    if (!error.isEmpty) return error.format();
  }
}
*/
