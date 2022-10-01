import { createRouter } from "../context";
import { prisma } from "../../../../server/utils/prisma";
import { z } from "zod";
import { PaginationWrapper } from "@/utils/types";
import { Card } from "@prisma/client";
const cardsSearchRouter = createRouter().query("cards-search", {
  input: z.object({
    search: z.string().optional(),
    limit: z.number(),
    page: z.number(),
  }),
  async resolve({ ctx, input }) {
    const { search, page, limit } = input;

    const [totalResults, cards] = await prisma.$transaction([
      prisma.card.count({
        where: {
          title: {
            contains: search,
          },
        },
      }),
      prisma.card.findMany({
        orderBy: [
          {
            title: 'desc',
          },
        ],
        take: limit,
        skip: page === 1 ? 0 : (page - 1) * limit,
        where: {
          title: {
            contains: search,
          },
        },
      }),
    ]);

    return {
      page,
      limit,
      totalResults: totalResults,
      results: cards,
    } as PaginationWrapper<Card>;
  },
});

export default cardsSearchRouter;
