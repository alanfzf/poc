"use client"
import dynamic from "next/dynamic"
import React from "react"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import ChartContainer from "./chartContainer"

const state = [
  {
    name: "Series1",
    data: [1, 2, 4, 11, 35, 20, 3, 10, 6, 2],
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
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    categories: [
      "junio",
      "abril",
      "mayo",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
      "febrero",
    ],
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

export const FinancingChart = () => {
  return (
    <ChartContainer
      chart={
        <Chart options={options} series={state} type="area" height={325} />
      }
    />
  )
}
