import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import LoadingIndicator from "./LoadingIndicator";
import sanitizeHtml from "sanitize-html";
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
            <h1 className="text-2xl font-bold pb-4 leading-tight">
              {data.card.title}
            </h1>
            <Description description={data.card.description} />
            <DescriptionMobile description={data.card.description} />
            <button className="bg-cyan-700 text-white p-2 rounded-lg mt-4 font-bold text-lg">
              {data.card.price}
              {data.card.currency} Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

type DescriptionMobileScreens = {
  description: string;
};
const DescriptionMobile = ({ description }: DescriptionMobileScreens) => {
  const [showMore, setShowMore] = React.useState(false);
  const ref = React.useRef<HTMLParagraphElement>(null);
  const isClamped = useElementClamped(ref);
  const showMoreText = useMemo(() => {
    if (showMore) {
      return (
        <span className=" font-bold text-lg">
          <button onClick={() => setShowMore(false)}>Show less</button>
        </span>
      );
    } else {
      return (
        <span className="font-bold text-lg">
          <button onClick={() => setShowMore(true)}>Show More</button>
        </span>
      );
    }
  }, [showMore, setShowMore]);

  return (
    <div className="sm:hidden flex flex-col">
      <p
        className={`text-lg leading-tight ${
          showMore ? "" : "line-clamp-3"
        } text-[#b8c1ec]`}
        ref={ref}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
      />
      {isClamped && showMoreText}
    </div>
  );
};

const useElementClamped = (ref: React.RefObject<HTMLElement>) => {
  let [isClamped, setIsClamped] = React.useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    setIsClamped(ref.current.scrollHeight > ref.current.clientHeight + 1);
  }, [ref]);

  return isClamped;
};

const Description = ({ description }: DescriptionMobileScreens) => {
  return (
    <div className="hidden sm:flex max-h-96 overflow-x-hidden overflow-auto">
      <p
        className={`text-lg  text-[#b8c1ec]`}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
      />
    </div>
  );
};
