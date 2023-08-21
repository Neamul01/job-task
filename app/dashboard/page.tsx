import React from "react";

// components

import CardLineChart from "@/components/Admin/Cards/CardLineChart";
import CardBarChart from "@/components/Admin/Cards/CardBarChart";
import CardPageVisits from "@/components/Admin/Cards/CardPageVisits";
import CardSocialTraffic from "@/components/Admin/Cards/CardSocialTraffic";

// layout for page

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart2 /> */}
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">{<CardBarChart />}</div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
