import React from 'react'
import {gqlClient} from "@/lib/service/client";
import {GetAddressDocument} from "@/lib/gql/graphql";
import {cookies} from "next/headers";
import {AddressSection} from "@/components/Account/Addresses/AddressCard";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Addresses - Jablu.in",
    keywords: [
        "Jablu.in",
        "Jablu",
        "Jablu.in Account",
        "Jablu.in Addresses",
        "Jablu.in Account Addresses",
        "Jablu.in Account Address",
    ],
    alternates: {
        canonical: "https://jablu.exlaso.in/Account/Addresses"
    },
    description: "Edit or Remove your saved addresses",
    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Account - Jablu.in",
        url: `https://jablu.exlaso.in/Account/Addresses`,
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description: "Edit or Remove your saved addresses",
    },
}
const Page = async () => {
    const token = cookies().get("jablu_jwt_token")
    const addresses = await gqlClient.request(GetAddressDocument, {}, {
        Authorization: `Bearer ${token?.value}`
    })

    return (
        <div>
            <div className="flex flex-col gap-1 header">
                <h1 className="text-4xl font-bold text-center text-highlight">
                    Addresses
                </h1>
                <p className="text-lg text-center">
                    Edit or Remove your saved addresses
                </p>

                <AddressSection addresses={

                    addresses.addresses

                } token={token?.value!}

                />
            </div>
        </div>
    )
}

export default Page