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
