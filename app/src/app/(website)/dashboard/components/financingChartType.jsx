"use client"

import dynamic from "next/dynamic"
import React from "react"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import ChartContainer from "./chartContainer"

const state = [
  {
    name: "Series1",
    data: [0, 93, 11, 3],
  },
]

const options = {
  chart: {
    type: "bar",
    animations: {
      easing: "linear",
      speed: 300,
    },
    id: "basic-bar",
    foreColor: "gray",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      distributed: true, // This is needed to apply individual colors
    },
  },
  dataLabels: {
    enabled: false, // This disables the data labels
  },

  xaxis: {
    categories: ["Carro", "Moto", "Mototaxi", "Hipoteca"],
    labels: {
      style: {
        colors: "gray",
      },
    },
    axisBorder: {
      show: false,
      color: "white",
    },
    axisTicks: {
      show: false,
      color: "white",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "gray",
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
    strokeDashArray: 0,
    position: "back",
  },
  stroke: {
    curve: "smooth",
    fill: {
      colors: ["red"],
    },
  },
  // @ts-ignore
  markers: false,
}

export const FinancingTypeChart = () => {
  return (
    <ChartContainer
      chart={<Chart options={options} series={state} type="bar" height={325} />}
    />
  )
}
