import { useState } from "react";

export const usePagination = (initialPage?: number, initialLimit?: number) => {
  const [page, setPage] = useState<number>(initialPage || 1);
  const [limit, setLimit] = useState<number>(initialLimit || 10);

  const onPaginationChange = (page: number, limit: number) => {
    setPage(page);
    setLimit(limit);
  };

  const resetPagination = () => {
    setPage(initialPage || 1);
    setLimit(initialLimit || 10);
  };
  return {
    page,
    limit,
    onPaginationChange,
    resetPagination
  };
};
