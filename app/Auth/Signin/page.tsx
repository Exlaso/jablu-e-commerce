import { getServerSession } from "next-auth";
import Signin from "@/components/Signin/Signin";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign in - Jablu.in",
    description:
        "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
    keywords: "Jablu.in, E-commerce, Signin, Jablu, Exlaso, Vedant Bhavsar",
    icons: {
        icon: "https://jablu.exlaso.in/icon.svg",
    },

    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Sign in - Jablu.in",
        url: "https://jablu.exlaso.in/Auth/Signin",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
            "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
    },
    alternates: {
        canonical: "https://jablu.exlaso.in/Auth/Signin",
    },
};

const SignIn = async (e: { searchParams: Promise<{ callbackUrl: string }> }) => {
    const callbackUrl = (await e?.searchParams)?.callbackUrl;
    const user = await getServerSession();


    if (!!user?.user?.email) {
        redirect(`${process.env.NEXTAUTH_URL}/Account/Information`)
    }
    return (
        <>
            <Signin callbackUrl={callbackUrl} />
        </>
    );
};
export default SignIn;
