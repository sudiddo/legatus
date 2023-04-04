import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Menu from "@/components/buttons/Menu";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      <Menu />
    </div>
  );
}
