"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import NotificationDropdown from "@/components/Admin/Dropdowns/NotificationDropdown";
import UserDropdown from "@/components/Admin/Dropdowns/UserDropdown";
import AppLogo from "@/components/common/AppLogo";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IUser } from "@/types/User";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<IUser>();

  const adminPages = [
    {
      id: 1,
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: AiOutlineHome,
    },
    {
      id: 2,
      name: "Courses",
      href: "/admin/courses",
      icon: AiOutlineUnorderedList,
    },
    {
      id: 3,
      name: "Add New Course",
      href: "/admin/addcourse",
      icon: AiOutlineUnorderedList,
    },
    {
      id: 4,
      name: "Account",
      href: "/admin/account",
      icon: BsPerson,
    },
    {
      id: 5,
      name: "Logout",
      href: "/",
      icon: BiLogOut,
      action: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        console.log("logout");
        router.push("/auth/login");
      },
    },
  ];

  const studentPages = [
    {
      id: 2,
      name: "Dashboard",
      href: "/student/dashboard",
      icon: AiOutlineHome,
    },
    {
      id: 3,
      name: "Courses",
      href: "/admin/courses",
      icon: AiOutlineUnorderedList,
    },
    {
      id: 4,
      name: "Account",
      href: "/admin/account",
      icon: BsPerson,
    },
    {
      id: 5,
      name: "Logout",
      href: "/",
      icon: BiLogOut,
      action: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        console.log("logout");
        router.push("/auth/login");
      },
    },
  ];

  const mapObj = () => {
    return (user?.position === "teacher" && adminPages) || studentPages;
  };

  const adminRoutes = mapObj().map((page) => {
    return (
      <li key={page.id} className="items-center">
        {page.action ? (
          <button
            onClick={page.action}
            className={
              "text-xs uppercase py-3 font-bold flex items-center my-4 text-white pl-3 w-full"
            }
          >
            <page.icon
              className={
                "mr-2 text-sm text-white " +
                (path.indexOf(page.href) !== -1 ? "opacity-75" : "")
              }
            ></page.icon>
            {page.name}
          </button>
        ) : (
          <Link
            href={page.href}
            className={
              "text-xs uppercase py-3 font-bold flex items-center my-4 text-white pl-3" +
              (path.indexOf(page.href) !== -1
                ? " bg-white/20 rounded-lg"
                : " hover:text-secondary")
            }
          >
            <page.icon
              className={
                "mr-2 text-sm text-white " +
                (path.indexOf(page.href) !== -1 ? "opacity-75" : "")
              }
            ></page.icon>
            {page.name}
          </Link>
        )}
      </li>
    );
  });

  const collapseMenu = (
    <button
      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      onClick={() => setCollapseShow(!collapseShow)}
    >
      <i className="fas fa-bars"></i>i
    </button>
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl md:h-screen bg-gradient-to-tr from-[#9C41D1] to-[#418CD1] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between md:justify-normal w-full mx-auto">
          {/* Toggler */}
          {collapseMenu}
          {/* Brand logo */}
          <AppLogo />
          {/* Divider */}
          <hr className="my-4 md:min-w-full" />

          <div className="hidden md:flex flex-col gap-4">
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {adminRoutes}
            </ul>
          </div>

          {/* ******************mobile */}
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          {collapseShow === false ? null : (
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded py-3 md:px-6 px-2 pt-0 bg-gray-400"
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-8 mt-4 border-b border-solid bg-primary">
                <div className="flex flex-wrap justify-between">
                  <div className="flex justify-end">{collapseMenu}</div>
                  <AppLogo />
                </div>
              </div>
              {/* Form */}
              <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                  />
                </div>
              </form>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                {adminRoutes}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
