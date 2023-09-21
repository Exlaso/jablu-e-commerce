import { GetCategories } from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const res = await GetCategories();
    return NextResponse.json({ message: res, error: false });
  } catch (error) {
    if (typeof error === "string") {
      return NextResponse.json({
        message: "Error in api/GetProducts" + error,
        error: true,
      });
    } else if (error instanceof Error) {
      return NextResponse.json({
        message: "Error in api/GetProducts" + error.message,
        error: true,
      });
    }
  }
};
