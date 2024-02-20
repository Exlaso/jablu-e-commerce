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

export function EcommerceCard({
  image,
  title,
  price,
  mrp,
  availablecolors,
}: {
  image: string;
  title: string;
  price: number;
  mrp: number;
  availablecolors: {
    hexcode: string;
    color: string;
  }[];
}) {
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
    <Link
      href={`/Products/${title.replaceAll(" ", "-").toLowerCase()}`}
      className={"shrink-0   w-full"}
    >
      <BackgroundGradient
        className={" h-full w-full "}
        containerClassName={"p-2 h-full w-full "}
      >
        <Card
          className={` shrink-0  h-full w-full   ${isdarkmode ? "bg-gray-900/50" : "bg-gray-400/50"}`}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className={`h-[40vh] bg-[#C3E2C2af]      `}
          >
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="h-full w-full object-contain bg-transparent "
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center h-full  justify-between flex-wrap gap-3">
              <Typography
                color={isdarkmode ? "white" : "black"}
                className="font-medium capitalize"
              >
                {title}
              </Typography>
              <div className={"flex gap-2"}>
                <Typography
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
          <CardFooter className="pt-0 flex flex-col  text-gray-500 mt-5 ">
            Available Colors:
            <div className="group mt-2  inline-flex flex-wrap items-center gap-3">
              {availablecolors.map((item) => (
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
      </BackgroundGradient>
    </Link>
  );
}
