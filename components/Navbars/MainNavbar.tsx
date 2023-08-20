import React from "react";
import Layout from "../Layouts/Layout/Layout";
import AppLogo from "../common/AppLogo";

export default function MainNavbar() {
  return (
    <Layout parentClass="border-b" className="flex items-center px">
      <div className="px-6 py-[29px]">
        <AppLogo />
      </div>
    </Layout>
  );
}
