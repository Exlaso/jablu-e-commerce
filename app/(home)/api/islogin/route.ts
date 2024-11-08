import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  if ((await cookies()).get("__Secure-next-auth.session-token")) {
    if (!(await cookies()).get("jablu_jwt_token")) {
      return NextResponse.json({
        islogin: false,
        message: "Found __Secure-next-auth.session-token but no Jablu Token",
      });
    }
  }
  if ((await cookies()).get("next-auth.session-token")) {
    if (!(await cookies()).get("jablu_jwt_token")) {
      return NextResponse.json({
        islogin: false,
        message: "Found next-auth.session-token but no Jablu Token",
      });
    }
  }

  return NextResponse.json({    islogin: true, message: "Found No Tokens" });
};
