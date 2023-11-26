import {NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";
import {gqlClient} from "@/lib/service/client";
import {GetVerificationUrlDocument} from "@/lib/gql/graphql";
import {Emailsendinterface} from "@/lib/Interfaces";
import {CreateEmailResponse} from "resend/build/src/emails/interfaces";

export const GET = async (req: NextRequest) => {
    try {
        const {searchParams} = new URL(req.url);
        const email = searchParams.get("email")
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
        const res = await gqlClient.request(GetVerificationUrlDocument, {}, {
            "Authorization": "Bearer " + JwtTokenforemail
        })
        if (res.verificationurls.length === 0) {

                return NextResponse.json({message: `Something went wrong`, error: true})
        } else {
            const emailsenddata: Emailsendinterface = {
                to: email as string,
                Body: {
                    Firstname: res.verificationurls.at(0)?.user_verify.user_first_name as string,
                    verifyurl: res.verificationurls.at(0)?.verifyurl as string
                },
                Subject: "Verify Your Email Address on Jablu.in"
            }
            const emailres = await fetch(`${process.env.NEXTAUTH_URL}/api/emailsend`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailsenddata),
            });
            const createemailres: CreateEmailResponse = await emailres.json()
            if (createemailres.id) {

                return NextResponse.json({message: `Verification Mail is Successfully Sent to ${email}`, error: false})
            } else {
                return NextResponse.json({message: `Something went wrong`, error: true})

            }
        }

    } catch (e) {
        if (e instanceof Error){

        return NextResponse.json({message: e.message, error: true})
        }

    }

}