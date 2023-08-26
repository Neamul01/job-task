import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppLogo({
  variant,
}: {
  variant?: "default" | "white";
}) {
  return (
    <div className="h-[42px] w-[154px] my-3 md:my-0 relative">
      <Link href={"/admin/dashboard"} className="w-44 cursor-pointer">
        <Image
          priority
          fill
          src={variant === "white" ? "/logo-white.png" : "/logo.png"}
          alt="logo"
          className=" overflow-hidden object-contain"
        />
      </Link>
    </div>
  );
}
