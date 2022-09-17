import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import LoadingIndicator from "./LoadingIndicator";

export default function CardDetails() {
  const router = useRouter();
  const cardId = router.query["card-id"] as string;
  const { data, isLoading, isSuccess } = trpc.useQuery([
    "detail.card-details",
    { cardId },
  ]);

  const isLoadingOrError = isLoading || !isSuccess;

  return (
    <div
      className={`flex flex-col sm:flex-row justify-center h-full w-full  items-center p-8 sm:pt-0`}
    >
      {isLoading || !isSuccess ? (
        <LoadingIndicator />
      ) : (
        <>
          <div className="relative shadow-lg mx-12  shadow-yellow-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px]">
            <Image
              src={data.card.imageLink}
              alt={data.card.title}
              layout="fill"
            />
          </div>
          <div className="py-4" />
          <div className="flex flex-col p-4 sm:w-96">
            <h1 className="text-2xl font-bold pb-4 leading-tight">{data.card.title}</h1>
            <p className="text-lg leading-tight">
              {data.card.description.replace(/(<([^>]+)>)/gi, "")}
            </p>
            <button className="bg-yellow-500 text-white p-2 rounded-lg mt-4 font-bold text-lg">
              {data.card.price}
              {data.card.currency} Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}
