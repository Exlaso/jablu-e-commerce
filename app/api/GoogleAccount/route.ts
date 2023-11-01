import { GoogleAccountBody } from "@/lib/Interfaces";
import { fetchGraphQLUsingAdmin } from "@/lib/db/hasura";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
  const jwt = require("jsonwebtoken");
  const CryptoJS = require("crypto-js");
  try {
    const body: GoogleAccountBody = await req.json();
    if (body.key !== process.env.JWT_KEY) {
      return NextResponse.json({
        error: true,
        message: "Invalid Key or Key not Found",
        errorcode: "A-GA-II",
      });
    }
    const hasura_res: { data: { users: { unique_id: string }[] } } =
      await fetchGraphQLUsingAdmin(
        "IsgoogleaccountExists",
        { useremail: body.email },
        `query IsgoogleaccountExists($useremail: String = "") {
            users(where: {user_email: {_eq: $useremail}}) {
              unique_id
            }
          }
          `
      );

    if (hasura_res?.data?.users.length === 0) {
      const User_Unique_ID = "Google-" + randomUUID();
      const hasura_signup_res: {
        data: { insert_users_one: { unique_id: string } };
      } = await fetchGraphQLUsingAdmin(
        "InsertGoogleAccount",
        {
          user_email: body.email,
          user_first_name: body.given_name,
          user_last_name: body.name,
          user_password: CryptoJS.AES.encrypt(
            User_Unique_ID,
            process.env.JWT_KEY as string
          ).toString(),
          unique_id: User_Unique_ID,
          user_pfp: body.picture,
        },
        `mutation InsertGoogleAccount($unique_id: String = "", $user_email: String = "", $user_first_name: String = "", $user_last_name: String = "", $user_password: String = "", $user_pfp: String = "") {
                insert_users_one(object: {unique_id: $unique_id, user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password, user_pfp: $user_pfp, isverified: true}) {
                  unique_id
                }
              }`
      );

      if (!hasura_signup_res?.data?.insert_users_one.unique_id) {
        return NextResponse.json({
          error: true,
          message: "Something Went Wrong Signup With Google acount",
          errorcode: "A-GA-I",
        });
      } else {
        const JwtToken = jwt.sign(
          {
            userid: hasura_signup_res?.data?.insert_users_one?.unique_id,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
            "https://hasura.io/jwt/claims": {
              "x-hasura-allowed-roles": ["user", "admin", "email"],
              "x-hasura-default-role": "user",
              "x-hasura-user-id": `${hasura_signup_res?.data?.insert_users_one?.unique_id}`,
            },
          },
          process.env.JWT_KEY as string
        );

        return NextResponse.json(
          {
            error: false,
            message: JwtToken,
          },
          {
            status: 200,
            headers: {
              "Set-Cookie": `jablu_jwt_token=${JwtToken}; Path=/;  Max-Age=605800`,
            },
          }
        );
      }
    } else {
      const JwtToken = jwt.sign(
        {
          userid: hasura_res?.data?.users?.at(0)?.unique_id,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin", "email"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${hasura_res?.data?.users?.at(0)?.unique_id}`,
          },
        },
        process.env.JWT_KEY as string
      );
      return NextResponse.json(
        {
          error: false,
          message: JwtToken,
        },
        {
          status: 200,
          headers: {
            "Set-Cookie": `jablu_jwt_token=${JwtToken}; Path=/;  Max-Age=605800`,
          },
        }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: true, message: `error: ${error}` });
  }
};
