"use client";
import { Breadcrumb, Tabs } from "flowbite-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const params = useParams();
  console.log(params);
  return (
    <div className="mt-20 md:mt-0">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <Breadcrumb
          aria-label="Default breadcrumb example"
          className="flex flex-wrap overflow-hidden"
        >
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admin/courses">Courses</Breadcrumb.Item>
          <Breadcrumb.Item href="#">{params.id}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid lg:grid-cols-12 gap-11 xl:px-12 px-2 py-8 mt-8 rounded-lg bg-[#f7f8fe]">
        <div className="lg:col-span-8 overflow-hidden bg-white p-2 md:p-4 rounded-lg">
          <div className="rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="428"
              src="https://www.youtube.com/embed/8MyHLz6Spoc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col gap-2 text-black md:mt-6 mt-3">
            <h2 className="text-xl font-semibold">
              Artificial Intelligence & Machine Learning
            </h2>
            <p className="text-sm">
              By <b>Simon Shaw,</b> Illustrator and 3D designer
            </p>
            <div className="flex gap-3 items-center">
              <div className="h-14 w-14 relative rounded-full overflow-hidden">
                <Image src={"/teacher.png"} fill alt="reacher" />
              </div>
              <p className="">Simon Shaw</p>
            </div>
          </div>
          <Tabs.Group
            aria-label="Default tabs"
            style="default"
            className="mt-4"
          >
            <Tabs.Item active title="Overview">
              <p>
                This is
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </Tabs.Item>
            <Tabs.Item title="Curriculum">
              <p>
                This is
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </Tabs.Item>
          </Tabs.Group>
        </div>
        <div className="lg:col-span-4">{/* <About user={user} /> */}</div>
      </div>
    </div>
  );
}
