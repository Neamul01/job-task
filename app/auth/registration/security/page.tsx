"use client";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  return (
    <div className="md:max-w-registration mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-h1 capitalize flex justify-center font-semibold">
          personal information
        </h1>
      </div>
      <form className="flex flex-col gap-6">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password " className="text-2xl" />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter New Password "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="ConfirmPassword"
              value="Confirm Password "
              className="text-2xl"
            />
          </div>
          <input
            type="ConfirmPassword"
            name="ConfirmPassword"
            id="ConfirmPassword"
            placeholder="Re-Enter New Password "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <Button
          onClick={() => router.push("/auth/registration/confirmation")}
          className="bg-primary py-6 px-4 hover:bg-secondary"
        >
          <span className="text-2xl">Confirm</span>
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
