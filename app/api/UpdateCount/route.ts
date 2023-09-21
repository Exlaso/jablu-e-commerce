import { DeleteCartItem, UpdateCart } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
// const jwt = require("jsonwebtoken");
export const PATCH = async (req: NextRequest) => {
  try {
    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        error: "true",
        code: "A-UC-I",
      });
    }
    const body: {
      product_id: string;
      color: string;
      size: string;
      count: number;
      inc: number;
    } = await req.json();

    // const Decoded_token: {
    //     userid: string;
    //   } = jwt.verify(token.value, process.env.JWT_KEY);

    if (body.count + body.inc <= 0) {
      const delres = await DeleteCartItem(token.value, {
        color: body.color,
        product_id: body.product_id,
        size: body.size,
      });

      if (delres === 0) {
        return NextResponse.json({
          message: "Something went wrong while Deleting Cart Item",
          error: true,
        });
      } else {
        return NextResponse.json({
          message: "Successfully Deleted",
          error: false,
        });
      }
    }

    const res: {
      update_cart: {
        affected_rows: number;
      };
    } = await UpdateCart(token.value, {
      color: body.color,
      product_id: body.product_id,
      size: body.size,
      count: body.count + body.inc,
    });

    if (res.update_cart.affected_rows === 0) {
      return NextResponse.json({
        message: "Something went wrong",
        error: true,
      });
    } else {
      return NextResponse.json({
        message: "Successfully Update to " + (body.count + body.inc),
        error: false,
      });
    }
  } catch (error) {
    console.error(error);

    if (typeof error === "string") {
      console.error("Error in api/dislikeProduct: ", error);
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
