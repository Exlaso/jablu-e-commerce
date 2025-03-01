"use client";
import { Wishlistitems } from "@/lib/Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemSuffix } from "@material-tailwind/react";
import DislikeProduct from "@/utils/DisikeProduct";

export const dynamic = "force-dynamic";

const Items = ({ wishlistdata }: { wishlistdata: Wishlistitems[] }) => {
  const [favourited, setfavouriteditems] =
    useState<Wishlistitems[]>(wishlistdata);
  const [isdarkmode, setisdarkmode] = useState<boolean>(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", changeHandler);

    // Set the initial value
    setisdarkmode(darkModeMediaQuery.matches);

    // Cleanup function to remove the event listener when the component unmounts
    return () =>
      darkModeMediaQuery.removeEventListener("change", changeHandler);
  }, [setisdarkmode]);
  return (
    <AnimatePresence>
      {favourited?.length === 0 && (
        <h2 className="text-lg">Favourites is Empty</h2>
      )}
      <List
        color={"blue-gray"}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {favourited?.sort()?.map((e) => {
          return (
            <ListItem
              key={e.product_id}
              className={`${isdarkmode ? "bg-gray-900/50" : "bg-gray-400/50"}
                                   ${isdarkmode ? "hover:bg-gray-900" : "hover:bg-gray-400"}
                        
                        ${isdarkmode ? "text-white/80" : "text-black/80"}
                        ${isdarkmode ? "hover:text-white/80" : "hover:text-black/80"}
                        `}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <motion.div
                initial={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex gap-5 w-full  p-4  "
                key={e.product_id}
              >
                <Link
                  href={"/Products/" + e.product.title.replaceAll(" ", "-")}
                >
                  <Image
                    src={e.product.images}
                    alt={e.product.images}
                    width={150}
                    height={150}
                    className={`aspect-1 object-contain   $
                    {isdarkmode ? "bg-black/50" : "bg-white/50"
                    }
                    rounded-2xl p-2`}
                  ></Image>
                </Link>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex max-sm:flex-col  max-sm:text-sm justify-between items-start w-full gap-4">
                    <Link
                      href={"/Products/" + e.product.title.replaceAll(" ", "-")}
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
                  </div>
                </div>
              </motion.div>
              <ListItemSuffix
                className={`p-4 rounded-md ${isdarkmode ? "bg-gray-900" : "bg-gray-400"}
                                   ${isdarkmode ? "hover:bg-gray-800" : "hover:bg-gray-500"} duration-300`}
                onClick={() => {
                  setfavouriteditems((prev) =>
                    prev.filter((ex) => ex.product_id !== e.product_id),
                  );
                  DislikeProduct(e.product_id);
                }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Image
                  src={"/static/icons/delete.svg"}
                  alt={"Trash"}
                  width={25}
                  height={25}
                ></Image>
              </ListItemSuffix>
            </ListItem>
          );
        })}
      </List>
    </AnimatePresence>
  );
};
export default Items;
