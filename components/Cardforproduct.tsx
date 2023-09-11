"use client";
import { useCartContext } from "@/Store/StoreContext";
import { dataforproduct } from "@/lib/Interfaces";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Heart from "./Utils/Heart";

const varients: Variants = {
  hidden: {
    opacity: 0,
    scale: 1,
    y: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  taped: {
    scale: 0.95,
  },
  onview: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};
interface datawithvarients extends dataforproduct {
  varients?: Variants;
}
const Cardforproduct = ({
  id,
  title,
  price,
  image,
  category,
  description,
  images,
  rating,
  varients,
  className,
}: datawithvarients) => {
  const { favourited, setFavourited } = useCartContext();
  const [liked, setLiked] = useState<boolean>(false);
  useEffect(() => {
    const data: dataforproduct | undefined = favourited.find(
      (e) => e.id === id
    );
    
    if (data !== undefined) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    return () => {};
  }, [favourited,id]);

  return (
    <motion.div
      variants={varients}
      className={`flex min-w-[40vh] max-sm:snap-center relative w-full  shadow-lg rounded-3xl gap-4 justify-start  items-center flex-col ${className}`}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 h-full group justify-start  items-start"
        initial="hidden"
        whileHover={"visible"}
        whileTap={"taped"}
      >
        <motion.button
          type="button"
          initial={{ opacity: 1, scale: 1 }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => {
            setFavourited((prev) => {
              if (!liked) {
                return [
                  ...prev,
                  {
                    id,
                    title,
                    price,
                    image,
                    category,
                    description,
                    images,
                    rating,
                  },
                ];
              } else {
                return [...prev.filter((e) => e.id !== id)];
              }
            });
          }}
          className="absolute right-5 top-5 z-10"
        >
          <Heart liked={liked}></Heart>
        </motion.button>

        <Link
          className="flex gap-4  justify-start items-start h-full flex-col"
          href={`/Products/${id}`}
        >
          <div className="flex justify-center items-center w-full ">
            <Image
              // src={"/static/shuz.jpg"}
              src={image}
              alt={title}
              width={300}
              height={300}
              className="group-hover:scale-95 duration-300 w-80 h-80 max-lg:w-40 max-lg:h-40 object-contain mx-auto  "
            ></Image>
          </div>
          <div className="p-3 flex flex-col items-start  justify-between h-full gap-4">
            <h1 className="max-sm:text-sm text-md  font-bold text-black">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-2">
              <span className="text-xl text-gray-800 bg-blue-100  rounded-full px-3 py-2  font-semibold">
                ₹
                {(price * 82.69).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>

              <span className="flex gap-1 justify-center items-center px-3 py-2  text-black rounded-full ">
                Ratings: {rating.rate}
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
      </motion.div>
    </motion.div>
  );
};

export default Cardforproduct;
