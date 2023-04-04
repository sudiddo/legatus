import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-row justify-between border-b border-black bg-white px-5 py-3 lg:px-10">
      <div className="flex flex-row items-center">
        <Link href={"/"} title="home">
          <Image src={Logo} alt="Legatus" width={60} height={60} />
        </Link>
        <div className="ml-3 flex flex-col justify-center">
          <p className="font-legatus text-2xl">Legatus</p>
          <p className="font-legatus text-xs lg:text-sm">
            The Travian tool for those who can&apos;t do math
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
