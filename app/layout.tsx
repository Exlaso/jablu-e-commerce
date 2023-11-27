import "./output.css";
import "./globals.css";
import type {Metadata, Viewport} from "next";
import {Session} from "next-auth";
import {AuthSessionProvider} from "@/components/Utils/SessionProvider";
import {Toaster} from "sonner";
import React from "react";
import {MTThemeprovider} from "@/utils/MTThemeprovider";
import {Roboto} from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});
 export const viewport: Viewport = {
     width: "device-width",
     initialScale: 1,
 }

export const metadata: Metadata = {
    metadataBase: new URL("https://jablu.exlaso.in"),

    icons: {
        icon: "icon.svg",
    },
    title: "Jablu.in",
    keywords: [
        "Jablu.in",
        "Jablu",
        "Vedant Bhavsar",

        "Exlaso",
        "Jablu.in tshirt",
    ],
    authors: {name: "Vedant bhavsar", url: "https://exlaso.in"},
    description:
        "Welcome to Jablu.in, your premier destination for one-of-a-kind fashion. Discover a world of style at Jablu.in, where we curate a collection of unique clothing with premium designs. From trendy apparel to timeless classics, our E-commerce website offers a diverse range of fashion options to suit your individual taste. Explore the latest in fashion trends and elevate your wardrobe with exclusive pieces. Shop at Jablu.in and redefine your style with every click.",

    openGraph: {
        description:
            "Welcome to Jablu.in, your premier destination for one-of-a-kind fashion. Discover a world of style at Jablu.in, where we curate a collection of unique clothing with premium designs. From trendy apparel to timeless classics, our E-commerce website offers a diverse range of fashion options to suit your individual taste. Explore the latest in fashion trends and elevate your wardrobe with exclusive pieces. Shop at Jablu.in and redefine your style with every click.",
        title: "Jablu.in",
        url: "https://jablu.exlaso.in",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
    },

    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};


export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}, session: Session) {


    return (
        <html lang="en">
        <body className={roboto.className}>
        <AuthSessionProvider session={session}>
            <MTThemeprovider>
                <Toaster position="top-right" richColors/>
                {children}</MTThemeprovider>
        </AuthSessionProvider>
        </body>
        </html>
    );
}
