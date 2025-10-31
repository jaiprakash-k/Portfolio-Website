"use client"

import { Radar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import React from "react"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

type RadarProps = {
  labels: string[]
  values: number[]
}

export default function SkillsRadar({ labels, values }: RadarProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Proficiency",
        data: values,
        backgroundColor: "rgba(0, 224, 255, 0.2)",
        borderColor: "#00E0FF",
        pointBackgroundColor: "#A26BFF",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#A26BFF",
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        angleLines: { color: "rgba(162, 107, 255, 0.2)" },
        grid: { color: "rgba(0, 224, 255, 0.15)" },
        pointLabels: { color: "#cbd5e1", font: { size: 12 } },
        ticks: { display: false },
      },
    },
  } as const

  return (
    <div className="glass-card p-4">
      <Radar data={data} options={options} />
    </div>
  )
}
