import { Label } from "flowbite-react";
import React from "react";

export default function OtherInfo() {
  return (
    <form>
      <h3 className="xl:text-h3 font-semibold text-2xl">Other Information</h3>
      <div className="flex flex-col gap-8 mt-4">
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="fullName"
              value="Tags "
              className="xl:text-2xl md:text-xl"
            />
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="fullName"
              value="Lesson Name "
              className="xl:text-2xl md:text-xl"
            />
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="fullName"
              value="Description / Overview "
              className="xl:text-2xl md:text-xl"
            />
          </div>
          <textarea
            rows={5}
            name="fullName"
            id="fullName"
            placeholder="Type here... "
            className="border w-full rounded-lg xl:px-4 xl:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent p-6 flex justify-start "
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label
              htmlFor="fullName"
              value="Price "
              className="xl:text-2xl md:text-xl"
            />
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="$ "
            className="border w-full rounded-lg xl:px-4 xl:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
    </form>
  );
}
