"use client";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { useUserContext } from "@/contexts/userContext";
import Axios from "@/utils/Axios";
import { Alert, Button, Label } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

export default function Page() {
  const { user, setUser } = useUserContext();
  const { data, setData } = useRegistrationContext();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post("/api/v1/user/login", formData)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("access_token", res.data.data.token);
        setUser(res.data.data);
        setData(res.data.data);
        localStorage.setItem(
          "user",
          JSON.stringify({
            full_name: res.data.data.full_name,
            position: res.data.data.position,
          })
        );

        console.log("data", data);
        window.location.href = "/";
      })
      .catch((err) => {
        <Alert color="failure" icon={HiInformationCircle}>
          <span>
            <p>
              <span className="font-medium">Error!</span>
              {err.message}
            </p>
          </span>
        </Alert>;
      });
  };
  console.log("user", localStorage.getItem("user"));
  return (
    <div className="mx-auto md:w-[800px] md:h-[588px] px-2 md:px-0 flex flex-col">
      <h1 className="text-center md:text-h1 text-2xl md:mb-20 mb-10">
        Welcome To Task Job
      </h1>
      <form className="flex flex-col md:gap-6 gap-3 " onSubmit={handleSubmit}>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email Address"
              className="md:text-2xl"
            />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter Email Address"
            className="border w-full rounded-lg md:px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
              className="md:text-2xl"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter Password"
              className="border w-full rounded-lg md:px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer">
              <AiOutlineEyeInvisible className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>
        <Button
          className="bg-primary md:py-6 md:px-4 hover:bg-secondary"
          type="submit"
        >
          <span className="md:text-2xl">Login</span>
        </Button>
        <div className="w-full flex justify-center text-xs md:text-lg">
          Don’t Have An Account?{" "}
          <Link
            href={"/auth/registration/information"}
            className="ml-1 text-primary underline"
          >
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
}
