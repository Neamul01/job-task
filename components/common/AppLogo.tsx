import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppLogo() {
  return (
    <div className="md:h-[42px] md:w-[154px] relative">
      <Link href={"/"} className="w-44 cursor-pointer">
        <Image
          priority
          fill
          src="/logo.png"
          alt="logo"
          className=" overflow-hidden object-contain"
        />
      </Link>
    </div>
  );
}
