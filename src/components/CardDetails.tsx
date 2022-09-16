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

  if (isLoading || !isSuccess) {
    return <LoadingIndicator />;
  }
  const card = data.card;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:justify-center h-full w-full  items-center pt-10 sm:pt-0`}
    >
      <div className="relative shadow-lg shadow-yellow-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8 w-[400px] h-[400px]">
        <Image src={card.imageLink} alt={card.title} layout="fill" />
      </div>
      <div className="py-4" />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold pb-4">{card.title}</h1>
        <p className="text-lg">
          {card.description.replace(/(<([^>]+)>)/gi, "")}
        </p>
        <button className="bg-yellow-500 text-white p-2 rounded-lg mt-4 font-bold text-lg">
          {card.price}
          {card.currency} Buy Now
        </button>
      </div>
    </div>
  );
}
