import { GetnoofitemsinCart } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {

    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");

    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        errorcode: "TCNF",
        error: "true",
        code: "A-FUD-I",
      });
    }
  
    const res = await GetnoofitemsinCart(token.value);
    
    
    return NextResponse.json({ message: res, error: false });
  } catch (error) {
    if (typeof error === "string") {
      return NextResponse.json({
        message: "Error in api/GetNoofitems" + error,
        error: true,
      });
    } else if (error instanceof Error) {
      return NextResponse.json({
        message: "Error in api/GetNoofitems" + error.message,
        error: true,
      });
    }
  }
};
