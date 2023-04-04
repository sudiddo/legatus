import React from "react";
import Header from "./Header";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`Legatus - Travian Lazy Tools`}</title>
        <meta name="description" content="Travian Tools and Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <div className="flex w-[1366px] flex-col">
          <Header />
          <main className="overflow-y-auto p-5 lg:p-10">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
