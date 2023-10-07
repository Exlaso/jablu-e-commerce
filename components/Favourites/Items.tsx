"use client";
import { dataforproduct } from "@/lib/Interfaces";
import DislikeProduct from "@/utils/DisikeProduct";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, {  useState } from "react";

const Items = ({ wishlistdata }: { wishlistdata: dataforproduct[] }) => {
  const [favourited, setfavouriteditems] = useState<dataforproduct[]>(wishlistdata);
  return (
    <AnimatePresence>
    {favourited?.length === 0 && (
      <h2 className="text-lg" >Favourites is Empty</h2>
      )}
      {favourited?.sort()?.map((e) => {
        return (
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-5 w-full"
              key={e.id}
            >
              <Link href={"/Products/" + e.id}>
                <Image
                  src={e.images.at(0) as string}
                  alt={e.title + " image"}
                  width={150}
                  height={150}
                  className="aspect-square object-contain"
                ></Image>
              </Link>
              <div className="w-full flex flex-col gap-3">
                <div className="flex max-sm:flex-col  max-sm:text-sm justify-between items-start w-full gap-4">
                  <Link
                    href={"/Products/" + e.id}
                    className="underline text-xl capitalize"
                  >
                    <h2>{e.title}</h2>
                  </Link>
                </div>

                <div className="flex justify-between items-start gap-4 w-full max-md:flex-col ">
                  <h2 className="capitalize max-sm:hidden">
                    {e.description.length > 100
                      ? e.description.substring(0, 100) + "..."
                      : e.description}
                  </h2>
                  <span
                    className="underline capitalize cursor-pointer flex flex-col items-center text-red-500"
                    onClick={() => {
                      setfavouriteditems((prev) =>
                        prev.filter((ex) => ex.id !== e.id)
                      );
                      DislikeProduct(e.id);
                    }}
                  >
                    Remove from Favourite
                  </span>
                </div>
              </div>
            </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

export default Items;
