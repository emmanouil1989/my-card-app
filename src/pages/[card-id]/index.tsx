import CardDetails from '@/components/CardDetails';
import Head from 'next/head';
import React from 'react';




export default function CardDetailPage() {
  return <>
      <Head>
        <title>Cards Pool App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <CardDetails />
  </>
}