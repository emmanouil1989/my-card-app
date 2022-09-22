import { createRouter } from "../context";
import { prisma } from "../../../../server/utils/prisma";
import { z } from "zod";
const cardsSearchRouter = createRouter().query("cards-search", {
  input: z.object({ search: z.string().optional() }),
  async resolve({ ctx, input }) {
    const { search } = input;
    const response = await prisma.card.findMany({
      where: {
        title: {
          contains: search,
        },
      },
    });
    return {
      cards: response,
    };
  },
});

export default cardsSearchRouter;
