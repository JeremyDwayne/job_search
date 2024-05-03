import { sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { int, text } from "drizzle-orm/sqlite-core";

export const job_applications = sqliteTable("job_applications", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }),
  company: text("company", { length: 256 }),
  job_description_url: text("job_description_url", { length: 256 }),
  salary_low: int("salary_low", { mode: "number" }),
  salary_high: int("salary_high", { mode: "number" }),
  userId: text("userId", { length: 256 }).notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export type InsertJobApplication = typeof job_applications.$inferInsert;
export type SelectJobApplication = typeof job_applications.$inferSelect;
