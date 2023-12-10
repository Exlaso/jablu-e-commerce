import React from "react";
import Logout from "@/components/Account/Password/logout";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {cookies} from "next/headers";
import ProfilePhoto from "@/components/Account/Information/ProfilePhoto";
import InputSection from "@/components/Account/Information/InputSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Account Information - Jablu.in",
    description:
        "Manage your account information at Jablu.in, your trusted E-commerce website. Update your details, preferences, and more. Explore unique clothing with premium designs.",
    keywords: "Jablu.in, E-commerce, Account Information, Account Details, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",
    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Account Information - Jablu.in",
        url: "https://jablu.exlaso.in/Account/Information",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
            "Manage your account information at Jablu.in, your trusted E-commerce website. Update your details, preferences, and more. Explore unique clothing with premium designs.",
    },
    alternates: {
        canonical: "https://jablu.exlaso.in/Account/Information"
    },
};


const Page = async () => {
    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
    const res = await fetch(
        `${process.env.NEXTAUTH_URL}/api/FetchUserDetails?jablu_jwt_token=${token?.value}`
    );

    const data: {
        message: {
            unique_id: string;
            user_email: string;
            user_first_name: string;
            user_last_name: string;
            user_pfp: string;
            user_phone_number: string;
        }[];
        error: boolean;
    } = await res.json();

    const userinfo = data?.message.at(0);

    return (
        <article>
            <div className="flex flex-col gap-1 header ">

                <h1 className="text-4xl font-bold text-center text-highlight">
                    Personal Information
                </h1>
                <p className="text-lg text-center">
                    Set your name, email and phone number
                </p>
            </div>
            <div className="grid grid-cols-2 gap-1 max-md:grid-cols-1">
                <ProfilePhoto imageurl={userinfo?.user_pfp as string} unique_id={userinfo?.unique_id as string}/>
                <div className="flex flex-col gap-5 p-2 ">
                    <h2>Personal Information</h2>
                    <InputSection userinfo={userinfo as {
                        unique_id: string;
                        user_email: string;
                        user_first_name: string;
                        user_last_name: string;
                        user_pfp: string;
                        user_phone_number: string;
                    }}/>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <Logout></Logout>
            </div>
        </article>
    );
};

export default Page;
