import Image from "next/image";
import React from "react";

interface User {
  name: string;
  positon: string;
}
export default function About({ user }: { user: User }) {
  console.log(user);
  return (
    <div className="px-5 py-12 shadow-xl">
      <div className="h-[200px] w-[200px] relative flex justify-center items-center ">
        <Image src={"/"} alt="profile" fill />
      </div>
      <h2 className="text-h3 text-center mb-12 mt-[37px]">
        {user ? user?.name : "Neamul"}
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl">About</h3>
          <p className="text-secondary/30">
            Hello I am Dr. Johirul Islam Nishat a Teacher in Job Task E-learning
            Platform. I love to study with all my Team and professors.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-2xl">Age</h3>
            <p className="text-[18px] text-black/20 ">17</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl">Gender</h3>
            <p className="text-[18px] text-black/20 ">Male</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl">Date Of Birth</h3>
          <p className="text-black/30">02/05/2006</p>
        </div>
      </div>
    </div>
  );
}
