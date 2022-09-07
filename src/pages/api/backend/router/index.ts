import {prisma} from '../../../../server/utils/prisma'
import * as trpc from '@trpc/server';
export const appRouter = trpc
  .router()
  .query('card-search', {

   async resolve() {
       
       const response = await prisma.card.findMany();
      return {
       cards: response,
      };
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;