import { ICourse } from "@/types";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";

export default function Course({ course }: { course: ICourse }) {
  return (
    <>
      <div className="">
        <div className="md:w-[322px] h-[215px] rounded-lg overflow-hidden relative ">
          <Image src={course.thumbnail_file} alt="product" fill />
        </div>
        <p className="font-semibold text-[15px] ">{course.lesson_name}</p>
      </div>
      <div className="text-black/30 flex justify-between">
        <div className="flex items-center">
          <AiOutlineVideoCamera className="text-[19px]" />
          <p className="text-[14px] ">15 Lessons (10h 5m)</p>
        </div>
        <div>
          <Button className="bg-primary text-white">${course.price}</Button>
        </div>
      </div>
    </>
  );
}
