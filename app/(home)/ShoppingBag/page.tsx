import Items from "@/components/Shopping/Items";
import BackButton from "@/components/Utils/Backbtn";
import {Metadata} from "next";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {cookies} from "next/headers";
import Image from "next/image";
import React, {FunctionComponent} from "react";
import {GetMyCartDocument} from "@/lib/gql/graphql";
import {gqlClient} from "@/lib/service/client";
import getAllProducts from "@/utils/GetProduct";
import NotLoggedin from "@/components/Utils/NotLoggedin";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "Shopping Bag - Jablu.in",
    description:
        "Your shopping bag at Jablu.in - Explore our E-commerce website's wide selection of unique clothing with premium designs. Review and manage your favorite picks in your shopping cart.",
    keywords: "Jablu.in, E-commerce, Shopping Bag, Cart, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",

    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Shopping Bag - Jablu.in",
        url: "https://jablu.exlaso.in/ShoppingBag",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
            "Your shopping bag at Jablu.in - Explore our E-commerce website's wide selection of unique clothing with premium designs. Review and manage your favorite picks in your shopping cart.",
    },
};

interface CartPageProps {
}

const CartPage: FunctionComponent<CartPageProps> = async () => {
    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
    let Carteddata: {
        color: string,
        count: number,
        product_id: string,
        size: string,
        product: { images: string, title: string, price: number }
    }[] = []
    if (token?.value) {
        const data = await gqlClient.request(GetMyCartDocument, {}, {
            "Authorization": "Bearer " + token?.value
        });
        Carteddata = data.cart;
    }
    const data = await getAllProducts();

    return (
        <section>
            <div className="px-[10%]  min-h-screen gap-14 py-[15vh] max-md:px-5 w-full  flex flex-col ">
                <div className="grid gap-3">
                    <BackButton/>
                    <h1 className="flex items-center text-4xl font-bold exlasi">
                        <Image
                            src={"/static/icons/navbar/buy.svg"}
                            alt={"buy"}
                            width={40}
                            height={40}
                            className="invertsvg"
                        ></Image>
                        Shopping Bag
                    </h1>
                </div>
                <section className="relative flex flex-col items-start justify-between ">
                    {token?.value ?
                        <Items Carteddata={Carteddata}
                        products={data??[]}

                        /> :
                       <NotLoggedin title={"Please Login to access all your Shopping Bag items."} />
                    }

                </section>
            </div>
        </section>
    );
};

export default CartPage;
