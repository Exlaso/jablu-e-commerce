import React from 'react'
import {gqlClient} from "@/lib/service/client";
import {GetAddressDocument} from "@/lib/gql/graphql";
import {cookies} from "next/headers";
import  {AddressSection} from "@/components/Account/Addresses/AddressCard";

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