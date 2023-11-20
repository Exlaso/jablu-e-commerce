"use client"
import {FunctionComponent, useState} from "react";
import {GetOrdersQuery, UpdateOrderStatusDocument} from "@/lib/gql/graphql";
import Image from "next/image";
import {motion} from "framer-motion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {gqlClient} from "@/lib/service/client";
import {toast} from "sonner";

interface typesforItemsSection {
    token: string,
    Orders: GetOrdersQuery
}

interface Items {
    order_id: string;
    address_id: string;
    user_id: string;
    status: string;
    order_date: any;
    shipping_method: any;
    total: number;
    address: {
        address1: string;
        address2: string;
        city: string;
        firstname: string;
        lastname: string;
        phoneno: string;
        pincode: string;
        region: string;
        regionstate: string
    };
    order_products: Array<{
        color: string;
        count: string;
        order_id: string;
        product_id: string;
        size: string;
        product: { title: string; images: string; price: number }
    }>

}

const StatusRes = (status: string) => {
    switch (status) {
        case "placed":
            return <div className={"flex gap-1 justify-center items-center flex-col max-md:flex-row"}>
                <Image src={"/static/icons/accepted.svg"} alt={"Placed"} width={50} className={"invert-0 dark:invert"}
                       height={50}></Image>
                Order Placed
            </div>
        case "dispatched":
            return <div className={"flex gap-1 justify-center items-center flex-col max-md:flex-row"}>
                <Image src={"/static/icons/dispatched.svg"} alt={"Dispatched"} width={50}
                       className={"invert-0 dark:invert"} height={50}></Image>
                Order Dispatched
            </div>
        case "delivered":
            return <div className={"flex gap-1 justify-center items-center flex-col max-md:flex-row"}>
                <Image src={"/static/icons/delivered.svg"} alt={"Delivered"} width={50}
                       className={"invert-0 dark:invert"} height={50}></Image>
                Order Delivered
            </div>
        case "cancelled":
            return <div className={"flex gap-1 justify-center items-center flex-col max-md:flex-row"}>
                <Image src={"/static/icons/cancelled.svg"} alt={"Cancelled"} width={50}
                       className={"invert-0 dark:invert"} height={50}></Image>
                Order Cancelled
            </div>
        default:
            return <div className={"flex gap-1 justify-center items-center flex-col max-md:flex-row"}>
                <Image src={"/static/icons/accepted.svg"} alt={"Placed"} width={50} className={"invert-0 dark:invert"}
                       height={50}></Image>
                Order Placed
            </div>


    }
}
const ItemsSection: FunctionComponent<typesforItemsSection> = (props) => {
    const {Orders} = props

    return <div className={"w-full"}>
        <ul className={"w-full flex flex-col gap-6"}>
            {Orders.orders.sort((a, b) => {
                return new Date(b.order_date).getTime() - new Date(a.order_date).getTime()

            }).map((e: Items) => {
                return <li key={e.order_id}>
                    <ProductCard ogorder={e} token={props.token}/>
                </li>
            })}
        </ul>
    </div>
}

