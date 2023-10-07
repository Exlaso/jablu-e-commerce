import {
  IsEmailExists,
  IsPasswordMatched,
  Retriveuserdata,
} from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const POST = async (req: NextRequest) => {
  try {
    const waitedreq = await req.json();
    const { email, password } = waitedreq;

    if (!email) {
      return NextResponse.json(
        { message: "Invalid Email ID", code: "A-SN-VI", error: true },
        {
          status: 200,
        }
      );
    } else if (!password) {
      return NextResponse.json(
        { message: "Invalid Password", code: "A-SN-VI", error: true },
        {
          status: 200,
        }
      );
    }

    const JwtTokenforemail = jwt.sign(
      {
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user", "admin", "email"],
          "x-hasura-default-role": "email",
          "x-hasura-email-id": `${email}`,
        },
      },
      process.env.JWT_KEY as string
    );

    if (await IsEmailExists(JwtTokenforemail)) {
      const res = await IsPasswordMatched(JwtTokenforemail, { password });
      const userinfo = await Retriveuserdata(JwtTokenforemail);

      const JwtToken = jwt.sign(
        {
          userid: userinfo?.unique_id,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin", "email"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${userinfo?.unique_id}`,
          },
        },
        process.env.JWT_KEY as string
      );

      if (res) {
        return NextResponse.json(
          { message: userinfo, data: res, code: "A-SN-I", error: false },
          {
            status: 200,
            headers: {
              "Set-Cookie": `jablu_jwt_token=${JwtToken}; Path=/;  Max-Age=605800`,
            },
          }
        );
      } else {
        return NextResponse.json({
          message: "Incorrect Credentials",
          code: "A-SN-II",
          error: true,
        });
      }
    } else {
      return NextResponse.json({
        message: "Account Do Not Exists",
        code: "A-SN-III",
        error: true,
      });
    }
  } catch (e) {
    if (typeof e === "string") {
      console.error("Error in api/Signin", e);
      return NextResponse.json(
        { message: e, code: "A-SN-IV", error: true },
        {
          status: 400,
        }
      );
    } else if (e instanceof Error) {
      console.error("Error in api/Signin", e?.message);
      return NextResponse.json(
        { message: e?.message, code: "A-SN-V", error: true },
        {
          status: 400,
        }
      );
    }
  }
};
