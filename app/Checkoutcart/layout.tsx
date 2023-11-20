// components/CheckoutForm.tsx
import CheckOutProgress from "@/components/Checkout/Progress";
import React, {ReactNode, Suspense} from "react";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {gqlClient} from "@/lib/service/client";
import {GetMyCartitemsDocument, GetMyCartitemsQuery} from "@/lib/gql/graphql";
import {ProductSection} from "@/components/Checkout/Product";
import {ContextProvider} from "@/utils/StoreContext";
import Loading from "@/app/loading";
import Link from "next/link";
import CardSection from "@/components/CardSection";
import getAllProducts from "@/utils/GetProduct";

const CheckoutForm: React.FC<{
    children: ReactNode
}> = async ({children}) => {
    const jabluJwtToken = cookies().get("jablu_jwt_token");
    if (!jabluJwtToken?.value) {
        return redirect("/Auth/Signin");
    }
    const Mycartitems: GetMyCartitemsQuery = await gqlClient.request(GetMyCartitemsDocument, {}, {
        "Authorization": "Bearer " + jabluJwtToken.value
    });
    const data = await getAllProducts();

    if (Mycartitems.cart.length === 0) {
        return <div className={"flex flex-col justify-center w-full items-center gap-4 p-[15vh]"}>
            <h1 className={"text-4xl font-bold"}>
                Your Shopping Bag is Empty
            </h1>
            <p>
                Add some items to cart
            </p>
            <Link href={"/Categories"} className={"p-4 bg-secondary text-primary rounded-lg w-max"}>Explore Products
                here</Link>
            <p className={"border-y-2 border-gray-500 my-10 py-2 px-20"}>OR</p>

            <div className="w-full">
                <CardSection
                    data={data?.slice(0, 4)}
                >
                    Related Products
                </CardSection>
            </div>
        </div>
    }

    return (
        <main className="py-[15vh] lg:px-[30vh] md:px-[15vh] max-md:px-[5vw] min-h-screen">
            <section className="h-full   grid grid-cols-[2fr,1.5fr] max-lg:grid-cols-1 gap-4">
                <Suspense fallback={<Loading/>}>
                    <ContextProvider>
                        <div className="flex justify-start flex-col gap-4 ">
                            <CheckOutProgress/>
                            {children}
                        </div>
                        <div className=" lg:border-l   h-min max-lg:row-start-1  ">
                            <ul className={"flex flex-col gap-4 lg:px-4 "}>
                                <ProductSection productdata={Mycartitems}/>
                            </ul>
                        </div>
                    </ContextProvider>
                </Suspense>
            </section>
        </main>
    );
};


export default CheckoutForm;
