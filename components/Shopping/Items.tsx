"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import IncDecButton from "../Cart/EncDecButton";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
import { useCartContext } from "@/Store/StoreContext";
const Items = () => {
    const { carted, setCarted } = useCartContext();
 
    const data: dataforproductwithmetadata[] = carted;
   
  let total: number = 0;
  const ItemRemoveHandler = (productdata: dataforproductwithmetadata) => {
    setCarted((prev) => {
      return [
        ...prev.filter(
          (e) =>
            !(
              e.id === productdata.id &&
              e.color === productdata.color &&
              e.size === productdata.size
            )
        ),
      ];
    });
  };
  return (
    <div className=" w-full flex-col flex gap-4">
      <AnimatePresence>
        {data?.length === 0 && (
          <h2 className="text-lg">Shopping Bag is Empty</h2>
        )}
        {data?.sort()?.map((e) => {
          total += e.price * e.count;
          return (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-5 w-full"
              key={e.id}
            >
              <Link href={"/Products/" + e.id}>
                <Image
                  src={e.image}
                  alt={e.title + " image"}
                  width={100}
                  height={100}
                ></Image>
              </Link>
              <div className="w-full flex flex-col gap-3">
                <div className="flex max-sm:flex-col text-xl max-sm:text-sm justify-between items-start w-full gap-4">
                  <Link
                    href={"/Products/" + e.id}
                    className="underline"
                  >
                    <h2>{e.title}</h2>
                  </Link>
                  <span className="font-bold">
                    ₹
                    {(e.price * e.count * 82.69).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div className="flex justify-between w-full items-center">
                  <h2 className="capitalize">
                    {e.color}/{e.size}
                  </h2>
                  <div className="flex flex-col items-center gap-1">
                    <IncDecButton
                      data={e}
                      setCarted={setCarted}
                    ></IncDecButton>
                    <span
                      className="underline capitalize cursor-pointer text-red-500"
                      onClick={() => {
                        ItemRemoveHandler(e);
                      }}
                    >
                      remove
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="flex shrink-0 border-t border-t-black font-bold text-black py-5 bg-white text-2xl sticky -bottom-2 justify-between items-center">
        <span>Total</span>
        <span>
          ₹
          {(total * 82.69).toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};

export default Items;