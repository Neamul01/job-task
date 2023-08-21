"use client";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const { data, setData } = useRegistrationContext();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    position: "teacher",
    institution_name: "",
    work_time: "part_time",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({ ...data, ...form });
    router.push("/auth/registration/security");
  };

  return (
    <div className="md:max-w-registration md:h-[469px] mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-h1 capitalize flex justify-center font-semibold">
          personal information
        </h1>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="full_name"
              value="Full Name "
              className="text-2xl"
            />
          </div>
          <input
            type="text"
            name="full_name"
            id="full_name"
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            placeholder="Enter Full Name "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email Address" className="text-2xl" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter Email Address"
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="position" value="Position" className="text-2xl" />
          </div>
          <div className="relative">
            <select
              name="position"
              id="position"
              defaultValue={form.position}
              onChange={(e) => setForm({ ...form, position: e.target.value })}
              className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value={"teacher"} className="custom-option">
                Teacher
              </option>
              <option value={"student"} className="custom-option">
                Student
              </option>
            </select>
          </div>
        </div>
        {form.position === "teacher" && (
          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="institution_name"
                value="Institute Name"
                className="text-2xl"
              />
            </div>
            <div className="relative">
              <select
                name="institution_name"
                id="institution_name"
                defaultValue={form.institution_name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    institution_name: e.target.value,
                  })
                }
                className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={0} className="custom-option">
                  Select institution_name Name
                </option>
                {institution_names.map((institution_name) => (
                  <option
                    key={institution_name.id}
                    value={institution_name.value}
                    className="custom-option"
                  >
                    {institution_name.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {form.institution_name ? (
          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="work_time"
                value="Work Time"
                className="text-2xl"
              />
            </div>
            <div className="relative">
              <select
                name="work_time"
                id="work_time"
                defaultValue={form.work_time}
                onChange={(e) =>
                  setForm({ ...form, work_time: e.target.value })
                }
                className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option
                  value={0}
                  selected
                  className="custom-option"
                  style={{
                    padding: "10px 15px",
                  }}
                >
                  Select Work Time
                </option>
                <option value={"full_time"} className="custom-option">
                  Full Time
                </option>
                <option value={"part_time"} className="custom-option">
                  Part Time
                </option>
              </select>
            </div>
          </div>
        ) : null}
        <Button
          type="submit"
          className="bg-primary py-6 px-4 hover:bg-secondary"
        >
          <span className="text-2xl">Next</span>
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

const institution_names = [
  {
    id: 1,
    name: "Dhaka National Madical Collage",
    value: "Dhaka National Madical Collage",
  },
  {
    id: 2,
    name: "Ibrahim Madical Collage",
    value: "Ibrahim Madical Collage",
  },
  {
    id: 3,
    name: "Bangladesh Madical Collage",
    value: "Bangladesh Madical Collage",
  },
  {
    id: 4,
    name: "Holy Family Red Cresent Madical Collage",
    value: "Holy Family Red Cresent Madical Collage",
  },
];
