import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const CardDetails = dynamic(() => import("@/components/CardDetails"), {
  ssr: false,
});

export default function CardDetailPage() {
  return (
    <>
      <Head>
        <title>Cards Pool App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CardDetails />
    </>
  );
}
