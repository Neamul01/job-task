"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageLayout from "@/components/Layouts/Layout/PageLayout";

const tabs = {
  information: "information",
  security: "security",
  confirmation: "confirmation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<string | undefined>("information");
  const router = useRouter();
  const path = usePathname();

  const handleClick = (tab: string) => {
    console.log(tab);
    switch (tab) {
      case tabs.information:
        router.push("/auth/registration/information");
        break;
      case tabs.security:
        router.push("/auth/registration/security");
        break;
      case tabs.confirmation:
        router.push("/auth/registration/confirmation");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setActive(path.split("/").pop());
  }, [path]);

  return (
    <PageLayout className="mt-[100px] ">
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
                  onClick={() => handleClick(tab)}
                >
                  {i + 1}
                </div>
                <span className="relative z-10 bg-white px-2 capitalize">
                  {tabs[tab as keyof typeof tabs]}
                </span>
                <div className="absolute left-16 w-48 h-[1px] bg-gray-900 transform "></div>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </PageLayout>
  );
}
