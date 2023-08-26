"use client";
import React, { use, useEffect, useState } from "react";

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { useRouter } from "next/navigation";

export default function Admin({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>();
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setUser(user);
    } else {
      router.push("/auth/login");
      console.log("user inside admin", user);
    }
  }, [router]);

  return (
    <>
      {user && (
        <div className="bg-white">
          <Sidebar />
          <div className="relative md:ml-60 bg-secondary/80">
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
      )}
    </>
  );
}
