"use client";
import Course from "@/components/Admin/Courses/Course";
import { ICourse } from "@/types";
import Axios from "@/utils/Axios";
import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const router = useRouter();
  const [courses, setCourses] = useState<any>(null);
  const [form, setForm] = useState({
    popular: "popular",
  });

  useEffect(() => {
    Axios.post("/api/v1/course/list", { perpage: 10, page: 1 })
      .then((res) => {
        setCourses(res.data.send_res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-20 md:mt-0">
      <div>
        <h2 className="text-xl font-semibold mb-4">Discover</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item
            href="/admin/dashboard"
            onClick={() => router.push("/admin/dashboard")}
            className="cursor-pointer"
            icon={HiHome}
          >
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admin/courses">Courses</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="xl:px-12 px-2 py-8 mt-8 rounded-lg flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <div className="flex md:gap-7 gap-2 flex-wrap lg:flex-nowrap">
            <div className="flex items-center md:gap-2 shadow-xl xl:px-7 px-3 xl:py-4 py-2 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Sort By:</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="lg:w-32 w-3 px-1 rounded-lg border-none "
              >
                <option value={"popular"} className="custom-option">
                  Popular
                </option>
                <option value={""} className="custom-option">
                  Student
                </option>
              </select>
            </div>
            <div className="flex items-center md:gap-2 shadow-xl xl:px-7 px-3 xl:py-4 py-2 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Courses</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="w-3 px-1 rounded-lg border-none"
              >
                <option value={"popular"} className="custom-option"></option>
                <option value={""} className="custom-option"></option>
              </select>
            </div>
            <div className="flex items-center md:gap-2 shadow-xl xl:px-7 px-3 xl:py-4 py-2 rounded-lg">
              <p className="font-semibold whitespace-nowrap">Category:</p>
              <select
                name="popular"
                id="popular"
                defaultValue={form.popular}
                onChange={(e) => setForm({ ...form, popular: e.target.value })}
                className="lg:w-32 w-3 px-1 rounded-lg border-none"
              >
                <option value={"popular"} className="custom-option">
                  All Category
                </option>
                <option value={""} className="custom-option">
                  All Category
                </option>
              </select>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12">
          {courses?.map((item: ICourse, index: number) => (
            <div
              key={index}
              onClick={() => router.push(`/admin/courses/${item.lesson_name}`)}
              className="xl:col-span-3 lg:col-span-6  h-[340px] px-2 py-4  flex flex-col justify-between shadow-lg rounded-lg"
            >
              <Course course={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
