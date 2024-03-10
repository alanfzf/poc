import { NextResponse } from "next/server"

export async function GET(request) {
  const { default: data } = await import("./data.json")
  return NextResponse.json(data)
}
