import { IUser } from "@/types/User";
import Image from "next/image";
import React from "react";

export default function About({ user }: { user: IUser | undefined }) {
  console.log(user);
  return (
    <div className="lg:px-9 px-3 py-12 shadow-xl rounded-lg bg-white">
      <div className="h-[200px] w-[200px] mx-auto relative">
        <Image src={"/person.png"} alt="profile" fill />
      </div>
      <h2 className="xl:text-h3 text-2xl font-semibold text-center xl:mb-12 mb-6 mt-[37px] capitalize">
        {user ? user?.full_name : "Dr. Johirul Islam Nishat"}
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="xl:text-xl text-lg">About</h3>
          <p className="text-secondary/30 text-sm md:text-sm">
            Hello I am Dr. Johirul Islam Nishat a Teacher in Job Task E-learning
            Platform. I love to study with all my Team and professors.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="xl:text-xl text-lg">Age</h3>
            <p className="text-sm text-black/50 ">17</p>
          </div>
          <div className="flex flex-col">
            <h3 className="xl:text-xl text-lg">Gender</h3>
            <p className="text-sm text-black/50 ">Male</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="xl:text-xl text-lg">Date Of Birth</h3>
          <p className="text-black/30 text-sm">02/05/2006</p>
        </div>
      </div>
    </div>
  );
}
