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
      <div className="flex min-h-screen justify-center">
        <div className="flex w-[1366px] flex-col">
          <Header />
          <main className="h-full overflow-y-auto p-5 lg:p-10">{children}</main>
          <footer className="border-top relative bottom-0 left-0 right-0 z-0 h-16 border bg-white">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-xs text-gray-500">
                Made with ❤️ by{" "}
                <a
                  href="https://sudiddo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Asynchronous
                </a>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Proudly a part of the{" "}
                <span className="font-legatus text-sm font-semibold text-gray-500">
                  EDITH
                </span>{" "}
                team.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Layout;
