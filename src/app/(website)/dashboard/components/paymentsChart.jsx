"use client"
import React from "react"
import Chart from "react-apexcharts"
import ChartContainer from "./chartContainer"

// Datos de Amortización
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
const gananciasAmortizacion = [
  39087.17, 51274.17, 40715.16, 38162.3, 43010.9, 57429.98, 60112.07, 52345.37,
  58427.18, 55085.85, 48755.46, 19370.59,
]

const gananciasInteres = [
  80943.66, 160485.06, 79264.08, 80866.59, 104494.59, 82273.3, 106982.58,
  71759.42, 91117.63, 75611.68, 62772.75, 27297.57,
]

const state = [
  {
    name: "Interés",
    data: gananciasInteres,
  },
  {
    name: "Amortización",
    data: gananciasAmortizacion,
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

export const PaymentsChart = () => {
  return (
    <ChartContainer
      chart={
        <Chart options={options} series={state} type="area" height={325} />
      }
    />
  )
}
