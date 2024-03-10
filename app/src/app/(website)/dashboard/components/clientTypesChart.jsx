"use client"

import dynamic from "next/dynamic"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
import ChartContainer from "./chartContainer"

// For a pie chart, the series should just be an array of numbers
const series = [65, 42] // Assuming these are the values you want to display

const options = {
  chart: {
    type: "pie", // Change this to 'pie' to display a pie chart
    animations: {
      easing: "linear",
      speed: 300,
    },
    id: "basic-pie",
    foreColor: "gray",
    toolbar: {
      show: false,
    },
  },

  colors: ["#00e396", "#ff4560"], // Gris para Total, Verde para Aprobadas, Rojo para Rechazadas
  stroke: {
    width: 0, // Set the stroke width to 0 to remove borders
  },
  labels: ["Solventes", "Morosos"], // Labels are used directly in pie charts
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: true, // Disables the data labels on the pie chart
  },
  // No need for xaxis, yaxis, plotOptions, stroke, and markers in pie chart config
}

export const ClientTypesChart = () => {
  return (
    <ChartContainer
      chart={
        <Chart options={options} series={series} type="pie" height={325} />
      }
    />
  )
}
