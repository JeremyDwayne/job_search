import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const jobApplicationRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({ jobApplicationId: z.string() }))
    .query(({ ctx }) => {
      return ctx.db.jobApplication.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          userId: ctx.session.user.id,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        jobApplication: z.object({ url: z.string(), companyId: z.string() }),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.jobApplication.create({
        data: {
          url: input.jobApplication.url,
          companyId: input.jobApplication.companyId,
          userId: ctx.session.user.id,
        },
      });
    }),
});
