"use client";
import About from "@/components/Admin/Account/About";
import PersonalInfo from "@/components/Admin/Account/PersonalInfo";
import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

export default function page() {
  return (
    <div className="">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-12 gap-11 px-12 py-8 mt-8 shadow-lg rounded-lg">
        <div className="col-span-4">
          <About />
        </div>
        <div className="col-span-8">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}
