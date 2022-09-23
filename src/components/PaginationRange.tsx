import React from "react";
import { v4  } from 'uuid';

export type PaginationRangeProps = {
  page: number;
  limit: number;
  totalCount: number;
  onChange: (page: number, limit: number) => void;
};
export default function PaginationRange({
  page,
  onChange,
  limit,
  totalCount,
}: PaginationRangeProps) {
  const totalPages = Math.ceil(totalCount / limit);
  const rangeArray = usePagiantionRange(page, totalPages);
  if (rangeArray === undefined || rangeArray.length === 0) {
    return null;
  }
  return (
    <ul className="flex justify-center items-center p-6 text-xl md:text-2xl">
      {page > 1 && (
        <li className="md:mx-2 flex justify-center items-center">
          <button
            className={"w-full h-full"}
            onClick={() => onChange(page - 1, limit)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </li>
      )}
      {rangeArray.map((pageNumber) => {
        const key = v4();

        if (typeof pageNumber === "string") {
          return (
            <li key={key} className="md:mx-2 mx-1">
              ...
            </li>
          );
        } else {
          const isSelected = pageNumber === page;
          return (
            <li key={key} className={`md:mx-2 mx-1`}>
              <button
                className={`${
                  isSelected &&
                  "underline  font-bold rounded-3xl pb-1 w-12 h-12 bg-slate-400"
                } hover:underline`}
                onClick={() => onChange(pageNumber, limit)}
              >
                {pageNumber}
              </button>
            </li>
          );
        }
      })}
      {page < totalPages && (
        <li className="md:mx-2 flex justify-center items-center">
          <button onClick={() => onChange(page + 1, limit)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </li>
      )}
    </ul>
  );
}

const usePagiantionRange = (page: number, totalPages: number) => {
  const THRESHOLD = 5;
  const isLeftDots = page > totalPages - THRESHOLD + 1;
  const isRightDots = page < THRESHOLD;

  if (isLeftDots && isRightDots) {
    const range = Array.from({ length: totalPages }, (_, i) => i + 1);
    return [...range];
  }

  if (isRightDots && !isLeftDots) {
    const range = Array.from({ length: THRESHOLD }, (_, i) => i + 1);
    return [...range, "...", totalPages];
  }

  if (isLeftDots && !isRightDots) {
    const length =
      page === totalPages - 1 - THRESHOLD ? THRESHOLD + 2 : THRESHOLD;

    const range = Array.from({ length: THRESHOLD }, (_, i) => {
      const initialIndex = totalPages + 1 - THRESHOLD;
      return initialIndex + i;
    });
    return [1, "...", ...range];
  }

  if (!isLeftDots && !isRightDots) {
    const middleRagnge = Array.from({ length: THRESHOLD }, (_, i) => {
      const initialIndex = page - 2;
      return initialIndex + i;
    });
    return [1, "...", ...middleRagnge, "...", totalPages];
  } else {
    return [];
  }
};
