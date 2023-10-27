import { InsertVerifyUrl } from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
export const POST = async (req: NextRequest) => {
  try {
    const { UUID, URL } = await req.json();


    const JwtToken = jwt.sign(
        {
          userid: UUID,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin", "email"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${UUID}`,
          },
        },
        process.env.JWT_KEY as string
      );


    try {
      const res = await InsertVerifyUrl(JwtToken, {
        UUID: UUID,
        verifyurl: URL,
      });
      if (res) {
        return NextResponse.json({
          message: "Success",
          error: "false",
        });
      }
    } catch (error) {
      return NextResponse.json({
        message: "Something went wrong",
        metadata: error,
        error: "true",
        code: "A-IVU-II",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      error: "true",
      code: "A-IVU-II",
    });
  }
};
