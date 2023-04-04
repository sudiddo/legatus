import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const contextClass = {
    success: "bg-white",
    error: "bg-white",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        toastClassName={(type) =>
          contextClass[type?.type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer shadow-lg"
        }
        bodyClassName={() =>
          "text-sm font-legatus flex flex-row text-black block p-3"
        }
        position="top-center"
        autoClose={3000}
      />
    </Layout>
  );
}
