"use client";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";

export default function InformationTab() {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    position: 2,
    institute: 0,
    workTime: 0,
  });

  return (
    <div className="md:w-[800px] md:h-[469px] mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-h1 capitalize flex justify-center font-semibold">
          personal information
        </h1>
      </div>
      <form className="flex flex-col gap-6">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Full Name " className="text-2xl" />
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter Full Name "
            className="border w-full rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="emailAddress"
              value="Email Address"
              className="text-2xl"
            />
          </div>
          <input
            type="emailAddress"
            name="emailAddress"
            id="emailAddress"
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
              onChange={(e) =>
                setForm({ ...form, position: parseInt(e.target.value) })
              }
              className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value={1} className="custom-option">
                Teacher
              </option>
              <option value={2} selected className="custom-option">
                Student
              </option>
            </select>
          </div>
        </div>
        {form.position === 2 && (
          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="institute"
                value="Institute Name"
                className="text-2xl"
              />
            </div>
            <div className="relative">
              <select
                name="institute"
                id="institute"
                defaultValue={form.institute}
                onChange={(e) =>
                  setForm({ ...form, institute: parseInt(e.target.value) })
                }
                className="border w-full rounded-lg px-4 py-6 focus:outline-none
            focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="0" selected className="custom-option">
                  Select Institute Name
                </option>
                {institutes.map((institute) => (
                  <option
                    key={institute.id}
                    value={institute.value}
                    className="custom-option"
                  >
                    {institute.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {form.institute ? (
          <div className="">
            <div className="mb-2 block">
              <Label
                htmlFor="workTime"
                value="Work Time"
                className="text-2xl"
              />
            </div>
            <div className="relative">
              <select
                name="workTime"
                id="workTime"
                defaultValue={form.workTime}
                onChange={(e) =>
                  setForm({ ...form, workTime: parseInt(e.target.value) })
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
                <option value={1} className="custom-option">
                  Full Time
                </option>
                <option value={2} className="custom-option">
                  Part Time
                </option>
              </select>
            </div>
          </div>
        ) : null}
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

const institutes = [
  {
    id: 1,
    name: "Dhaka National Madical Collage",
    value: "1",
  },
  {
    id: 2,
    name: "Ibrahim Madical Collage",
    value: "2",
  },
  {
    id: 3,
    name: "Bangladesh Madical Collage",
    value: "3",
  },
  {
    id: 4,
    name: "Holy Family Red Cresent Madical Collage",
    value: "4",
  },
];
