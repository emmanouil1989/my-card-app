
import { cardDetailsRouter } from './cardDetailsRouter';
import { createRouter } from "../context";
import cardSearchRouter from './cardSearchRouter';


export const appRouter = createRouter()
  .merge('detail.', cardDetailsRouter)
  .merge('search.', cardSearchRouter);
  
// export type definition of API


export type AppRouter = typeof appRouter;