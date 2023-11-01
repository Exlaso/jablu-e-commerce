// components/CheckoutForm.tsx
import CheckOutProgress from "@/components/Checkout/Progress";
import React, { ReactNode} from "react";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {gqlClient} from "@/lib/service/client";
import {GetMyCartitemsDocument, GetMyCartitemsQuery} from "@/lib/gql/graphql";
import {ProductSection} from "@/components/Checkout/Product";

const CheckoutForm: React.FC<{ children: ReactNode }> = async ({children}) => {
    const jabluJwtToken = cookies().get("jablu_jwt_token");
    if (!jabluJwtToken?.value) {
        redirect("/")


    }
    const Mycartitems: GetMyCartitemsQuery = await gqlClient.request(GetMyCartitemsDocument, {}, {
        "Authorization": "Bearer " + jabluJwtToken.value
    });

    return (
        <main className="py-[15vh]  md:px-[15vh] max-md:px-[5vw] min-h-screen">
            <section className="h-full   grid grid-cols-[2fr,1.5fr] max-lg:grid-cols-1 gap-4">
                <div className="flex justify-start flex-col  ">
                    <CheckOutProgress/>
                    {children}
                </div>
                <div className=" lg:border-l   h-min max-lg:row-start-1  ">
                    <ul className={"flex flex-col gap-4 lg:px-4 "}>
                        <ProductSection productdata={Mycartitems}/>
                    </ul>
                </div>
            </section>
        </main>
    );
};


export default CheckoutForm;
