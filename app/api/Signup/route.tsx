import { IsEmailExists, SignupUser } from "@/lib/db/hasura";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const Validateemail = (e: string) => !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);
const ValidateName = (e: string) => e.length <= 2;
const ValidatePassword = (e: string) => e.length < 8;
export const POST = async (req: Request) => {
  try {
    const { firstname, lastname, email, password } = await req.json();
    if (Validateemail(email)) {
      return NextResponse.json({ message: "Email is Invalid", error: true });
    } else if (ValidateName(firstname)) {
      return NextResponse.json({
        message: "First Name length Must be more than 2 characters",
        error: true,
      });
    } else if (ValidateName(lastname)) {
      return NextResponse.json({
        message: "Last Name length Must be more than 2 characters",
        error: true,
      });
    } else if (ValidatePassword(password)) {
      return NextResponse.json({
        message: "Password length Must be more than 8 characters",
        error: true,
      });
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

    if (!(await IsEmailExists(JwtTokenforemail))) {
      const User_Unique_ID = "Jablu-in-" + randomUUID();

      const res = await SignupUser(JwtTokenforemail, {
        user_first_name: firstname,
        user_last_name: lastname,
        user_email: email,
        user_password: CryptoJS.AES.encrypt(
          password,
          process.env.JWT_KEY as string
        ).toString(),
        isverified: false,
        unique_id: User_Unique_ID,
      });

      return NextResponse.json(
        { message: User_Unique_ID, data: res, error: false },
        {
          status: 200,
          headers: {
            "Set-Cookie": `jablu_jwt_token=${JwtTokenforemail}; Path=/; Expires=Tue, 22 Aug 2023 11:34:37 GMT; Max-Age=604800`,
          },
        }
      );
    } else {
      return NextResponse.json({
        message: "Email Address Already Exist",
        error: true,
      });
    }
  } catch (e) {
    if (typeof e === "string") {
      console.error("Error in api/Signup", e);
      return NextResponse.json(
        { message: e, error: true },
        {
          status: 400,
        }
      );
    } else if (e instanceof Error) {
      console.error("Error in api/Signup", e?.message);
      return NextResponse.json(
        { message: e?.message, error: true },
        {
          status: 400,
        }
      );
    }
  }
};
