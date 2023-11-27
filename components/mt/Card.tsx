"use client"
import {Card, CardBody, CardFooter, CardHeader, Tooltip, Typography,} from "@material-tailwind/react";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export function EcommerceCard({
                                  image,
                                  title,
                                  price,
                                  mrp,
                                  availablecolors

                              }: {
    image: string
    title: string
    price: number
    mrp: number
    availablecolors: {
        hexcode: string
        color: string
    }[]

}) {
    const [isdarkmode, setisdarkmode] = useState<boolean>(true);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        setisdarkmode(darkModeMediaQuery.matches);

        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setisdarkmode]);
    const discount: string = (((mrp - price) / mrp) * 100 * -1).toFixed(0);

    return (
        <Link href={`/Products/${title.replaceAll(" ", "-").toLowerCase()}`}>
            <Card className={` w-[25vw] max-lg:snap-center   max-lg:w-[50vw] max-md:w-[70vw] max-sm:w-[90vw] sm: shrink-0 ${isdarkmode ? "bg-gray-900/50" : "bg-gray-400/50"}`}

            >
                <CardHeader shadow={false} floated={false}
                            className={`h-[40vh] p-5  ${isdarkmode ? "bg-black/50" : "bg-white/50"}  `}>
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className="h-full w-full object-contain bg-transparent "
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between flex-wrap gap-3">
                        <Typography color={isdarkmode ? "white" : "black"} className="font-medium capitalize">
                            {title}
                        </Typography>
                        <div className={"flex gap-2"}>
                            <Typography color={"red"} className=" flex gap-2 font-medium" variant={"small"}>

                                {discount !== "0.0" && (
                                    <s>Rs. {mrp.toLocaleString("en-US", {
                                        maximumFractionDigits: 2,
                                    })}</s>
                                )}
                            </Typography>

                            <Typography color={isdarkmode ? "white" : "black"} className=" flex gap-2 font-medium">


                                Rs.
                                {price.toLocaleString("en-US", {
                                    maximumFractionDigits: 2,
                                })}
                            </Typography>
                        </div>

                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex flex-col mt-5 ">
                    Available Colors:
                    <div className="group mt-2  inline-flex flex-wrap items-center gap-3">

                        {availablecolors.map((item) => (
                                <Tooltip content={item.color} key={item.color}>
            <span
                className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                style={{backgroundColor: item.hexcode}}
            >

            </span>
                                </Tooltip>
                            )
                        )}
                    </div>

                </CardFooter>

            </Card>
        </Link>
    )
        ;
}