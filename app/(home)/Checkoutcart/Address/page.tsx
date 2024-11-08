
import React from "react";
import {Inputform} from "@/components/Checkout/Inputform";
import {cookies} from "next/headers";
import {gqlClient} from "@/lib/service/client";
import {GetAddressDocument} from "@/lib/gql/graphql";
export const dynamic = "force-dynamic";

const CheckoutForm: React.FC = async () => {
    const token = (await cookies()).get("jablu_jwt_token");
    const Addresses = await gqlClient.request(GetAddressDocument, {}, {
        "Authorization": "Bearer " + token?.value,
    });


    return <section className={"flex gap-4 flex-col w-full py-4"}>

        <Inputform Addresses={Addresses}/>
    </section>
};

export default CheckoutForm;
