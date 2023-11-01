import { AlertRegardingUpdatedPassword } from "@/components/Emailsend";
import { API_Resetpassword } from "@/lib/Interfaces";
import { IsPasswordMatched } from "@/lib/db/hasura";
import { UpdatePasswordDocument } from "@/lib/gql/graphql";
import { gqlClient } from "@/lib/service/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
export const dynamic = "force-dynamic";

export const PATCH = async (req: NextRequest) => {
  const CryptoJS = require("crypto-js");
  try {
    const userprof = await getServerSession();
    const { oldpassword, newpassword, email }: API_Resetpassword =
      await req.json();

    const token = req.cookies.get("jablu_jwt_token");
    if (token?.value) {
      const ispasswordvalid = await IsPasswordMatched(token.value, {
        password: oldpassword,
      });

      if (ispasswordvalid) {
        const updatepass = await gqlClient.request(
          UpdatePasswordDocument,
          {
            user_email: email,
            user_password: CryptoJS.AES.encrypt(
              newpassword,
              process.env.JWT_KEY as string
            ).toString(),
          },
          {
            Authorization: "Bearer " + token.value,
          }
        );

        if (updatepass.update_users?.affected_rows === 1) {
          const resend = new Resend(process.env.RESEND_KEY as string);

          resend.emails.send({
            from: "Jablu.in <Jablu@taskvn.in>",
            to: [email],
            subject:
              "Important: Your Jablu.in Account's Password Has Been Successfully Updated",
            react: AlertRegardingUpdatedPassword({
              name: userprof?.user?.name ?? "User",
            }),
          });

          return NextResponse.json({
            error: false,
            message: "Successfully updated password",
          });
        } else {
          return NextResponse.json({
            error: true,
            message: "Something went wrong updating password",
          });
        }
      } else {
        return NextResponse.json(
          {
            error: true,
            message: "Password is Incorrect",
          },
          {
            statusText: "Invalid Password",
            status: 400,
          }
        );
      }
    } else {
      console.log("api/Gettoken - Token not found");

      return NextResponse.json({ error: true, message: "Token Not Found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return NextResponse.json(
        { error: true, message: error.message },
        {
          status: 500,
          statusText: error.message,
        }
      );
    }
  }
};
