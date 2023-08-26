"use client";
import React from "react";
import { Statics } from "@/types";
import { FaRegLightbulb } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";

import CardStats from "@/components/Admin/Cards/CardStats";
import { AiOutlineBarChart } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { BsFlag } from "react-icons/bs";
import Loading from "@/components/common/Loading";

const titleToIconMapping: any = {
  1: <TiDocumentText />,
  2: <FaRegLightbulb />,
  3: <GrLineChart />,
  4: <BsFlag />,
};
const titleToIconBgColor: any = {
  1: "linear-gradient(225deg, #BB65FF 0%, #4C6FFF 100%)",
  2: "linear-gradient(225deg, #FFA674 0%, #FF3737 100%)",
  3: "linear-gradient(225deg, #FF974D 0%, #FFE925 100%)",
  4: "linear-gradient(180deg, #20AF62 0%, #17E783 100%)",
};

export default function HeaderStats({
  data,
  loading,
}: {
  data: Statics[];
  loading?: boolean;
}) {
  return (
    <>
      {loading ? (
        <Loading height="16" width="16" />
      ) : (
        <div>
          {/* Card stats */}
          <div className="grid md:grid-cols-12 lg:gap-2">
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-full md:col-span-6 xl:col-span-4 2xl:col-span-3 px-4"
              >
                <CardStats
                  statSubtitle={item.title}
                  statTitle={`${item.total}`}
                  statArrow="up"
                  IconBgColor={titleToIconBgColor[item.id]}
                  statPercent={item.progress}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName={
                    titleToIconMapping[item.id] || <AiOutlineBarChart />
                  }
                  statIconColor="bg-red-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
