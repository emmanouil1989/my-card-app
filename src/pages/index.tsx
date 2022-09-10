import Card from "@/components/Card";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Image from "next/image";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(["card-search"]);

  const isLoadingOrError = isLoading || !isSuccess;

  return (
    <main className=" h-screen w-screen flex flex-col justify-between items-center relative">
      <div className=" flex flex-col justify-center  w-full  items-center ">
        {isLoadingOrError ? (
          <img
            src={"/ball-triangle.svg"}
            alt={"loading indicator"}
            className={"w-56 h-56"}
          />
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 w-full">
              <h2>CardPool</h2>
              <div className="sm:w-8/12 w-[19rem] h-10 relative py-4 sm:py-0 ">
                <input
                  className=" rounded-3xl p-4 border-solid  bg-slate-600 w-full h-11 outline-none border-2 border-gray-300 font-bold placeholder:text-white placeholder:font-bold"
                  placeholder="Search for cards..."
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
            <Card data={data!.cards} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
