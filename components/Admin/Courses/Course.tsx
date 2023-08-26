import { ICourse } from "@/types";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";

export default function Course({ course }: { course: ICourse }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/admin/courses/${course.lesson_name}`)}
      className="xl:col-span-3 lg:col-span-6  h-[340px] p-2  flex flex-col justify-between shadow-lg rounded-lg bg-white cursor-pointer"
    >
      <div className="w-full">
        <div className="2xl:w-[322px] xl:w-[220px] lg:w-[312px] xl:h-[200px] h-[215px] rounded-lg overflow-hidden relative animation-parent">
          <Image src={"/course.png"} alt="product" fill />
          <p className="px-2 py-1 bg-white text-black text-xs capitalize rounded-lg absolute top-3 right-2 z-10">
            4D Animation
          </p>
          <div className="w-full h-full hover:bg-gray-100/40 transition-all absolute left-0 top-0 z-10 animation-child"></div>
        </div>
        <p className="font-semibold text-[15px] mt-2">{course.lesson_name}</p>
      </div>
      <div className="text-black/30 flex justify-between md:px-2 w-full">
        <div className="flex items-center gap-1">
          <AiOutlineVideoCamera className="text-xs" />
          <p className="text-xs ">15 Lessons (10h 5m)</p>
        </div>
        <div>
          <Button className="bg-primary py-0 text-sm text-white">
            ${course.price}
          </Button>
        </div>
      </div>
    </div>
  );
}
