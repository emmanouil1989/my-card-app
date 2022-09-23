export type PaginationWrapper<T> = {
  page: number;
  limit: number;
  totalResults: number;
  results: T[];
};
