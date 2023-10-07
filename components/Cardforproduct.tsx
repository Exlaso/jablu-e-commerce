"use client";
import { dataforproduct } from "@/lib/Interfaces";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Heart from "./Utils/Heart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LikeProduct from "@/utils/LikeProduct";
import DislikeProduct from "@/utils/DisikeProduct";

interface datawithvarients extends dataforproduct {
  varients?: Variants;
  className?: string;
}
const Cardforproduct = ({
  id,
  title,
  price,
  category,
  available_color,
  available_size,
  description,
  images,
  rating,
  varients,
  className,
}: datawithvarients) => {
  const { status } = useSession();
  const router = useRouter();
  const [liked, setLiked] = useState<boolean>(false);
  const [HeartLoading, setHeartLoading] = useState<boolean>(false);
  useEffect(() => {
    if (status === "authenticated") {
      setHeartLoading(true);
      fetch(`/api/IsProductLiked?product_id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLiked(data.message);
          setHeartLoading(false);
        });
    }
    return () => {};
  }, [id,status]);

  // Handle When Product is liked
  const OnLikeHandler = () => {
    setHeartLoading(true);
    if (!HeartLoading) {
      if (status === "unauthenticated") {
        router.push("/Auth/Signin");
      } else if (status === "authenticated") {
        if (liked) {
          DislikeProduct(id).then((e) => {
            if (e) {
              setLiked(false);
              setHeartLoading(false);
            }
          });
        } else {
          LikeProduct(id).then((e) => {
            if (e) {
              setLiked(e);
              setHeartLoading(false);
            }
          });
        }
      }
    }
  };

  return (
    <motion.div
      variants={varients}
      className={` ${className}  flex min-w-[40vh] max-sm:snap-center relative w-full  shadow-lg rounded-3xl gap-4 justify-start  items-start flex-col`}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 w-full h-full group justify-start  items-start"
        initial="hidden"
        whileHover={"visible"}
        whileTap={"taped"}
      >
        <motion.button
          type="button"
          initial={{ opacity: 1, scale: 1 }}
          onClick={OnLikeHandler}
          className="absolute right-5 top-5 z-10"
        >
          {!HeartLoading ? (
            <Heart liked={liked}></Heart>
          ) : (
            <Image
              src={"/static/icons/loading.svg"}
              alt={"loading"}
              width={25}
              priority={true}
              height={25}
            ></Image>
          )}
        </motion.button>

        <Link
          className="flex gap-4  w-full justify-start items-start h-full flex-col"
          href={`/Products/${id}`}
        >
          <div className="flex justify-center items-center w-full ">
            <Image
              // src={"/static/maitray.png"}
              src={images.at(0) as string}
              alt={title}
              width={500}
              height={500}
              className="group-hover:scale-95 duration-300 w-80 h-80  object-contain mx-auto"
            ></Image>
          </div>
          <div className="p-3 flex flex-col items-start  justify-between h-full gap-4">
            <h1 className="max-sm:text-sm text-md capitalize  font-bold exlasi">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-2">
              <span className="text-xl text-gray-800 bg-blue-100  rounded-full px-3 py-2  font-semibold">
                ₹
                {price.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>

              <span className="flex gap-1 justify-center items-center px-3 py-2  exlasi rounded-full ">
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
