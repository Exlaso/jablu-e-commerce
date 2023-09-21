import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = (req: NextRequest) => {
  try {
    cookies().delete("jablu_jwt_token");
    return NextResponse.json({ message: "Success", error: false });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: error, error: true, code: "A-DC-I" });
  }
};
