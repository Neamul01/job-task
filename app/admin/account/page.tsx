"use client";
import About from "@/components/Admin/Account/About";
import PersonalInfo from "@/components/Admin/Account/PersonalInfo";
import { IUser } from "@/types/User";
import Axios from "@/utils/Axios";
import { Breadcrumb } from "flowbite-react";
import React, { useEffect } from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const [userData, setUserData] = React.useState<any>(null);
  const [user, setUser] = React.useState<IUser | undefined>();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")!) as IUser);

    Axios.get("/api/v1/user/details")
      .then((res) => {
        setUserData(res.data.user_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mt-20 md:mt-0">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            <span className="text-primary">Course</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid xl:grid-cols-12 gap-11 xl:px-12 px-2 py-8 mt-8 rounded-lg">
        <div className="xl:col-span-4">
          <About user={user} />
        </div>
        <div className="xl:col-span-8">
          <PersonalInfo userData={userData} />
        </div>
      </div>
    </div>
  );
}
