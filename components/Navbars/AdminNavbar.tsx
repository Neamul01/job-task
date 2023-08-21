import React from "react";

import UserDropdown from "@/components/Admin/Dropdowns/UserDropdown";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center border-b shadow-sm">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-[100px] px-4 md:py-[22px] py-2 bg-primary">
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
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
