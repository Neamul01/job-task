"use client";
import FileUpload from "@/components/Admin/AddCourse/FileUpload";
import OtherInfo from "@/components/Admin/AddCourse/OtherInfo";
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

  return (
    <div className="">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Upload New Course</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-2 gap-11 md:px-12 px-2 py-8 mt-8 shadow-lg rounded-lg">
        <div className="md:col-span-1">
          <FileUpload
            setAllFiles={handleFileChange}
            handleSubmit={setHandleSubmit}
          />
        </div>
        <div className="md:col-span-1">
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
