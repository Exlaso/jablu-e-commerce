import { NextRequest, NextResponse } from "next/server";
import { UploadImage } from "@/lib/db/hasura";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const POST = async (request: NextRequest) => {
  try {
    const {
      url,
      unique_id,
    }: {
      url: string;
      unique_id: string;
    } = await request.json();

    const token: RequestCookie | undefined = (await cookies()).get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token Not Found",
        error: true,
        errorcode: "A-UI-II",
      });
    }

    const upload_data = await UploadImage(token.value, {
      unique_id: unique_id,
      user_pfp: url,
    });
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
