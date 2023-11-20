import React, {FunctionComponent} from "react";
import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

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
            <Link href={`/Orders?orderid=${props?.id}`} className={"p-4 flex gap-1 bg-secondary text-primary rounded-lg w-max"}>
                <LocalShippingRoundedIcon/>
                Track your order!
            </Link>

            <Link href={"/Categories"}
                  className={"p-4 flex gap-1 bg-secondary text-primary rounded-lg w-max"}>
                <HomeRoundedIcon/> Back to Home Page
            </Link>

        </div>
    </div>
}
export default Clientcard