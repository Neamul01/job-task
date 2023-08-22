"use client";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import Axios from "@/utils/Axios";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Page() {
  const { data, setData } = useRegistrationContext();
  const [form, setForm] = useState({
    password: "",
    confirm_password: "",
  });
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      alert("Password and Confirm Password does not match");
      return;
    } else {
      setData({ ...data, ...form });
      console.log(data);

      Axios.post("/api/v1/user/register", { ...data })
        .then((res) => {
          console.log(res);
          router.push("/auth/registration/confirmation");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="md:max-w-registration mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="md:text-h1 text-2xl capitalize flex justify-center font-semibold">
          Security
        </h1>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password "
              className="md:text-2xl"
            />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter New Password "
            className="border w-full rounded-lg md:px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="Confirm password"
              value="Confirm Password "
              className="md:text-2xl"
            />
          </div>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            onChange={(e) =>
              setForm({ ...form, confirm_password: e.target.value })
            }
            placeholder="Re-Enter New Password "
            className="border w-full rounded-lg md:px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          className="bg-primary md:py-6 md:px-4 hover:bg-secondary"
        >
          <span className="md:text-2xl">Confirm</span>
        </Button>
        <div className="w-full flex justify-center md:text-lg text-xs">
          Already An Account?{" "}
          <Link href={"/auth/login"} className="ml-1 text-primary underline">
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
