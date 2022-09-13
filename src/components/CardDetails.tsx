import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../utils/trpc";

export default function CardDetails() {
  const router = useRouter();
  const cardId = router.query["card-id"] as string;
  const { data, isLoading, isSuccess } = trpc.useQuery([
    "detail.card-details",
    { cardId },
  ]);

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
