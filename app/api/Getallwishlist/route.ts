import { dataforproduct } from "@/lib/Interfaces";
import { GetFavouritedItems } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    if (!searchParams.get("jablu_jwt_token")) {
      return NextResponse.json({
        message: "Token cookie Not found",
        errorcode: "TCNF",
        error: "true",
        code: "A-FUD-I",
      });
    }
    const token: string = searchParams.get("jablu_jwt_token") as string; 
    
    const wishlist: dataforproduct[] = await GetFavouritedItems(token);
    return NextResponse.json({
      message: wishlist,
      error: false,
    });
  } catch (error) {
    console.error(error);

    if (typeof error === "string") {
      console.error("Error in api/Getwishlist: ", error);
      return NextResponse.json(
        { message: error, code: "A-SN-IV", error: true },
        {
          status: 400,
        }
      );
    } else if (error instanceof Error) {
      console.error("Error in api/Getwishlist", error?.message);
      return NextResponse.json(
        { message: error?.message, code: "A-SN-V", error: true },
        {
          status: 400,
        }
      );
    }
  }
};
