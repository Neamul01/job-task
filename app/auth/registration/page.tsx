"use client";
import InformationTab from "@/components/Auth/InformationTab";
import Layout from "@/components/Layouts/Layout/Layout";
import React from "react";

const tabs = {
  information: "Information",
  security: "Security",
  confirmation: "Confirmation",
};
export default function Page() {
  const [active, setActive] = React.useState("information");
  return (
    <Layout className="mt-[100px] ">
      <div className="md:w-[1000px] md:h-[767px] mx-auto ">
        <div className="flex gap-4 mb-12">
          {Object.keys(tabs).map((tab, i) => {
            return (
              <div
                key={tab}
                className="flex items-center relative w-full justify-between"
              >
                <div
                  className={`h-12 w-12 rounded-full flex justify-center items-center border text-black cursor-pointer ${
                    active === tab ? " bg-primary text-white" : ""
                  }`}
                  onClick={() => setActive(tab)}
                >
                  {i + 1}
                </div>
                <span className="relative z-10 bg-white px-2">
                  {tabs[tab as keyof typeof tabs]}
                </span>
                <div className="absolute left-16 w-48 h-[1px] bg-gray-900 transform "></div>
              </div>
            );
          })}
        </div>
        {active === "information" && <InformationTab />}
      </div>
    </Layout>
  );
}
