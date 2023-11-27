import React, {FunctionComponent} from "react";
import Link from "next/link";
import {CiHome} from "react-icons/ci";
import {MdLocalShipping} from "react-icons/md";

interface typesforClientcard {
    id: string
}

const Clientcard: FunctionComponent<typesforClientcard> = (props) => {
    return <div className={""}>
        <div className={"flex flex-col justify-center w-full  items-center gap-4 py-[15vh]"}>
            <h1 className={"text-4xl font-bold text-center"}>
                Your Order has been successfully placed
            </h1>
            <p>
                Order ID: {props?.id}
            </p>
            <p className={"px-10 text-center"}>
                we will send you a confirmation email shortly.
                Thank you for shopping with us, we hope to see you again soon.

            </p>
            <p>
                You can track your order from the link below
            </p>
            <Link href={`/Orders?orderid=${props?.id}`} className={"p-4 flex  flex-center gap-2 bg-secondary text-primary rounded-lg w-max"}>
                <MdLocalShipping className={"h-6 w-6"}/>
                Track your order!
            </Link>

            <Link href={"/Categories"}
                  className={"p-4 flex  bg-secondary flex-center gap-3 text-primary rounded-lg w-max"}>
                <CiHome className={"h-6 w-6"} /> Back to Home Page
            </Link>

        </div>
    </div>
}
export default Clientcard