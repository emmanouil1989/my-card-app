import React from "react";
import Image from "next/image";
import { trpc } from "@/utils/trpc";

export default function Card() {
  const { isLoading, isSuccess, data } = trpc.useQuery(["card-search"]);

  if (isLoading || !isSuccess) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-6 gap-2 pr-8 pb-8 pl-8 mx-auto h-full overflow-auto ">
      {data.Products.map(({ ProductImage, Title }) => (
        <div className="h-full w-full  flex justify-center">
          <div className=" h-48 w-48 relative">
            <Image
              src={ProductImage.Link.Href}
              alt={Title}
              layout="fill"
              className="rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
