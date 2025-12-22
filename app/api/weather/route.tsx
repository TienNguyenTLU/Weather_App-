import axiosInstance from "@/app/util/axios";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const response = await axiosInstance.get("/current", {
      params: { query: city }
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối" }, { status: 500 });
  }
}
