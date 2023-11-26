import {IsPasswordMatched,} from "@/lib/db/hasura";
import {NextRequest, NextResponse} from "next/server";
import {gqlClient} from "@/lib/service/client";
import {IsEmailExistsDocument, RetriveuserdataDocument} from "@/lib/gql/graphql";
import {API_signin, API_signinres} from "@/lib/Interfaces";
import {cookies} from "next/headers";


export const POST = async (req: NextRequest) => {
    const jwt = require("jsonwebtoken");
    try {
        const waitedreq: API_signin = await req.json();
        const {email, password} = waitedreq;

        if (!email) {
            return NextResponse.json(
                {message: "Invalid Email ID", code: "A-SN-VI", error: true},
                {
                    status: 200,
                }
            );
        } else if (!password) {
            return NextResponse.json(
                {message: "Invalid Password", code: "A-SN-VI", error: true},
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

        const Isemailexist_res = await gqlClient.request(IsEmailExistsDocument, {}, {
            "Authorization": "Bearer " + JwtTokenforemail
        })
        if (Isemailexist_res.users.length !== 0) {

            if (Isemailexist_res.users.at(0)?.isverified) {


                const res = await IsPasswordMatched(JwtTokenforemail, {password});


                if (res) {
                    const userinfo = await gqlClient.request(RetriveuserdataDocument,{},{
                        "Authorization": "Bearer " + JwtTokenforemail
                    });
                    const user: {
                        user_first_name: string;
                        user_phone_number: string;
                        user_email: string;
                        unique_id: string
                    } | undefined = userinfo.users.at(0);

                    const JwtToken = jwt.sign(
                        {
                            userid: user?.unique_id,
                            iat: Math.floor(Date.now() / 1000),
                            exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
                            "https://hasura.io/jwt/claims": {
                                "x-hasura-allowed-roles": ["user", "admin", "email"],
                                "x-hasura-default-role": "user",
                                "x-hasura-user-id": `${user?.unique_id}`,
                            },
                        },
                        process.env.JWT_KEY as string
                    );
                    const data:API_signinres = {message: user, error: false}
                    console.log(data)
                    cookies().set("jablu_jwt_token", JwtToken,{
                        maxAge: 60 * 60 * 24 * 7,
                        path: "/",

                    })
                    return NextResponse.json(
                        data
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
                    message: "Verify Your Account to Login",
                    code: "A-SN-III",
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
                {message: e, code: "A-SN-IV", error: true},
                {
                    status: 400,
                }
            );
        } else if (e instanceof Error) {
            console.error("Error in api/Signin", e?.message);
            return NextResponse.json(
                {message: e?.message, code: "A-SN-V", error: true},
                {
                    status: 400,
                }
            );
        }
    }
};
