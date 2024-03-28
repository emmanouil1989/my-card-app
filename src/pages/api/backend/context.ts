// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "@/server/utils/prisma";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
export interface CreateInnerContextOptions
  extends Partial<CreateNextContextOptions> {}

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createSSGHelpers` where we don't have `req`/`res`
 *
 * @link https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createInnerTRPCContext(opts?: CreateInnerContextOptions) {
  return {
    prisma,
    ...opts,
  };
}

/**
 * Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
 *
 * @link https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export const createTRPCContext = async (opts?: CreateNextContextOptions) => {
  const innerContext = await createInnerTRPCContext({
    req: opts?.req,
  });

  return {
    ...innerContext,
    req: opts?.req,
  };
};
const t = initTRPC.context<typeof createInnerTRPCContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
