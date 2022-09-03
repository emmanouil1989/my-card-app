import React from "react";
import Image from "next/image";
import { trpc } from "@/utils/trpc";

export default function Card() {
  const { isLoading, isSuccess, data } = trpc.useQuery(["card-search"]);

  if (isLoading || !isSuccess) return <div>Loading...</div>;

  return (
    <ul className="grid grid-cols-[400px_400px_400px_400px] auto-rows-[400px] gap-2 pr-8 pb-8 pl-8 mx-auto h-full">
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
