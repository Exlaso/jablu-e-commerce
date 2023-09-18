import { IsEmailExists, IsPasswordMatched } from "@/lib/db/hasura";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export const POST = async (req: Request) => {
  try {
    const waitedreq = await req.json();
    const { email, password } = waitedreq;
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

      if (res) {
        return NextResponse.json(
          { message: "success", data: res, error: false },
          {
            status: 200,
            headers: {
              "Set-Cookie": `token=${JwtTokenforemail}; Path=/; Expires=Tue, 22 Aug 2023 11:34:37 GMT; Max-Age=604800`,
            },
          }
        );
      } else {
        return NextResponse.json({
          message: "Incorrect Credentials",
          error: true,
        });
      }
    } else {
      return NextResponse.json({
        message: "Account Do Not Exists",
        error: true,
      });
    }
  } catch (e) {
    if (typeof e === "string") {
      console.error("Error in api/Signin", e);
      return NextResponse.json(
        { message: e, error: true },
        {
          status: 400,
        }
      );
    } else if (e instanceof Error) {
      console.error("Error in api/Signin", e?.message);
      return NextResponse.json(
        { message: e?.message, error: true },
        {
          status: 400,
        }
      );
    }
  }
};