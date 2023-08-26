"use client";
import { Button, Progress } from "flowbite-react";
import React from "react";
import CurricilumTabAccordian from "./CurricilumTabAccordian";
import ReviewCard from "./ReviewCard";

export default function CurriculumTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gray-100 px-2 md:px-10 py-8 flex flex-col rounded-lg">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <small className="text-gray-700 text-xs">Course 1 of 6</small>
            <p className="text-sm">Course 1 - Introduction</p>
          </div>
          <button className="lg:px-8 md:px-4 px-2 py-0 lg:p-2 whitespace-nowrap text-sm lg:text-base bg-primary hover:bg-primary/80 rounded-lg text-white">
            Go to Unit 3
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-5 md:w-1/2 mr-auto">
          <Progress color="yellow" progress={50} size="sm" />
          <small className="text-xs text-gray-700">
            2 completed units of 11 available
          </small>
        </div>
      </div>
      <div className="mt-10">
        <CurricilumTabAccordian />
      </div>
      <div className="border-t-4 pt-6">
        <ReviewCard />
        <ReviewCard />
        <div className="flex flex-col gap-4 mt-6">
          <h4 className="text-xl">Leave a Comment</h4>
          <textarea
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            rows={4}
            placeholder="Write your comment here..."
          ></textarea>
        </div>
      </div>
      <div className="mt-4">
        <Button className="bg-primary" type="submit">
          Publish review
        </Button>
      </div>
    </div>
  );
}
