"use client";
import React, { useEffect, useState } from "react";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IUser } from "@/types/User";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const [user, setUser] = useState<IUser>();
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setUser(JSON.parse(user));
      console.log(user);
    } else {
      return;
    }
  }, []);

  const userName = () => {
    if (user) {
      if (user?.full_name?.length > 10) {
        return user.full_name.slice(0, 10) + "...";
      }
      return user?.full_name;
    }
  };

  return (
    <>
      {/* Navbar */}

      <Navbar rounded className="bg-primary hidden md:block sticky top-0 z-20">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center border-b shadow-sm">
          <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap xl:px-[100px] px-4 md:py-[22px] py-2 bg-primary">
            {/* Form */}
            <form className="md:flex hidden flex-row flex-wrap items-center md:w-[1000px] md:h-[56px] mr-3">
              <div className="relative flex w-full flex-wrap items-stretch rounded-lg overflow-hidden">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-whiterounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
            {/* User */}
            <div className="flex justify-end gap-2 md:order-2 w-64">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <div className="flex flex-col text-white">
                <p className="capitalize ">{userName()}</p>
                <small className="text-xs capitalize">{user?.position}</small>
              </div>
              <Dropdown
                inline
                label={""}
                color={"white"}
                className="text-white relative rounded-md text-sm font-medium w-28"
              >
                <Dropdown.Header className="flex flex-col gap-2 justify-start p-1 ">
                  <p className="block text-sm capitalize text-left px-3 py-1 bg-gray-100 w-full">
                    {user?.full_name}
                  </p>
                  <p className="block text-sm capitalize text-left px-3 py-1 bg-gray-100 w-full">
                    {user?.position}
                  </p>
                </Dropdown.Header>
                <div className="w-full p-1">
                  <button
                    className="py-2 rounded-lg text-xs text-center w-full bg-secondary "
                    onClick={() => {
                      localStorage.removeItem("user");
                      localStorage.removeItem("access_token");
                      console.log("logout");
                      router.push("/auth/login");
                    }}
                  >
                    Log out
                  </button>
                </div>
              </Dropdown>
              <Navbar.Toggle />
            </div>
          </div>
        </nav>
      </Navbar>
      {/* End Navbar */}
    </>
  );
}
