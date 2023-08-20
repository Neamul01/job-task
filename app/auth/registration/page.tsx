"use client";

import Layout from "@/components/Layouts/Layout/PageLayout";
import React from "react";
import { useRouter } from "next/navigation";

const tabs = {
  information: "Information",
  security: "Security",
  confirmation: "Confirmation",
};
export default function Page() {
  const [active, setActive] = React.useState("information");
  const router = useRouter;
  return (
    <Layout className="mt-[100px] ">
      <div className="md:w-[1000px] md:h-[767px] mx-auto ">
        {/* {active === "information" && <InformationTab />}
        {active === "security" && <SecurityTab />}
        {active === "confirmation" && <InformationTab />} */}
      </div>
    </Layout>
  );
}
