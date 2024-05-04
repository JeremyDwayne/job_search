import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

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
