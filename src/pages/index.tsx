import CardList from "@/components/CardList";
import LoadingIndicator from "@/components/LoadingIndicator";
import PaginationRange from "@/components/PaginationRange";
import { usePagination } from "@/utils/misc";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [searchValue] = useDebounce(search, 500);

  const { page, limit, onPaginationChange, resetPagination } = usePagination();
  const { data, isLoading, isSuccess } = trpc.useQuery(
    ["search.cards-search", { search: searchValue, page, limit }],
    { keepPreviousData: true }
  );


  const isLoadingOrError = isLoading || !isSuccess;

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetPagination();
    setSearch(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Cards Pool App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div
          className={`flex flex-col justify-center h-full   items-center relative p-16 md:p-0`}
        >
          {isLoadingOrError ? (
            <LoadingIndicator />
          ) : (
            <>
              <div className="flex flex-col xl:flex-row justify-between items-start sm:items-center pt-4 pb-8 sm:w-11/12 w-[19rem]">
                <div className="flex items-center h-10 justify-start pr-4">
                  <h2 className="font-mono text-5xl font-bold">CardPool</h2>
                </div>

                <div className=" w-full h-10 relative py-4 sm:py-0 ">
                  <input
                    className=" rounded-3xl p-4  bg-slate-600 w-full h-11 outline-none border-2 border-gray-300 font-bold placeholder:text-white placeholder:text-lg placeholder:font-bold"
                    placeholder="Search for cards..."
                    aria-label="Search for cards..."
                    value={search}
                    onChange={onSearch}
                  />
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28px"
                    height="28px"
                    className="absolute top-6 sm:top-2 right-4 bottom-2"
                  >
                    <path
                      d="M11 2a9 9 0 1 0 3.88 17.123l5.777 5.777a3 3 0 0 0 4.243-4.243l-5.777-5.777A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm14.032 5.618a9.054 9.054 0 0 1-1.414 1.414l5.453 5.453a1 1 0 0 0 1.414-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <CardList data={data!.results} />
              <PaginationRange
                page={page}
                limit={limit}
                totalCount={data!.totalResults}
                onChange={onPaginationChange}
              />
            </>
          )}
        </div>
      </>
    </>
  );
};

export default Home;
