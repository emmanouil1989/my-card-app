import React, { PropsWithChildren } from "react";
import { Card as CardType } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";

type CardListProps = PropsWithChildren<{
  data: Array<CardType>;
}>;
export default function CardList({ data }: CardListProps) {
  const router = useRouter();
  const onImageClick = (id: string) => {
    router.push(`/${id}`);
  };
  return (
    <div className="flex h-4/5 pr-4">
      <ul className="grid xl:grid-cols-[300px_300px_300px_300px] lg:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px] grid-cols-[300px]  xl:auto-rows-[400px] lg:auto-rows-[300px]  md:auto-rows-[300px] auto-rows-[400px] list-inside gap-8  h-full overflow-y-auto overflow-x-hidden pr-4">
        {data.map(({ productId, imageLink, title }) => (
          <li key={productId} className="h-full w-full  flex justify-center">
            <div className=" h-full w-full relative shadow-lg shadow-yellow-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
              <button className="relative h-full w-full">
                <Image
                  priority
                  src={imageLink}
                  alt={title}
                  layout="fill"
                  onClick={() => onImageClick(productId)}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
