import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const usePagination = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;
  const limit = Number(router.query.limit) || 10;

  const onPaginationChange = (page: number, limit: number) => {
    router.replace(`/?page=${page}&limit=${limit}`);
  };

  const resetPagination = () => {
    router.replace(`/?page=${1}&limit=${10}`);
  };

  return {
    page,
    limit,
    onPaginationChange,
    resetPagination,
  };
};
