import { GetUserImage } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");
    if (!token) {
      return NextResponse.json({
        message: "Token Cookie Not Found",
        error: true,
        errorcode:"TCNF"
      });
    }
    const res: string = await GetUserImage(token.value);
    return NextResponse.json({ message: "success", data: res, error: false });
  } catch (e) {
    if (typeof e === "string") {
      console.error("Error in api/Signin", e);
      return NextResponse.json(
        { message: e, error: true },
        {
          status: 400,
        }
      );
    } else if (e instanceof Error) {
      console.error("Error in api/Signin", e?.message);
      return NextResponse.json(
        { message: e?.message, error: true },
        {
          status: 400,
        }
      );
    }
  }
};
