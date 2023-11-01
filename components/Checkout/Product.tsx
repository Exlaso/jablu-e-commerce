"use client"
import {GetMyCartitemsQuery} from "@/lib/gql/graphql";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {useMediaQuery} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ProductSection = ({productdata}: {
    productdata: GetMyCartitemsQuery
}) => {
    const [is_view_product_opened, setIs_view_product_opened] = useState<boolean>(false)
    const ispc = useMediaQuery('(min-width:1024px)')
    let total: number = 0
    return <>
        <div onClick={()=> { setIs_view_product_opened(e => !e)}}
            className={"lg:hidden flex justify-between select-none bg-tertiary capitalize w-full p-3 rounded-lg"}>
          <p>

            View Products
          </p>
            <span className={`${is_view_product_opened?"rotate-90":"rotate-0"}   duration-500`}>

            <ChevronRightIcon />
            </span>
        </div>
        <motion.div
            {...(ispc)?{initial:{height: "auto"}}:{initial:{height: 0}}}
            {...(!ispc)?(is_view_product_opened)?{animate:{height: "auto"}}:{animate:{height: 0}}:""}


            className={"flex flex-col gap-2"}>


            {productdata.cart.map((e, i) => {
                total += (e.product.price * e.count)
                return <div
                    className={" overflow-hidden duration-300"} key={i}> {i !== 0 && <hr/>}<ProductCard
                    productdata={e}></ProductCard></div>
            })}
        </motion.div>

        <hr/>
        <div className={"flex flex-col gap-2"}>
            <div className={"flex border-b justify-between border-b-gray-500 "}>
                <span>Subtotal</span>
                <span>Rs. {total.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                })}</span>
            </div>
            <div className={"flex border-b justify-between border-b-gray-500 "}>
                <span>Delivery Charges</span>
                <span>Calculated in Next Step</span>
            </div>
            <div className={"flex sticky border-b justify-between border-b-gray-500 text-lg font-bold "}>
                <span>Total</span>
                <span>Rs. {total.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                })}</span>
            </div>
        </div>
    </>
}
const ProductCard = ({productdata}: {
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
            <Badge badgeContent={productdata.count}
                   color="primary"
                   max={999}>

                <Image
                    className={"rounded-2xl"}
                    src={productdata.product.images ?? ""} alt={productdata.product.title} width={100}
                    height={100}></Image>
            </Badge>
            <div className={"flex flex-col justify-around"}>
                <h3 className={"capitalize"}>{productdata.product.title}</h3>
                <p>{productdata.color}/{productdata.size}</p>
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
