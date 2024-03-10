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
]

const total = [2, 6, 1, 17, 70, 83, 12, 63, 51, 19, 2]

const aprob = [1, 2, 0, 12, 38, 18, 2, 11, 5, 1, 1]

const rech = [1, 4, 1, 5, 32, 65, 10, 52, 46, 18, 1]

const state = [
  {
    name: "Total",
    data: total,
  },
  {
    name: "Rechazadas",
    data: rech,
  },
  {
    name: "Aprobadas",
    data: aprob,
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

  colors: ["#808080", "#00e396", "#ff4560"], // Gris para Total, Verde para Aprobadas, Rojo para Rechazadas
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

export const RequestsChart = () => {
  return (
    <ChartContainer
      chart={
        <Chart options={options} series={state} type="area" height={325} />
      }
    />
  )
}
