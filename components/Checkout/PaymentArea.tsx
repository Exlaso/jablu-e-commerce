"use client"
import React, {FunctionComponent, useState} from "react";
import {useCartContext} from "@/utils/StoreContext";
// import {API_pretransaction} from "@/lib/Interfaces";
// import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {API_AddAddressAndOrder} from "@/lib/Interfaces";
import {useSession} from "next-auth/react";
import {toast} from "sonner";
import Clientcard from "@/components/Checkout/Success/Clientcard";

interface typesforPaymentArea {
    token: string,
    userid: string
}// declare const window: Window & typeof globalThis & { Paytm: { CheckoutJS: { init: (config: any) => Promise<any>; invoke: () => Promise<any>; }
//     }
// }
const PaymentArea: FunctionComponent<typesforPaymentArea> = ({token, userid}) => {
    const router = useRouter();
    const {
        total,
        selectedaddress,
        address1,
        address2,
        shippingmethod,
        region,
        regionstate,
        city,
        pincode,
        phoneno,
        name,
        lastname
        ,products,
        progress,
        savedaddress
    } = useCartContext();
    const [disablebutton, setDisablebutton] = useState<boolean>(false);
    const [issuccess, setissuccess] = useState<boolean>(false);
    const [orderid, setorderid] = useState<string>("");
    if (progress < 3) {
        router.push("./Address")
    }
    // const profile = useSession();


    // async function initiatepayment() {
    //     const orderid = "Order- " + randomUUID();
    //     let amount = 10
    //     const data: API_pretransaction = {orderid, amount, email: profile.data?.user?.email as string};
    //     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/pretransaction`, {
    //         method: "POST",
    //         body: JSON.stringify(data)
    //     });
    //     const d = await res.json();
    //     console.log(d);
    //     let txntoken = ""
    //     const config = {
    //         "root": "",
    //         "flow": "DEFAULT",
    //         "data": {
    //             "orderId": orderid, /* update order id */
    //             "token": txntoken, /* update token value */
    //             "tokenType": "TXN_TOKEN",
    //             "amount": amount /* update amount */
    //         },
    //         "handler": {
    //             "notifyMerchant": function (eventName: any, data: any) {
    //                 console.log("notifyMerchant handler function called");
    //                 console.log("eventName => ", eventName);
    //                 console.log("data => ", data);
    //             }
    //         }
    //     };
    //     window?.Paytm.CheckoutJS.init(config).then(function onSuccess() {
    //         window?.Paytm.CheckoutJS.invoke();
    //     }).catch(function onError(error: string) {
    //         console.log("error => ", error);
    //     });
    // }
    const userdata = useSession();
    const onPaymentSuccess = async () => {
        setDisablebutton(true)
        const a = new Promise((resolve, reject) => {
            const data: API_AddAddressAndOrder = {
                addressid: selectedaddress,
                total: total + shippingmethod.price,
                user_name: userdata.data?.user?.name!,
                email: userdata.data?.user?.email!,
                products:products,
                address1,
                address2,
                shippingmethod,
                region,
                regionstate,
                city,
                pincode,
                phoneno,
                name,
                lastname,
                token,
                progress,
                userid,
                shouldsaveaddress: savedaddress
            }
            fetch("/api/AddAddressAndOrder", {
                method: "POST",
                body: JSON.stringify(data)
            }).then((res) => {
                return res.json()
            }).then((res) => {
                setDisablebutton(false)
                if (res.error) {
                    reject(res.message)
                } else {
                    setissuccess(true);
                    setorderid(res.message)
                    resolve(res)
                }

            }).catch((e) => {
                reject(e.message)
            })
        });
        toast.promise(a, {
            loading: "Placing Order",
            success: "Order Placed",
            error: err => {
                console.log(err)
                return err
            }
        })
    }


    return issuccess ? <Clientcard id={orderid} />:<div>
        {/*<Script type="application/javascript"*/}
        {/*        src={`${process.env.PAYTM_URL}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`}*/}
        {/*        crossOrigin="anonymous"></Script>*/}
        <button disabled={disablebutton} className={"p-4 bg-secondary disabled:brightness-50 duration-300 text-primary rounded-lg"}
                onClick={onPaymentSuccess}
        >
            Pay Rs. {(total + shippingmethod.price).toLocaleString("en-US", {
            maximumFractionDigits: 2,
        })}
        </button>
    </div>
}
export default PaymentArea