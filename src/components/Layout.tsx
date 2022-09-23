import React, { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;
export default function Layout({ children }: LayoutProps) {
  return (
    <main className=" h-screen w-screen flex flex-col justify-between items-center relative">
      {children}
    </main>
  );
}
