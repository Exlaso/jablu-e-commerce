import { GetUserDetails } from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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
    
    const userinfo: {
      unique_id:string,
      user_email: string;
      user_first_name: string;
      user_last_name: string;
      user_pfp: string;
      user_phone_number: string;
    }[] = await GetUserDetails(token);

    return NextResponse.json({
      message: userinfo,
      error: false,
    });
  } catch (error) {
    console.error("Error in api/FetchUserDetails: ", error);

    if (typeof error === "string") {
      return NextResponse.json(
        { message: error, code: "A-FUD-IV", error: true },
        {
          status: 400,
        }
      );
    } else if (error instanceof Error) {
      console.error("Error in api/FetchUserDetails", error?.message);
      return NextResponse.json(
        { message: error?.message, code: "A-FUD-V", error: true },
        {
          status: 400,
        }
      );
    }
  }
};
