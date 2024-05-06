import { sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { int, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const job_applications = sqliteTable("job_applications", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }),
  company: text("company", { length: 256 }),
  jobDescriptionUrl: text("jobDescriptionUrl", { length: 256 }),
  salaryRangeLow: int("salaryRangeLow", { mode: "number" }),
  salaryRangeHigh: int("salaryRangeHigh", { mode: "number" }),
  userId: text("userId", { length: 256 }).notNull(),
  isActive: int("isActive", { mode: "boolean" }).default(true),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export const InsertJobApplication = createInsertSchema(job_applications);
export const SelectJobApplication = createSelectSchema(job_applications);

export const JobApplicationSchema = z.object({
  company: z.string().min(2),
  title: z.string().min(2),
  jobDescriptionUrl: z.string(),
  salaryRangeLow: z.coerce.number(),
  salaryRangeHigh: z.coerce.number(),
});
