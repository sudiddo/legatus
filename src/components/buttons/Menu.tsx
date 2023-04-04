import Image from "next/image";
import React from "react";
import Wheat from "@/assets/wheat.png";
import Link from "next/link";

function Menu() {
  return (
    <Link href={"/double-scouts"}>
      <button className="flex h-20 flex-row items-center justify-between rounded-2xl border border-black px-4 py-2 transition-transform duration-75 hover:scale-105 hover:bg-black/10 active:scale-95 lg:w-72 lg:py-4 ">
        <div className="select-none text-left">
          <p className="text-lg font-semibold">Double Scout</p>
          <p className="hidden text-sm lg:block">Count the crop production</p>
        </div>
        <Image
          src={Wheat}
          alt="Wheat"
          width={45}
          height={45}
          className="object-contain"
        />
      </button>
    </Link>
  );
}

export default Menu;
