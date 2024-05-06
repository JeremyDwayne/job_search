import { z } from "zod";
import { db } from "~/server/db";
import { privateProcedure, createTRPCRouter } from "../trpc";
import { jobApplicationFormSchema } from "~/app/applications/_components/jobApplicationForm";

const jobApplicationRouter = createTRPCRouter({
  // createJobApplication: protectedProcedure
  //   .input(jobApplicationValidator)
  //   .mutation(async ({ ctx, input }) => {
  //     const { success } = await ratelimit.limit(ctx.session.userId);
  //     if (!success)
  //       throw new TRPCError({
  //         code: "TOO_MANY_REQUESTS",
  //         message: "You've been posting too much. Chill a bit?",
  //       });
  //     const post = await ctx.prisma.post.create({
  //       data: {
  //         content: input.message,
  //         authorId: ctx.session.userId,
  //       },
  //     });
  //     return post;
  //   }),
});
