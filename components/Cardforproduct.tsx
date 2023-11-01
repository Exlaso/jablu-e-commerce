"use client";
import { Product} from "@/lib/Interfaces";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface datawithvarients extends Product {
  varients?: Variants;
  className?: string;
}
const Cardforproduct = ({
   title,
  price,
  mrp,
  product_rating,
  images,
  varients,
  className,
}: datawithvarients) => {
  const discount: string = (((mrp - price) / mrp) * 100 * -1).toFixed(0);
  return (
    <motion.div
      variants={varients}
      className={` ${className} min-w-[30vh]  max-w-[55vh] w-full shrink-0   flex rounded-[30px] overflow-hidden   max-sm:snap-center relative  gap-4 justify-start  items-start flex-col bg-gray-500/10`}
      viewport={{ once: true }}
    >
      <div
        className="flex flex-col gap-4 w-full h-full group justify-start  items-start"

      >
        {discount !== "0.0" && (
          <div className="absolute right-2 top-2 z-10 py-1 px-2 text-sm bg-[var(--primary-color)] rounded-2xl ">
            {discount + "%"}
          </div>
        )}
        <Link
          className="flex gap-4  w-full justify-start items-start h-full flex-col"
          href={`/Products/${title.replaceAll(" ","-").toLowerCase()}`}
        >
          <div className="flex justify-center items-center w-full pt-4 ">
            <Image
              // src={"/static/tshirt.png"}
              src={images}
              alt={title}
              width={500}
              height={500}
              className="rounded-b-[30px] duration-300 w-80 h-80  object-contain  mx-auto"
            ></Image>
          </div>
          <div className="p-3 flex flex-col items-start  justify-between h-full gap-0">
            <h1 className="max-sm:text-sm text-md capitalize  font-bold ">
              {title}
            </h1>

            <div className="flex items-start flex-col justify-center gap-1">
              <div className="flex items-center  font-semibold gap-2">
                {discount !== "0.0" && (
                  <span className="text-red-600  text-lg">
                    <s>Rs. {mrp.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}</s>
                  </span>
                )}
                <span className=" rounded-full  text-xl  ">
                  Rs.
                  {price.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <span className="flex gap-1 justify-center items-center py-2  px-1">
                Ratings: {product_rating?.avg_ratings}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 pb-[1px] text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Cardforproduct;
