"use client"
import {GetMyCartitemsQuery} from "@/lib/gql/graphql";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useCartContext} from "@/utils/StoreContext";
import {Badge} from "@material-tailwind/react";
import {FaChevronRight} from "react-icons/fa6";

export const ProductSection = ({productdata}: {
    productdata: GetMyCartitemsQuery
}) => {


    const {shippingmethod, progress, total, setTotal, setproducts} = useCartContext()
    useEffect(() => {
        setTotal(0);
        setproducts(productdata.cart);
        productdata.cart.map(e => setTotal(ex => (ex + (e.product.price * e.count))))
    }, [productdata, setTotal, setproducts])
    const [is_view_product_opened, setIs_view_product_opened] = useState<boolean>(false)
    const [ispc, setispc] = useState<boolean>(false);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(min-width:1024px)');
        const changeHandler = () => setispc(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        setispc(darkModeMediaQuery.matches);

        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setispc])
    return <section>
        <div onClick={() => {
            setIs_view_product_opened(e => !e)
        }}
             className={"lg:hidden flex  justify-between select-none bg-tertiary capitalize w-full p-3 rounded-lg"}>
            <p>

                View Products
            </p>
            <span className={`${is_view_product_opened ? "rotate-90" : "rotate-0"}   duration-500`}>

            <FaChevronRight className={"h-4 w-4"}/>
            </span>
        </div>
        <motion.div
            {...(ispc) ? {initial: {height: "auto"}} : {initial: {height: 0}}}
            {...(!ispc) ? (is_view_product_opened) ? {animate: {height: "auto"}} : {animate: {height: 0}} : ""}


            className={"flex flex-col gap-2"}>


            {productdata.cart.map((e, i) => {
                return <div
                    className={" overflow-hidden duration-300"} key={i}> {i !== 0 && <hr/>}<ProductCard
                    productdata={e}></ProductCard></div>
            })}
        </motion.div>

        <hr/>
        <div className={"flex flex-col gap-2 sticky bottom-4 bg-primary border border-gray-500/50 p-4 rounded-md "}>
            <div className={"flex border-b justify-between border-b-gray-500/50 "}>
                <span>Subtotal</span>
                <span>Rs. {(total).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                })}</span>
            </div>
            <div className={"flex border-b justify-between border-b-gray-500/50 "}>
                <span>Delivery Charges</span>
                {progress <= 1 ? <span>Calculated in Next Step</span> :
                    <span>Rs. {shippingmethod.price.toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                    })}</span>

                }
            </div>
            <div className={"flex sticky border-b justify-between border-b-gray-500/50 text-lg font-bold "}>
                <span>Total</span>
                <span>Rs. {(total + shippingmethod.price).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                })}</span>
            </div>
        </div>
    </section>
}
export const ProductCard = ({productdata}: {
    productdata: {
        color: string,
        count: number,
        size: string,
        product_id: string,
        product: {
            images: string,
            price: number,
            title: string
        }
    }
}) => {
    return (<section className={"flex pt-4 gap-2 justify-between px-2 "}>
        <div className={"flex gap-2"}>
            <Badge
                content={productdata.count}
                color="cyan"
            >

                <Image
                    className={"rounded-lg border-gray-500/50 border p-1 aspect-square object-contain"}
                    src={productdata.product.images ?? "/static/shuz.png"} alt={productdata.product.title} width={80}
                    height={80}></Image>
            </Badge>
            <div className={"flex flex-col justify-around"}>
                <h3 className={"capitalize"}>{productdata.product.title}</h3>
                <p className={"uppercase"}>{productdata.color}/{productdata.size}</p>
            </div>
        </div>
        <div className={" flex justify-center items-center"}>
            <p>
                Rs. {(productdata.product.price * productdata.count).toLocaleString("en-US", {
                maximumFractionDigits: 2,
            })}
            </p>
        </div>
    </section>)
}
