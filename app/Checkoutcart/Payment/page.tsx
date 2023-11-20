import React, {FunctionComponent, Suspense} from "react";
import PaymentArea from "@/components/Checkout/PaymentArea";
import {cookies} from "next/headers";
import Loading from "@/app/loading";

let jwt = require('jsonwebtoken');

interface PaymentProps {

}

const Payment: FunctionComponent<PaymentProps> = async () => {
    const jabluJwtToken = cookies().get("jablu_jwt_token");
    const userid: {
        userid: string;
    } = jwt.verify(jabluJwtToken?.value!, process.env.JWT_KEY as string);

    return (
        <main>
            <Suspense fallback={<Loading></Loading>}>
            <PaymentArea token={jabluJwtToken?.value!} userid={userid.userid}/>
            </Suspense>

        </main>
    );
}

export default Payment;