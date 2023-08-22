"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageLayout from "@/components/Layouts/Layout/PageLayout";
import { useActivePaths } from "@/hooks/useActivePaths";

const tabs = {
  information: "information",
  security: "security",
  confirmation: "confirmation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<string | undefined>("information");
  const router = useRouter();
  const path = usePathname();
  const activePaths = useActivePaths();

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
    <PageLayout className="md:my-[100px] my-10 ">
      <div className="md:w-[1000px] md:h-[767px] mx-auto ">
        {activePaths.includes("/login") ? null : (
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mb-12">
            {Object.keys(tabs).map((tab, i) => {
              return (
                <div
                  key={tab}
                  className="flex items-center relative w-3/5 md:w-full justify-between"
                >
                  <div
                    className={`md:h-12 md:w-12 h-6 w-6 rounded-full flex justify-center items-center border text-black cursor-pointer ${
                      active === tab ? " bg-primary text-white" : ""
                    }`}
                    onClick={() => handleClick(tab)}
                  >
                    {i + 1}
                  </div>
                  <span className="relative z-10 bg-white px-2 capitalize">
                    {tabs[tab as keyof typeof tabs]}
                  </span>
                  <div className="absolute md:left-16 left-6 md:w-48 w-16 h-[1px] bg-gray-900 transform "></div>
                </div>
              );
            })}
          </div>
        )}
        {children}
      </div>
    </PageLayout>
  );
}
