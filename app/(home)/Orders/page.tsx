import React, {FunctionComponent, Suspense} from "react";
import BackButton from "@/components/Utils/Backbtn";
import {cookies} from "next/headers";
import NotLoggedin from "@/components/Utils/NotLoggedin";
import ItemsSection from "@/components/Orders/ItemsSection";
import {gqlClient} from "@/lib/service/client";
import {GetOrdersDocument} from "@/lib/gql/graphql";
import Loading from "@/app/(home)/loading";
import {Metadata} from "next";
import {MdLocalShipping} from "react-icons/md";

interface typesforpage {

}
export const metadata:Metadata =  {
    title: "Orders - Jablu.in",
    keywords: [
        "Jablu.in",
        "Jablu",
        "Jablu.in Account",
        "Jablu.in Orders",
        "Jablu.in Account Orders",
        "Jablu.in Account Order",
    ],
    description: "View your orders history",
    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Orders - Jablu.in",
        url: `https://jablu.exlaso.in/Orders`,
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description: "View your orders history",
    },
}

const page: FunctionComponent<typesforpage> = async () => {

    const token = cookies().get("jablu_jwt_token");
    const Orders = await gqlClient.request(GetOrdersDocument, {},
        {
            "Authorization": "Bearer " + token?.value
        });
    return <section>
        <div className="px-[10%]  min-h-screen gap-14 py-[15vh] max-md:px-5 w-full  flex flex-col ">
            <div className="grid gap-3">
                <BackButton/>
                <h1 className="flex gap-2 items-center text-4xl font-bold exlasi">
                    <MdLocalShipping className={"h-6 w-6"} fontSize={"large"}/>
                    Orders
                </h1>
            </div>
            <section className="relative flex flex-col items-start justify-between ">
                {token?.value ?
                    <Suspense fallback={<Loading/>}>
                        <ItemsSection Orders={Orders} token={token.value}/>
                    </Suspense>
                    :
                    <NotLoggedin title={"Login to view your orders history"}/>
                }

            </section>
        </div>
    </section>

}
export default page