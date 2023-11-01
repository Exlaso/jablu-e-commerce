import Items from "@/components/Shopping/Items";
import BackButton from "@/components/Utils/Backbtn";
import {Product} from "@/lib/Interfaces";
import {Metadata} from "next";
import {signOut} from "next-auth/react";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {cookies} from "next/headers";
import Image from "next/image";
import {FunctionComponent} from "react";
import {GetMyCartDocument} from "@/lib/gql/graphql";
import {gqlClient} from "@/lib/service/client";

export const metadata: Metadata = {
    title: "Shopping Bag - Jablu.in",
    description:
        "Your shopping bag at Jablu.in - Explore our E-commerce website's wide selection of unique clothing with premium designs. Review and manage your favorite picks in your shopping cart.",
    keywords: "Jablu.in, E-commerce, Shopping Bag, Cart, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",

    metadataBase: new URL("https://jabluu.vercel.app"),
    openGraph: {
        title: "Shopping Bag - Jablu.in",
        url: "https://jabluu.vercel.app/ShoppingBag",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jabluu.vercel.app/icon.svg",
        description:
            "Your shopping bag at Jablu.in - Explore our E-commerce website's wide selection of unique clothing with premium designs. Review and manage your favorite picks in your shopping cart.",
    },
};

interface CartPageProps {
}

const CartPage: FunctionComponent<CartPageProps> = async () => {
    const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
    if (!token?.value) {
        signOut();
    }
    const data = await gqlClient.request(GetMyCartDocument, {}, {
        "Authorization": "Bearer " + token?.value
    });
    const Carteddata = data.cart;
    return (
        <>
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
                    <Items Carteddata={Carteddata}/>
                </section>
            </div>
        </>
    );
};

export default CartPage;
