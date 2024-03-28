import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../backend/routers/appRouter";
import { withCors } from "@/utils/network";
import { createTRPCContext } from "../backend/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
