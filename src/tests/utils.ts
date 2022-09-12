import {
    RefetchOptions,
    RefetchQueryFilters,
    QueryObserverResult,
    QueryObserverSuccessResult,
  } from "react-query";
  import { TRPCClientErrorLike } from "@trpc/client";
  import { DefaultErrorShape } from "@trpc/server";
  import { Procedure } from "@trpc/server/dist/declarations/src/internals/procedure";
  import { Router } from "@trpc/server/dist/declarations/src/router";
import { Card } from "@prisma/client";


export const getReactQuerySuccessMockAnswer = <Data>(data: Data) : QueryObserverSuccessResult =>{

    return {
        data: data,
        isLoading: false,
        error: null,
        isError: false,
        isIdle: false,
        isLoadingError: false,
        isRefetchError: false,
        isSuccess: true,
        status: "success",
        dataUpdatedAt: 0,
        errorUpdatedAt: 0,
        failureCount: 0,
        errorUpdateCount: 0,
        isFetched: true,
        isFetchedAfterMount: false,
        isFetching: false,
        isPlaceholderData: false,
        isPreviousData: false,
        isRefetching: false,
        isStale: false,
        refetch: function <TPageData>(
          options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
        ): Promise<
          QueryObserverResult<
            unknown,
            TRPCClientErrorLike<
              Router<
                unknown,
                unknown,
                {},
                Record<
                  "card-search",
                  Procedure<
                    unknown,
                    unknown,
                    {},
                    undefined,
                    undefined,
                    { cards: Card[] },
                    unknown,
                    { cards: Card[] }
                  >
                >,
                {},
                {},
                DefaultErrorShape
              >
            >
          >
        > {
          throw new Error("Function not implemented.");
        },
        remove: function (): void {
          throw new Error("Function not implemented.");
        },
      }

}