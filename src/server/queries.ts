"use server";
import "server-only";
import { db } from "./db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { job_applications } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";
import { type JobApplicationFormFields } from "~/app/applications/_components/JobApplicationForm";
import { ratelimit } from "./ratelimit";

export async function getMyJobApplications() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

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
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const fullUserData = await clerkClient.users.getUser(user.userId);
  if (fullUserData?.privateMetadata?.premium !== true)
    throw new Error("User does not have create permissions");

  const { success } = await ratelimit.limit(user.userId);
  if (!success) throw new Error("Rate Limited");

  await db.insert(job_applications).values({ userId: user.userId, ...data });

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

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "archive job application",
    properties: {
      jobApplicationId: id,
    },
  });

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

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete job application",
    properties: {
      jobApplicationId: id,
    },
  });

  redirect("/applications");
}
