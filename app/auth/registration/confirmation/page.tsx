"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  return (
    <div className="max-w-registration flex flex-col items-center">
      <div className="w-[250px] h-[250px] relative border-[10px] rounded-full ">
        <Image src={"/confirm.png"} fill alt="confirm" />
      </div>
      <h3 className="text-h3 capitalize mt-6 mb-4">thank you</h3>
      <p className="max-w-[485px] text-black/40 text-2xl text-center mb-20">
        Account Has Been Created. Enjoy Job Task.
      </p>
      <button
        className="border border-primary px-4 py-6 text-2xl w-[318px] rounded-lg hover:bg-primary hover:text-white "
        onClick={() => router.push("/")}
      >
        Go to Home
      </button>
    </div>
  );
}