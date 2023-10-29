import { AlertRegardingUpdatedPassword } from "@/components/Emailsend";
import { API_UpdatePassword_Body } from "@/lib/Interfaces";
import { fetchGraphQLUsingDocs } from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const CryptoJS = require("crypto-js");

export const PATCH = async (req: NextRequest) => {
  try {
    const { token, user_password, user_email }: API_UpdatePassword_Body =
      await req.json();
    const FGQLres: {
      data: {
        update_users: {
          affected_rows: number;
          returning: { user_first_name: string }[];
        };
      };
    } = await fetchGraphQLUsingDocs(
      `mutation UpdatePassword($user_password: String = "", $user_email: String = "") {
                    update_users(where: {user_email: {_eq: $user_email}}, _set: {user_password: $user_password}) {
                      affected_rows
                      returning {
                        user_first_name
                      }
                    }
                  }
                  `,
      "UpdatePassword",
      token,
      {
        user_password: CryptoJS.AES.encrypt(
          user_password,
          process.env.JWT_KEY as string
        ).toString(),
        user_email,
      }
    );

    if (FGQLres.data.update_users.affected_rows === 1) {
      const resend = new Resend(process.env.RESEND_KEY as string);

      resend.emails.send({
        from: "Jablu.in <Jablu@taskvn.in>",
        to: [user_email],
        subject: "Important: Your Jablu.in Account's Password Has Been Successfully Updated",
        react: AlertRegardingUpdatedPassword({
          name: FGQLres?.data?.update_users?.returning?.at(0)?.user_first_name as string,
        }),
      });

      return NextResponse.json({ message: true, error: false });
    } else {
      return NextResponse.json({
        message: "Something went wrong",
        error: true,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error, error: true });
  }
};
