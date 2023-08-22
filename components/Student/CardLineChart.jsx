"use client";

import React from "react";
import { Chart, registerables } from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    Chart.register(...registerables);
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: true,
            tension: 0.4,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: true,
            tension: 0.4,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white",
            },
            grid: {
              display: false,
              borderDash: [2],
              // borderDashOffset: [2],
              color: "rgba(255,255,255,.7)",
              zeroLineColor: "rgba(255,255,255,.7)",
              // zeroLineBorderDash: [2],
              // zeroLineBorderDashOffset: [2],

              // color: 'rgba(33, 37, 41, 0.3)',
              borderColor: "rgba(255,255,255,.7)",
              borderDash: [2],
              drawBorder: false,
            },
          },

          y: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white",
            },
            grid: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255,255,255,.7)",
              zeroLineColor: "rgba(255,255,255,.7)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        },
      },
    };
    var ctx = document?.getElementById("line-chart")?.getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full my-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="capitalize text-blueGray-100 mb-1 text-xs font-semibold">
                Your Daily Progress
              </h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[386px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
