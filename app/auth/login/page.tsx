"use client";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function page() {
  return (
    <div className="mx-auto md:w-[800px] md:h-[588px] px-2 md:px-0 flex flex-col">
      <h1 className="text-center text-h1 mb-20">Welcome To Task Job</h1>
      <form className="flex flex-col gap-6">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email Address" className="text-2xl" />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" className="text-2xl" />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer">
              <AiOutlineEyeInvisible className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>
        <Button className="bg-primary py-6 px-4 hover:bg-secondary">
          <span className="text-2xl">Login</span>
        </Button>
        <div className="w-full flex justify-center">
          Don’t Have An Account?{" "}
          <Link
            href={"/auth/registration"}
            className="ml-1 text-primary underline"
          >
            {" "}
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
}
