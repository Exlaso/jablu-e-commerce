import Items from "@/components/Favourites/Items";
import { Wishlistitems} from "@/lib/Interfaces";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {cookies} from "next/headers";
import Image from "next/image";
import React from "react";
import {gqlClient} from "@/lib/service/client";
import {GetMyFavouriteDocument} from "@/lib/gql/graphql";
import BackButton from "@/components/Utils/Backbtn";
import {Metadata} from "next";
import NotLoggedin from "@/components/Utils/NotLoggedin";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Your Favorite Items - Jablu.in  ",
    description:
        "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
    keywords:
        "Jablu.in, E-commerce, Favorites, Favorite Items, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",

    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Your Favorite Items - Jablu.in  ",
        url: "https://jablu.exlaso.in/Auth/Favourites",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
            "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
    },
};

const Page = async () => {
    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
    let wishlistdata: Wishlistitems[] = []

    if (token?.value) {

        const favitems = await gqlClient.request(GetMyFavouriteDocument, {}, {
            "Authorization": "Bearer " + token?.value
        })

        wishlistdata = favitems.wishlist_items;
    }

    return (
        <>
            <main className="px-[10%] min-h-screen gap-14 py-[15vh] flex flex-col max-md:px-5 w-full ">
                <div className="grid gap-3 ">
                    <BackButton/>
                    <h1 className="flex items-center text-4xl font-bold exlasi">
                        <Image
                            src={"/static/icons/navbar/buy.svg"}
                            alt={"buy"}
                            width={40}
                            height={40}
                            className="invertsvg"
                        ></Image>
                        Favourites
                    </h1>
                </div>
                <section className="relative flex flex-col items-start justify-between ">
                    <div className="flex flex-col w-full gap-1 ">
                        {(token?.value) ?
                            <Items wishlistdata={wishlistdata}/> :
                            <NotLoggedin title={"Please to access all your Favourited items."} />
                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;
