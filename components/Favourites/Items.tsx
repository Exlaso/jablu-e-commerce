"use client";
import { Wishlistitems } from "@/lib/Interfaces";
import DislikeProduct from "@/utils/DisikeProduct";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const Items = ({ wishlistdata }: { wishlistdata: Wishlistitems[] }) => {
  const [favourited, setfavouriteditems] =
    useState<Wishlistitems[]>(wishlistdata);
  return (
    <AnimatePresence>
      {favourited?.length === 0 && (
        <h2 className="text-lg">Favourites is Empty</h2>
      )}
      {favourited?.sort()?.map((e) => {
        return (
          <Fragment key={e.product_id}>
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-5 w-full border p-4 border-gray-500  rounded-3xl"
            key={e.product_id}
          >
            <Link href={"/Products/" + e.product.title.replaceAll(" ","-")}>
              <Image
                src={e.product.images}
                alt={e.product.images}
                width={150}
                height={150}
                className="aspect-square object-contain"
              ></Image>
            </Link>
            <div className="w-full flex flex-col gap-3">
              <div className="flex max-sm:flex-col  max-sm:text-sm justify-between items-start w-full gap-4">
                <Link
                href={"/Products/" + e.product.title.replaceAll(" ","-")}
                  className="underline text-sm capitalize"
                >
                  <h3>{e.product.title}</h3>
                </Link>
              </div>

              <div className="flex justify-between items-start gap-4 w-full max-md:flex-col ">
                <h6 className="capitalize max-sm:text-xs  ">

                  {e.product.description.length > 100
                    ? e.product.description.substring(0, 100) + "..."
                    : e.product.description}
                </h6>
                <span
                  className="underline capitalize cursor-pointer flex justify-end gap-2 max-sm:text-xs flex items-center text-red-500"
                  onClick={() => {
                    setfavouriteditems((prev) =>
                    prev.filter((ex) => ex.product_id !== e.product_id)
                    );
                    DislikeProduct(e.product_id);
                  }}
                  >
                  <Image
                    src={"/static/icons/delete.svg"}
                    alt={"Trash"}
                    width={25}
                    height={25}
                    ></Image>
                  Remove from Favourite
                </span>
              </div>
            </div>
          </motion.div>
      </Fragment>
        );
      })}
    </AnimatePresence>
  );
};

export default Items;
