"use client";
import React, { useEffect } from "react";

import HeaderStats from "@/components/Admin/Headers/HeaderStats";
import Axios from "@/utils/Axios";

export default function Dashboard() {
  const [statics, setStatics] = React.useState<any>(null);
  useEffect(() => {
    Axios.post("/api/v1/dashboard/statics").then((res) => {
      console.log(res.data.statics);
      setStatics(res.data.statics);
    });
  }, []);
  return (
    <>
      <HeaderStats data={statics} />
    </>
  );
}
