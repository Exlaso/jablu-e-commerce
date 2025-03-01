"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import { Product } from "@/lib/Interfaces";
export function ProductCard({
  images,
  title,
  price,
  mrp,
  id,
  product_colors,
}: Product) {
  const [isdarkmode, setisdarkmode] = useState<boolean>(true);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", changeHandler);

    setisdarkmode(darkModeMediaQuery.matches);

    return () =>
      darkModeMediaQuery.removeEventListener("change", changeHandler);
  }, [setisdarkmode]);
  const discount: string = (((mrp - price) / mrp) * 100 * -1).toFixed(0);

  return (
    <motion.div layoutId={id}>
      <Link
        href={`/Products/${title.replaceAll(" ", "-").toLowerCase()}`}
        className={"shrink-0  "}
      >
        {/*<BackgroundGradient*/}
        {/*  className={" h-full w-full "}*/}
        {/*  containerClassName={"p-2 h-full w-full "}*/}
        {/*>*/}
        <Card
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className={`  h-full w-full   ${isdarkmode ? "bg-gray-900/50" : "bg-gray-400/50"}`}
        >
          <CardHeader
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            shadow={false}
            floated={false}
            className={`max-md:h-[calc(22vh+22vw)] h-[calc(15vh+15vw)] bg-[#C3E2C2af]  aspect-1 object-cover    `}
          >
            <Image
              src={images}
              alt={title}
              width={300}
              height={300}
              className="h-full w-full object-contain bg-transparent "
            />
          </CardHeader>
          <CardBody
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="mb-2 flex items-center h-full  justify-between flex-wrap gap-3">
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color={isdarkmode ? "white" : "black"}
                className="font-medium capitalize"
              >
                {title}
              </Typography>
              <div className={"flex gap-2"}>
                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  color={"red"}
                  className=" flex gap-2 line-through font-medium"
                  variant={"small"}
                >
                  {discount !== "0.0" && (
                    <small>
                      Rs.{" "}
                      {mrp.toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                      })}
                    </small>
                  )}
                </Typography>

                <Typography
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  color={isdarkmode ? "white" : "black"}
                  className=" flex gap-2 font-medium"
                >
                  Rs.
                  {price.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="pt-0 flex flex-col  text-gray-500 mt-5 "
          >
            Available Colors:
            <div className="group mt-2  inline-flex flex-wrap items-center gap-3">
              {product_colors?.map((item) => (
                <Tooltip content={item.color.toUpperCase()} key={item.color}>
                  <span
                    className="cursor-pointer rounded-full  border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                    style={{ backgroundColor: item.hexcode }}
                  ></span>
                </Tooltip>
              ))}
            </div>
          </CardFooter>
        </Card>
        {/*</BackgroundGradient>*/}
      </Link>
    </motion.div>
  );
}
