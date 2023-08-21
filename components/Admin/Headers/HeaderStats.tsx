"use client";
import React from "react";
import { Statics } from "@/types";

import CardStats from "@/components/Admin/Cards/CardStats";
import { AiOutlineBarChart } from "react-icons/ai";

export default function HeaderStats({ data }: { data: Statics[] }) {
  return (
    <>
      <div>
        {/* Card stats */}
        <div className="flex flex-wrap">
          {/* {data.map((item, index) => (
            <div key={index} className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle={item.title}
                statTitle={`${item.total}`}
                statArrow="up"
                statPercent={item.progress}
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName={<AiOutlineBarChart />}
                statIconColor="bg-red-500"
              />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
