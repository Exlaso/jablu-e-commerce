import React from "react";
import Signup from "@/components/Signup/Signup";
import {getServerSession} from "next-auth";
import {Metadata} from "next";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: "Sign up - Jablu.in",
    description:
        " Welcome to Jablu.in, your go-to E-commerce destination. Sign up now to access a world of unique clothing with premium designs.",
    keywords: "Jablu.in, E-commerce, Signin, Jablu, Exlaso, Vedant Bhavsar",
    icons: {
        icon: "https://jablu.exlaso.in/icon.svg",
    },

    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Sign up - Jablu.in",
        url: "https://jablu.exlaso.in/Auth/Signup",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
            "Welcome to Jablu.in, your go-to E-commerce destination. Sign up now to access a world of unique clothing with premium designs.",
    },
    alternates: {
        canonical: "https://jablu.exlaso.in/Auth/Signup",
    },
};


const page = async (props: { searchParams: { callbackUrl: string } }) => {
    const user = await getServerSession();
    if (!!user?.user?.email) {
        redirect(`${process.env.NEXTAUTH_URL}/Account/Information`)
    }
    return <>
        <Signup callbackUrl={props.searchParams.callbackUrl}/>
    </>
}
export default page