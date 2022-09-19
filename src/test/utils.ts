import {
    QueryObserverLoadingResult,
    QueryObserverSuccessResult,
  } from "react-query";


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
        refetch: jest.fn(),
        remove: jest.fn(),
      }

}

export const getReactQueryIsLoading = <TData, TError> () : QueryObserverLoadingResult<TData, TError> =>{

    return {
      data: undefined,
      error: null,
      isError: false as false,
      isIdle: false as false,
      isLoading: true as true,
      isLoadingError: false as false,
      isRefetchError: false as false,
      isSuccess: false as false,
      status: 'loading',
        dataUpdatedAt: 0,
        errorUpdatedAt: 0,
        failureCount: 0,
        errorUpdateCount: 0,
        isFetched: true,
        isFetchedAfterMount: false ,
        isFetching: false,
        isPlaceholderData: false,
        isPreviousData: false,
        isRefetching: false,
        isStale: false,
        refetch: jest.fn(),
        remove: jest.fn()
      }

}