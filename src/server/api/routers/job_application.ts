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
});
