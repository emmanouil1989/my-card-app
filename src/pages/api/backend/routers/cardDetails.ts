import { prisma } from "@/server/utils/prisma";
import * as trpc from "@trpc/server";
import { z } from "zod";
import { router, publicProcedure } from "../context";

export const cardDetailsRouter = router({
  cardDetails: publicProcedure
    .input(
      z.object({
        cardId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const response = await prisma.card.findUnique({
        where: {
          productId: input.cardId,
        },
      });
      if (!response) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "Card not found",
        });
      }
      return {
        card: response,
      };
    }),
});
