import { GetCartItems, UpdateCart } from "./../../../lib/db/hasura";
import { Product } from "@/lib/Interfaces";
import { InsertintoCart } from "@/lib/db/hasura";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const POST = async (req: NextRequest) => {
  try {
    const token: RequestCookie | undefined = req.cookies.get("jablu_jwt_token");
    if (!token?.value) {
      return NextResponse.json({
        message: "Token cookie Not found",
        error: "true",
        code: "A-IIC-I",
        errorcode:"TCNF"
      });
    }
    const Decoded_token: {
      userid: string;
    } = jwt.verify(token.value, process.env.JWT_KEY);
    const body = await req.json();

    const res = await GetCartItems(token.value, {
      color: body.color,
      product_id: body.product_id,
      size: body.size,
    });
    if (res.length !== 0) {
      const update_res = await UpdateCart(token.value, {
        color: body.color,
        count: body.count + res.at(0).count,
        product_id: body.product_id,
        size: body.size
      });

      return NextResponse.json({
        message: update_res,
        error: false,
      });
    }

    const Cartlist: Product[] = await InsertintoCart(token.value, {...body,user_id:Decoded_token.userid});
    return NextResponse.json({
      message: Cartlist,
      error: false,
    });
  } catch (error) {
    console.error(error);

    if (typeof error === "string") {
      console.error("Error in api/Insertintocart: ", error);
      return NextResponse.json(
        { message: error, code: "A-SN-IV", error: true },
        {
          status: 400,
        }
      );
    } else if (error instanceof Error) {
      console.error("Error in api/Insertintocart", error?.message);
      return NextResponse.json(
        { message: error?.message, code: "A-SN-V", error: true },
        {
          status: 400,
        }
      );
    }
  }
};
