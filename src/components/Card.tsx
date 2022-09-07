import React, { PropsWithChildren } from "react";
import { Card as CardType } from "@prisma/client";
import Image from "next/image";

type CardProps = PropsWithChildren<{
  data: Array<CardType>;
}>;
export default function Card({ data }: CardProps) {
  return (
    <ul className="grid xl:grid-cols-[300px_300px_300px_300px] lg:grid-cols-[200px_200px_200px] lg:auto-rows-[300px] sm:grid-cols-[300px] sm:grid-auto-rows[400px] md:grid-cols-[200px_200px] md:auto-rows-[300px] xl:auto-rows-[400px] gap-8  h-full">
      {data.map(({ productId, imageLink, title }) => (
        <li key={productId} className="h-full w-full  flex justify-center">
          <div className=" h-full w-full relative">
            <Image
              src={imageLink}
              alt={title}
              layout="fill"
              className="rounded"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
