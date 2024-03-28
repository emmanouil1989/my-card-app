import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "@/components/Layout";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
import { trpc } from "@/utils/trpc";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default trpc.withTRPC(MyApp);
