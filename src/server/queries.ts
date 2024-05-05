"use server";
import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { InsertJobApplication, job_applications } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { JobApplicationFormFields } from "~/app/applications/_components/JobApplicationForm";

export async function getMyJobApplications() {
  const user = auth();
  if (!user.userId) return []; //throw new Error("Unauthorized");

  const applications = await db.query.job_applications.findMany({
    where: and(
      eq(job_applications.userId, user.userId),
      job_applications.isActive,
    ),
    orderBy: (model, { desc }) => desc(model.updatedAt),
  });

  return applications;
}

export async function getJobApplication(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const application = await db.query.job_applications.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!application) throw new Error("Application not found");
  if (user.userId !== application.userId) throw new Error("Unauthorized");

  return application;
}

export async function insertJobApplication(data: JobApplicationFormFields) {
  console.log("made it into queries", data);
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db.insert(job_applications).values({ userId: user.userId, ...data });

  revalidatePath("/applications");
  redirect("/applications");
}

export async function archiveJobApplication(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .update(job_applications)
    .set({ isActive: false })
    .where(
      and(
        eq(job_applications.id, id),
        eq(job_applications.userId, user.userId),
      ),
    );

  revalidatePath("/applications");
  redirect("/applications");
}

export async function deleteJobApplication(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(job_applications)
    .where(
      and(
        eq(job_applications.id, id),
        eq(job_applications.userId, user.userId),
      ),
    );

  revalidatePath("/applications");
  redirect("/applications");
}
