import React from "react";
import SelectFile from "./SelectFile";
import { Button } from "flowbite-react";

export default function FileUpload() {
  return (
    <form>
      <h3 className="text-h3">File Upload</h3>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col ">
          <p className="mb-[21px]">Main Course File</p>
          <SelectFile height={"300px"} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-xl">Thumbnail File</p>
          <SelectFile height={"70px"} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-xl">Introduction File</p>
          <SelectFile height={"70px"} />
        </div>
      </div>
    </form>
  );
}
