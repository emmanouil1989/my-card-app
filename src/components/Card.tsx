import React from "react";
import Image from "next/image";
import { trpc } from "@/utils/trpc";

export default function Card() {
  const { isLoading, isSuccess, data } = trpc.useQuery(["card-search"]);

  if (isLoading || !isSuccess) return <div>Loading...</div>;

  return (
    <ul className="grid grid-cols-[300px_300px_300px_300px] auto-rows-[300px] gap-8  h-full">
      {data.Products.map(({ ProductImage, Title, MoonpigProductNo }) => (
        <li
          key={MoonpigProductNo}
          className="h-full w-full  flex justify-center"
        >
          <div className=" h-full w-full relative">
            <Image
              src={ProductImage.Link.Href}
              alt={Title}
              layout="fill"
              className="rounded"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
