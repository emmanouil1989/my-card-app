import {prisma} from '../../../../server/utils/prisma'
import * as trpc from '@trpc/server';
import { cardDetailsRouter } from './cardDetailsRouter';
import { createRouter } from '../createRouter';


export const appRouter = createRouter()
  .query('card-search', {

   async resolve({ctx}) {
      console.log(ctx, 'ctx')       
       const response = await prisma.card.findMany();
      return {
       cards: response,
      };
    },
  }).merge('detail.', cardDetailsRouter);;
  
// export type definition of API


export type AppRouter = typeof appRouter;