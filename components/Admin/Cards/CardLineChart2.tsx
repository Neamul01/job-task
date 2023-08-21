'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sales value',
      font: { size: 30 },
      color: '#333',
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: '#333',
      },
      title: {
        display: true,
        text: 'Data in month',
        font: { size: 15, weight: 'bold`' },
      },
    },
    y: {
      grid: {
        display: true,
        color: '#333',
      },
    },
  },
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const rawData = [65, 78, 66, 44, 56, 67, 75]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: rawData.map((data, index) => ({ x: labels[index], y: data })),
      borderColor: '#333',
      backgroundColor: 'var(--primary-color)',
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      data: [
        { x: 'January', y: 20 },
        { x: 'February', y: 10 },
      ],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function CardLineChart2() {
  return (
    <Line
      options={options}
      data={data}
      color="#333"
      className="text-white shadow-lg"
    />
  )
}
