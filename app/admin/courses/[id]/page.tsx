"use client";
import CourseSide from "@/components/Student/Courses/CourseSide";
import CurriculumTab from "@/components/Student/Courses/CurriculumTab";
import OverviewTab from "@/components/Student/Courses/OverviewTab";
import CustomBreadCrumb from "@/components/common/CustomBreadCrumb";
import { Breadcrumb, Tabs } from "flowbite-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const params = useParams();
  const router = useRouter();

  const breadcrumbItem = [
    {
      href: "/",
      icon: HiHome,
      children: "Dashboard",
    },
    {
      href: "/admin/courses",
      children: "Courses",
    },
    {
      href: "/admin/courses/" + params.id,
      children: params.id,
    },
  ];

  return (
    <div className="mt-20 md:mt-0">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <CustomBreadCrumb items={breadcrumbItem} />
      </div>
      <div className="grid lg:grid-cols-12 xl:gap-11 gap-2 lg:gap-5 xl:px-12 px-2 py-8 mt-8 rounded-lg bg-[#f7f8fe]">
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
              <OverviewTab />
            </Tabs.Item>
            <Tabs.Item title="Curriculum">
              <CurriculumTab />
            </Tabs.Item>
          </Tabs.Group>
        </div>
        <div className="lg:col-span-4">
          <CourseSide />
        </div>
      </div>
    </div>
  );
}
