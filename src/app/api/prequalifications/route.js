import { NextResponse } from "next/server"

export async function GET(request) {
  const { default: data } = await import("./data.json")

  // data.forEach((element) => {
  //   element["Porcentaje de aprobación"] = Math.floor(Math.random() * 101)
  // })

  return NextResponse.json(data)
}
