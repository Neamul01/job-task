import Image from "next/image";
import React from "react";

interface User {
  name: string;
  positon: string;
}
export default function About({ user }: { user: User }) {
  console.log(user);
  return (
    <div className="lg:px-9 px-3 py-12 shadow-xl rounded-lg">
      <div className="h-[200px] w-[200px] relative flex justify-center items-center ">
        <Image src={"/"} alt="profile" fill />
      </div>
      <h2 className="lg:text-h3 text-2xl font-semibold text-center lg:mb-12 mb-6 mt-[37px]">
        {user ? user?.name : "Dr. Johirul Islam Nishat"}
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="lg:text-2xl text-xl">About</h3>
          <p className="text-secondary/30 text-sm md:text-base">
            Hello I am Dr. Johirul Islam Nishat a Teacher in Job Task E-learning
            Platform. I love to study with all my Team and professors.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="lg:text-2xl text-xl">Age</h3>
            <p className="lg:text-[18px] text-sm text-black/50 ">17</p>
          </div>
          <div className="flex flex-col">
            <h3 className="lg:text-2xl text-xl">Gender</h3>
            <p className="lg:text-[18px] text-sm text-black/50 ">Male</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="lg:text-2xl text-xl">Date Of Birth</h3>
          <p className="text-black/30">02/05/2006</p>
        </div>
      </div>
    </div>
  );
}
