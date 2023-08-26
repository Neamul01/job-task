"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  return (
    <div className="max-w-registration flex flex-col items-center">
      <div className="md:w-[250px] md:h-[250px] w-[150px] h-[150px] relative border-[10px] rounded-full ">
        <Image src={"/confirm.png"} fill alt="confirm" />
      </div>
      <h3 className="md:text-h3 text-2xl capitalize mt-6 mb-4">thank you</h3>
      <p className="max-w-[485px] text-black/40 xl:text-xl md:text-lg text-xl text-center mb-20">
        Account Has Been Created. Enjoy Job Task.
      </p>
      <button
        className="border border-primary px-4 md:py-6 py-3 xl:text-xl md:text-lg md:w-[318px] rounded-lg hover:bg-primary hover:text-white "
        onClick={() => router.push("/admin/dashboard")}
      >
        Go to Home
      </button>
    </div>
  );
}
