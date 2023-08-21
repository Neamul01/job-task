"use client";
import About from "@/components/Admin/Account/About";
import PersonalInfo from "@/components/Admin/Account/PersonalInfo";
import { useUserContext } from "@/contexts/userContext";
import Axios from "@/utils/Axios";
import { Breadcrumb } from "flowbite-react";
import React, { useEffect } from "react";
import { HiHome } from "react-icons/hi";

export default function Page() {
  const [userData, setUserData] = React.useState<any>(null);
  const { user } = useUserContext();
  useEffect(() => {
    Axios.get("/api/v1/user/details")
      .then((res) => {
        setUserData(res.data.user_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            <p>Dashboard</p>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Course</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="grid lg:grid-cols-12 gap-11 lg:px-12 px-2 py-8 mt-8 shadow-lg rounded-lg">
        <div className="lg:col-span-4">
          <About user={user} />
        </div>
        <div className="lg:col-span-8">
          <PersonalInfo userData={userData} />
        </div>
      </div>
    </div>
  );
}
