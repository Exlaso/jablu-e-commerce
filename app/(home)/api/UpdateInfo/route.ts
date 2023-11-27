import { NextRequest, NextResponse } from "next/server";
import { Updateinfo } from "@/lib/db/hasura";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const PATCH = async (request: NextRequest) => {
  try {
    const data: {
      user_phone_number: string;
      user_last_name: string;
      user_first_name: string;
      unique_id: string;
    } = await request.json();

    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token Not Found",
        error: true,
        errorcode: "A-UInfo-II",
      });
    }

    const upload_data = await Updateinfo(token.value, data);
    if (upload_data) {
      return NextResponse.json(
        {
          message: "Success",
          error: false,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Failure",
          error: true,
        },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: error,
      error: true,
      errorcode: "A-UI-I",
    });
  }
};
