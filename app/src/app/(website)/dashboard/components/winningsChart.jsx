"use client"

import dynamic from "next/dynamic"
import React from "react"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import ChartContainer from "./chartContainer"

const meses = [
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
  "enero",
  "febrero",
  "marzo",
]

const state = [
  {
    name: "Ganancias",
    data: [
      39087.17, 51274.17, 40715.16, 38162.3, 43010.9, 57429.98, 60112.07,
      52345.37, 58427.18, 55085.85, 48755.46, 19370.59,
    ],
  },
]

const options = {
  chart: {
    type: "area",
    animations: {
      easing: "linear",
      speed: 300,
    },
    id: "basic-bar",
    foreColor: "gray",
    stacked: false,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    categories: meses,
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

export const WinningsChart = () => {
  return (
    <ChartContainer
      chart={
        <Chart options={options} series={state} type="area" height={325} />
      }
    />
  )
}
