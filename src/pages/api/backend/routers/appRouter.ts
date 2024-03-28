import { router } from "../context";
import { cardDetailsRouter } from "./cardDetails";
import cardSearchRouter from "./cardSearch";

export const appRouter = router({
  cardSearch: cardSearchRouter,
  cardDetails: cardDetailsRouter,
});

export type AppRouter = typeof appRouter;
