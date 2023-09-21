import { dataforproduct } from "@/lib/Interfaces";
import { GetallCartItems } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {
  try {
    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");

    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        error: "true",
        meta: `t-${token?.value}`,
        code: "A-GCI-I",
      });
    }
    const carts: dataforproduct[] = await GetallCartItems(token.value);
    return NextResponse.json({
      message: carts,
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
