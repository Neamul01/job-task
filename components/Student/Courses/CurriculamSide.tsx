import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

export default function CurriculamSide() {
  return (
    <div className="overflow-hidden bg-white p-2 md:p-6 rounded-lg pt-4">
      <h2 className="text-xl font-semibold mb-4">Basics Overview:</h2>
      <div className=" flex flex-col gap-8 ">
        {[1, 2].map((item) => (
          <div key={item} className="flex flex-col gap-4 mt-5">
            <h5 className="text-sm font-semibold text-gray-600">
              COURSE 1 - INTRODUCTION
            </h5>
            <div className="flex flex-col gap-7">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U1
                  </p>
                  <p className="text-sm">Presentation</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U2
                  </p>
                  <p className="text-sm">Job opportunities...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U3
                  </p>
                  <p className="text-sm">How to get the most...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U4
                  </p>
                  <p className="text-sm">How to get the most...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U5
                  </p>
                  <p className="text-sm">Interface and the...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U6
                  </p>
                  <p className="text-sm">Volume with vectors</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U7
                  </p>
                  <p className="text-sm">Symmetry, connector...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="w-8 h-7 rounded-full text-xs bg-gray-300 flex items-center justify-center">
                    U8
                  </p>
                  <p className="text-sm">Add and remove lines...</p>
                </div>
                <TiTick className="text-green-500 text-2xl" />
              </div>
            </div>
          </div>
        ))}
        <p className="bg-gray-100 rounded-xl border-dashed w-full py-6 flex items-center justify-center text-center hover:bg-gray-100 dark:hover:bg-gray-100">
          <div className="flex flex-nowrap gap-2">
            <p className="xl:text-2xl text-xl font-semibold text-black">
              USD 199.00
            </p>
            <del className="xl:text-lg text-base text-gray-400">$250.00</del>
          </div>
        </p>
        <Button className="bg-primary py-3">
          <div className="flex items-center gap-3">
            <BsCartCheck className="text-2xl text-white mr-3" />
            <p className=" text-2xl textt-white">Buy Now</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
