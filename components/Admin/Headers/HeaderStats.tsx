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
        <div className="grid md:grid-cols-12 lg:gap-2">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-full md:col-span-6 xl:col-span-4 px-4"
            >
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
          ))}
        </div>
      </div>
    </>
  );
}
