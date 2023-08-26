"use client";
import FileUpload from "@/components/Admin/AddCourse/FileUpload";
import OtherInfo from "@/components/Admin/AddCourse/OtherInfo";
import CustomBreadCrumb from "@/components/common/CustomBreadCrumb";
import { Breadcrumb, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const [allFiles, setAllFiles] = useState<File | null>(null);
  const [handleSubmit, setHandleSubmit] = useState<() => void | undefined>();

  const handleFileChange = (newFile: any) => {
    setAllFiles(newFile);
  };

  const handleClick = () => {
    if (handleSubmit) {
      handleSubmit();
    }
    // console.log(allFiles);
  };

  useEffect(() => {
    console.log("allFiles", allFiles);
  }, [allFiles, setAllFiles]);

  const breadcrumbItems = [
    {
      href: "/",
      icon: HiHome,
      children: "Dashboard",
    },
    {
      href: "/admin/courses",
      children: "Upload a new Course",
    },
  ];

  return (
    <div className="">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <CustomBreadCrumb items={breadcrumbItems} />
      </div>
      <div className="grid lg:grid-cols-2 2xl:gap-11 lg:gap-4 gap-2 lg:px-8 px-2 py-8 mt-8 rounded-lg bg-gray-100 min-h-screen">
        <div className="lg:col-span-1 bg-white p-4 rounded-lg">
          <FileUpload
            setAllFiles={handleFileChange}
            handleSubmit={setHandleSubmit}
          />
        </div>
        <div className="lg:col-span-1 bg-white p-4 rounded-lg">
          <OtherInfo />
        </div>

        <div className="">
          <Button onClick={handleClick} className="bg-primary px-[60px] py-3">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
