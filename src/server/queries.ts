import "server-only";
import { db } from "./db";

export async function getJobApplications() {
  const applications = await db.query.job_applications.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return applications;
}
