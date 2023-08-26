"use client";
import { Progress } from "flowbite-react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function CardStats({
  statSubtitle = "Traffic",
  statTitle = "350,897",
  statArrow = "up",
  statPercent = 3.48,
  statPercentColor = "text-emerald-500",
  statDescripiron = "Since last month",
  statIconName = "",
  IconBgColor = "",
  statIconColor = "bg-white",
}: CardStats) {
  return (
    <>
      <div className="relative xl:w-[358px] h-[200px] lg:px-6 px-2 lg:py-7 flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-2xl">
        <div className="flex flex-col justify-between h-full p-4">
          <div className="flex flex-wrap">
            <div className="relative w-auto pr-4 flex-initial">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  `}
                style={{ background: IconBgColor }}
              >
                {statIconName}
              </div>
            </div>
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <span className="font-semibold text-xl text-secondary/80">
                {statSubtitle === "total_revenue" ? "$" + statTitle : statTitle}
              </span>
              <h5 className="capitalize font-bold text-xs">{statSubtitle}</h5>
            </div>
          </div>
          {statPercent ? (
            <div className="text-sm  justify-between mt-4">
              <div className="w-5/6 inline-block">
                <Progress progress={statPercent} />
              </div>
              <span className={statPercentColor + " "}>
                <i
                  className={
                    statArrow === "up"
                      ? "fas fa-arrow-up"
                      : statArrow === "down"
                      ? "fas fa-arrow-down"
                      : ""
                  }
                ></i>{" "}
                {statPercent}%
              </span>
            </div>
          ) : (
            <p className="text-xs text-blue-400 flex items-center gap-3 cursor-pointer">
              <span>View Course</span> <AiOutlineArrowRight />
            </p>
          )}
        </div>
      </div>
    </>
  );
}

type CardStats = {
  IconBgColor: string;
  statSubtitle: string;
  statTitle: string;
  statArrow: "up" | "down";
  statPercent: number;
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: string;
  statDescripiron: string;
  statIconName: any;
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: string;
};
