import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../pages/api/backend/router';

export const trpc = createReactQueryHooks<AppRouter>();