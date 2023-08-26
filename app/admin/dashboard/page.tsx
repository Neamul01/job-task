"use client";
import React, { useEffect, useState } from "react";

import HeaderStats from "@/components/Admin/Headers/HeaderStats";
import Axios from "@/utils/Axios";

export default function Dashboard() {
  const [statics, setStatics] = React.useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.post("/api/v1/dashboard/statics").then((res) => {
      console.log(res.data.statics);
      setStatics(res.data.statics);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <HeaderStats loading={loading} data={statics} />
    </>
  );
}
