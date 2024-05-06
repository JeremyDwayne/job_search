import {
  createTRPCRouter,
  protectedProcedure,
  rateLimitedProcedure,
} from "../trpc";
import { job_applications, JobApplicationSchema } from "~/server/db/schema";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import analyticsServerClient from "~/server/analytics";
import { redirect } from "next/navigation";

const jobApplicationRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.job_applications.findMany({
      where: and(
        eq(job_applications.userId, ctx.user.userId),
        job_applications.isActive,
      ),
      orderBy: (model, { desc }) => desc(model.updatedAt),
    });
  }),
  getById: protectedProcedure.input(z.number()).query(({ ctx, input }) => {
    return ctx.db.query.job_applications.findFirst({
      where: (model, { eq }) => eq(model.id, input),
    });
  }),
  create: rateLimitedProcedure
    .input(JobApplicationSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .insert(job_applications)
        .values({ userId: ctx.user.userId, ...input });

      redirect("/applications");
    }),
  archive: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(job_applications)
        .set({ isActive: false })
        .where(
          and(
            eq(job_applications.id, input.id),
            eq(job_applications.userId, ctx.user.userId),
          ),
        );

      analyticsServerClient.capture({
        distinctId: ctx.user.userId,
        event: "archive job application",
        properties: {
          jobApplicationId: input.id,
        },
      });

      redirect("/applications");
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(job_applications)
        .where(
          and(
            eq(job_applications.id, input.id),
            eq(job_applications.userId, ctx.user.userId),
          ),
        );

      analyticsServerClient.capture({
        distinctId: ctx.user.userId,
        event: "delete job application",
        properties: {
          jobApplicationId: input.id,
        },
      });

      redirect("/applications");
    }),
});

export default jobApplicationRouter;
