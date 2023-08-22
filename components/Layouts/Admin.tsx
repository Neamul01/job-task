import React from "react";

// components

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import HeaderStats from "@/components/Admin/Headers/HeaderStats";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Sidebar />
      <div className="relative md:ml-64 bg-secondary/80">
        <AdminNavbar />
        {/* Header */}

        <div className="relative  pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            {/* <HeaderStats /> */}
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto md:pt-48 w-full -m-24 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
