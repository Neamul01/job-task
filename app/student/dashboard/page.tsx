"use client";
import React, { useEffect } from "react";
import CardLineChart from "@/components/Student/CardLineChart";

import HeaderStats from "@/components/Admin/Headers/HeaderStats";
import Axios from "@/utils/Axios";
import { IChartData } from "@/types";

export default function Dashboard() {
  const [statics, setStatics] = React.useState<any>(null);
  const [chartData, setChartData] = React.useState<IChartData[]>();
  useEffect(() => {
    Axios.post("/api/v1/dashboard/statics").then((res) => {
      setStatics(res.data.statics);
    });

    Axios.post("/api/v1/dashboard/chart", {
      time_period: "monthly",
    }).then((res) => {
      setChartData(res.data.progress);
    });
  }, []);
  return (
    <>
      <HeaderStats data={statics} />
      {chartData && <CardLineChart chartData={chartData} />}
    </>
  );
}
