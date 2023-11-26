import { isProductLiked } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const product_id = searchParams.get("product_id");
  try {
    if (!product_id) {
      return NextResponse.json({
        message: "Product Id Not Specified",
        error: "true",
        code: "A-IPL-VIII",
      });
    }

    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        errorcode:"TCNF",
        error: "true",
        code: "A-IPL-I",
      });
    }

    const Res = await isProductLiked(token.value, {
      product_id: product_id as string,
    });

    return NextResponse.json({
      message: Res,
      error: false,
    });
  } catch (error) {
    console.error(error);

    if (typeof error === "string") {
      console.error("Error in api/IsProductLiked", error);
      return NextResponse.json(
        { message: error, code: "A-SN-IV", error: true },
        {
          status: 400,
        }
      );
    } else if (error instanceof Error) {
      console.error("Error in api/dislikeProduct", error?.message);
      return NextResponse.json(
        { message: error?.message, code: "A-SN-V", error: true },
        {
          status: 400,
        }
      );
    }
  }
};
