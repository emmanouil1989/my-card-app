import * as trpcNext from '@trpc/server/adapters/next';
import {appRouter} from '../backend/routers/appRouter';
import { withCors } from '@/utils/network';

export default withCors(trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
  }));
