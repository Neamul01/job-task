"use client";
import React from "react";
import Layout from "../Layouts/Layout/PageLayout";
import AppLogo from "../common/AppLogo";
import { useActivePaths } from "@/hooks/useActivePaths";

export default function MainNavbar() {
  const activePath = useActivePaths();
  return (
    <>
      {activePath.includes("/admin") ? null : (
        <Layout parentClass="border-b" className="flex items-center px">
          <div className="px-6 md:py-[29px]">
            <AppLogo />
          </div>
        </Layout>
      )}
    </>
  );
}
