"use client";
import React from "react";

export default function CurriculumTab() {
  return (
    <div>
      <div className="bg-gray-100 px-3 py-5 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <small className="text-gray-700 text-xs">Course 1 of 6</small>
            <p className="text-sm">Course 1 - Introduction</p>
          </div>
          <button className="px-8 py-2 bg-primary hover:bg-primary/80 rounded-lg text-white">
            Go to Unit 3
          </button>
        </div>
      </div>
    </div>
  );
}
