"use client";
import Course from "@/components/Admin/Courses/Course";
import { Breadcrumb, Button } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const [form, setForm] = useState({
    popular: "popular",
  });
  return (
    <div className="">
      <div>
        <h2 className="text-xl font-semibold mb-4">Discover</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Courses</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="md:px-12 px-2 py-8 mt-8 shadow-lg rounded-lg flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <div className="flex gap-7 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-2 shadow-xl px-7 py-4 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Sort By:</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="w-32 rounded-lg border-none"
              >
                <option value={"popular"} className="custom-option">
                  Popular
                </option>
                <option value={""} className="custom-option">
                  Student
                </option>
              </select>
            </div>
            <div className="flex items-center gap-2 shadow-xl px-7 py-4 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Sort By:</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="w-32 rounded-lg border-none"
              >
                <option value={"popular"} className="custom-option">
                  Popular
                </option>
                <option value={""} className="custom-option">
                  Student
                </option>
              </select>
            </div>
            <div className="flex items-center gap-2 shadow-xl px-7 py-4 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Sort By:</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="w-32 rounded-lg border-none"
              >
                <option value={"popular"} className="custom-option">
                  Popular
                </option>
                <option value={""} className="custom-option">
                  Student
                </option>
              </select>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="col-span-3 h-[340px] px-2 py-4  flex flex-col justify-between shadow-lg rounded-lg">
            <Course />
          </div>
        </div>
      </div>
    </div>
  );
}