const ProductCard = ({ogorder, token}: { ogorder: Items, token: string }) => {
    const [order, setorder] = useState<Items>(ogorder);
    const CancelOrder = (orderid: string) => {
        const gqlres = new Promise(
            (resolve, reject) => {
                gqlClient.request(UpdateOrderStatusDocument, {
                    order_id: orderid,
                    status: "cancelled"
                }, {
                    "Authorization": "Bearer " + token
                }).then((e) => {
                    if (!e.update_orders?.affected_rows) {
                        reject(e)
                    }else{
                    if (e?.update_orders?.affected_rows > 0) {
                        resolve(e)
                    } else {
                        reject(e)
                    }
                    }
                }).catch(
                    (e) => {
                        reject(e)
                    }
                )
            }
        )
        toast.promise(gqlres, {
            loading: "Cancelling Order",
            success: () => {
                setorder(e => {
                    return {...e, status: "cancelled"}
                })
                return ("Order Cancelled")
            },
            error: err => {
                console.log(err);
                return "Error Cancelling Order"
            }

        })

    }
    const [isopen, setisopen] = useState<boolean>(false);
    return <motion.section
        initial={"closed"}
        animate={isopen ? "opened" : "closed"}
        onClick={() => {
            setisopen(e => !e)
        }}
        key={order.order_id}
        className={"p-5    rounded-md border border-gray-500/50  "}>
        <div className="flex gap-3 max-sm:flex-col justify-between">
            <Image src={order.order_products.at(0)?.product?.images ?? "/static/shuz.jpg"}

                   className={"object-contain"}
                   alt={order.order_products.at(0)?.product.title ?? "product image"}
                   width={100}
                   height={100}
            />
            <div className={"flex justify-center items-start flex-col gap-2 w-full"}>
                <h2 className={"capitalize text-2xl font-semibold"}>
                    {order.order_products.length > 1 ? order?.order_products?.at(0)?.product.title + ` + ${order.order_products.length - 1} Other Products` : order.order_products.at(0)?.product.title}
                </h2>
                <p>
                    Order ID: {order.order_id}
                </p>
                <p>
                    Total Items: {order.order_products.length} items
                </p>
                <p>
                    Order Date: {new Date(order.order_date).toLocaleString()}
                </p>
            </div>
            <div
                className={"flex flex-col text-xl   font-semibold justify-evenly mx-auto  items-center w-max whitespace-nowrap flex-nowrap "}>
                Rs. {(order.total).toLocaleString("en-IN")}
                {StatusRes(order.status)}
            </div>
        </div>
        <motion.div
            variants={{
                closed: {
                    height: 0,
                    opacity: 0
                },
                opened: {
                    height: "auto",
                    opacity: 1
                }
            }}
        >
            <br/>
            <div className={"flex flex-col gap-2"}>
                <h2 className={"text-xl text-highlight "}>Shipping Method</h2>
                <fieldset className={"first:rounded-t-2xl last:rounded-b-2xl"}>
                    <label key={order.shipping_method.title} htmlFor={order.shipping_method.title}
                           className={` flex-col  w-full flex p-4 gap-3 ${order.shipping_method.title === order.shipping_method.title ? "border-blue-400/50" : "border-gray-500/50"}  border first:rounded-t-2xl last:rounded-b-2xl `}>
                        <div className={"flex gap-2"}>
                            <h3 className={"text-lg font-semibold  text-highlight"}>{order.shipping_method.title}</h3>
                        </div>
                        <div className={"flex justify-between "}>
                            <p>{order.shipping_method.description}</p>
                            <span className={"text-highlight font-bold"}>Rs. {order.shipping_method.price}
                        </span>
                        </div>
                    </label>
                </fieldset>
            </div>
            <br/>
            <div>
                <h2 className={"text-xl text-highlight "}>Order Summary</h2>
                <br/>
                <div className={"flex flex-col gap-2 capitalize"}>
                    {order.order_products.map((ex) => {
                        return <div key={ex.product_id}
                                    className={"flex gap-2 max-md:flex-col justify-between  items-start"}>
                            <div className={"flex gap-2  "}>
                                <Image src={ex.product.images ?? "/static/shuz.jpg"}

                                       className={"object-contain"}
                                       alt={ex.product.title ?? "product image"}
                                       width={100}
                                       height={100}
                                />
                                <div className={"flex flex-col gap-1"}>
                                    <h3 className={"text-lg font-semibold  text-highlight"}>{ex.product.title}</h3>
                                    <div className={"flex flex-col gap-2 "}>
                                        <span className="flex gap-2">
                                            <span className={"text-highlight font-bold"}>Rs. {ex.product.price}
                                        </span>
                                        <span className={"text-highlight font-bold"}>x {ex.count}
                                        </span>
                                        <span>
                                            {ex.color}/{ex.size}
                                        </span>
                                        </span>
                                        <span
                                            className={"hidden max-md:flex text-xl font-semibold  justify-center items-center w-min whitespace-nowrap flex-nowrap "}>
                                            Rs. {(ex.product.price * parseInt(ex.count)).toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"flex max-md:hidden text-xl font-semibold  justify-center items-center w-min whitespace-nowrap flex-nowrap "}>
                                Rs. {(ex.product.price * parseInt(ex.count)).toLocaleString("en-IN")}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <br/>
            <div className={"flex justify-between gap-4"}>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"text-xl text-highlight "}>Shipping Address</h2>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-2"}>
                            <span className={"text-highlight font-bold"}>Name: </span>
                            <span>{ogorder.address.firstname} {ogorder.address.lastname}</span>
                        </div>
                        <div className={"flex gap-2"}>
                            <span className={"text-highlight font-bold"}>Address: </span>
                            <span>{ogorder.address.address1}, {ogorder.address.address2}, {ogorder.address.city}, {ogorder.address.pincode}, {ogorder.address.regionstate}, {ogorder.address.region}</span>
                        </div>
                        <div className={"flex gap-2"}>
                            <span className={"text-highlight font-bold"}>Phone No: </span>
                            <span>{ogorder.address.phoneno}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 my-5">

                <button className={"p-2 bg-secondary text-primary rounded-lg w-max disabled:brightness-50"}
                        disabled={true}>Track Order
                </button>
                {
                    order.status !== "cancelled" && <button className={"p-2 bg-secondary text-primary rounded-lg w-max disabled:brightness-50"}
                                                            disabled={false}
                                                            onClick={() => {
                                                                CancelOrder(ogorder.order_id);
                                                            }}

                    >Cancel Order
                    </button>
                }
            </div>

        </motion.div>
        <div className="w-full flex justify-center items-center">

            {isopen ?
                <>
                    <KeyboardArrowUpIcon/>
                    Collapse
                </>
                :
                <>

                    <KeyboardArrowDownIcon/>Expand to see more</>
            }
        </div>
    </motion.section>
}
export default ItemsSection