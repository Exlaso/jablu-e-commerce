import {  ResetPassword } from "@/components/Emailsend";
import { fetchGraphQLUsingDocs } from "@/lib/db/hasura";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    const jwt = require("jsonwebtoken");
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    if (email === null) {
      return NextResponse.json({ error: true, message: "email not found" });
    }
    const JwtTokenforemail: string = jwt.sign(
      {
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000 +( 3600 * 24)),
        email,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user", "admin", "email"],
          "x-hasura-default-role": "email",
          "x-hasura-email-id": `${email}`,
        },
      },
      process.env.JWT_KEY as string
    );

    const FGQLRes: { data: { users: { user_first_name: string }[] } } =
      await fetchGraphQLUsingDocs(
        `query IsEmailExists($email: String) {
      users(where: {user_email: {_eq: $email}}) {
        user_first_name
      }
    } `,
        "IsEmailExists",
        JwtTokenforemail,
        { email }
      );
    if (FGQLRes.data.users.length === 0) {
      return NextResponse.json({ error: true, message: `Account with ${email} not found` });
    } else {
      const resend = new Resend(process.env.RESEND_KEY as string);

      const data = await resend.emails.send({
        from: "Jablu.in <Jablu@taskvn.in>",
        to: [email],
        subject: "Reset Password Request for Your Jablu.in Account",
        react: ResetPassword({
          name: FGQLRes.data.users.at(0)?.user_first_name as string,
          url:
            process.env.NEXTAUTH_URL +
            `/Auth/ResetPassword?token=${JwtTokenforemail}`,
        }), 
      });
      if (data.id) {
        return NextResponse.json({
          error: false,
          message: true
        });
        
      }else{
        return NextResponse.json({
          error: true,
          message: "Something Went Wrong"
        });
        
      }
    }
  } catch (error) {
    return NextResponse.json({ error: true, message: error });
  }
};
