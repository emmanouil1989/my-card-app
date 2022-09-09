import React, { PropsWithChildren } from "react";
import { Card as CardType } from "@prisma/client";
import Image from "next/image";

type CardProps = PropsWithChildren<{
  data: Array<CardType>;
}>;
export default function Card({ data }: CardProps) {
  return (
    <ul className="grid xl:grid-cols-[300px_300px_300px_300px] lg:grid-cols-[200px_200px_200px] md:grid-cols-[200px_200px] grid-cols-[300px]  xl:auto-rows-[400px] lg:auto-rows-[300px]  md:auto-rows-[300px] auto-rows-[400px]  gap-8  h-full ">
      {data.map(({ productId, imageLink, title }) => (
        <li key={productId} className="h-full w-full  flex justify-center">
          <div className=" h-full w-full relative shadow-md shadow-yellow-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src={imageLink}
              alt={title}
              layout="fill"
              className="rounded "
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
