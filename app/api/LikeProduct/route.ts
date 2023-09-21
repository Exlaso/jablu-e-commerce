import { InsertWishlist } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const POST = async (req: NextRequest) => {

  try {
    const data: { product_id: string } = await req.json();
    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        error: "true",
        code: "A-LP-I",
      });
    }
    const Decoded_token: {
      userid: string;
    } = jwt.verify(token.value, process.env.JWT_KEY);
    if (!Decoded_token.userid) {
      return NextResponse.json({
        message: "Cookies Are Not Valid",
        error: true,
      });
    }

    const Res = await InsertWishlist(token.value, {
      product_id: data.product_id,
      user_id: Decoded_token.userid,
    });

    if (Res) {
      return NextResponse.json({
        message: "Success",
        error: false,
      });
    } else {
      return NextResponse.json({
        message: "Something Went Wrong",
        error: true,
        code: "A-SN-IV",
      });
    }
  } catch (error) {
      console.error(error);
      
      if (typeof error === "string") {
        console.error("Error in api/LikeProduct: ", error);
        return NextResponse.json(
          { message: error, code: "A-SN-IV", error: true },
          {
            status: 400,
          }
        );
      } else if (error instanceof Error) {
        console.error("Error in api/Signin", error?.message);
        return NextResponse.json(
          { message: error?.message, code: "A-SN-V", error: true },
          {
            status: 400,
          }
        );
      }
  }
};
