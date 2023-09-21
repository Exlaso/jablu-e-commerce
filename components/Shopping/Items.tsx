"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IncDecButton from "../Cart/EncDecButton";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
const Items = () => {
  const [carteditems, setCarteditems] = useState<dataforproductwithmetadata[]>(
    []
  );
  useEffect(() => {
    fetch("/api/GetCartitems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((data) => {
        const d = data.message.map((e: any) => ({ ...e, ...e.product }));
        setCarteditems(d);
      });

    return () => {};
  }, []);

  let total: number = 0;
  const ItemRemoveHandler = (productdata: dataforproductwithmetadata) => {
    fetch("api/UpdateCount", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productdata.id,
        color: productdata.color,
        size: productdata.size,
        count: 0,
        inc: -1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.message);
        } else {
          setCarteditems((prev) => {
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
        }
      });
  };
  return (
    <div className=" w-full flex-col flex gap-4">
      <AnimatePresence>
        {carteditems?.length === 0 && (
          <h2 className="text-lg">Shopping Bag is Empty</h2>
        )}
        {carteditems?.sort()?.map((e) => {
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
                  src={e.images?.at(0) as string}
                  alt={e.title + " image"}
                  width={100}
                  height={100}
                ></Image>
              </Link>
              <div className="w-full flex flex-col gap-3">
                <div className="flex max-sm:flex-col text-xl max-sm:text-sm justify-between items-start w-full gap-4">
                  <Link
                    href={"/Products/" + e.id}
                    className="underline capitalize"
                  >
                    <h2>{e.title}</h2>
                  </Link>
                  <span className="font-bold">
                    ₹
                    {(e.price * e.count).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div className="flex justify-between w-full items-center">
                  <h2 className="uppercase">
                    {e.color}/{e.size}
                  </h2>
                  <div className="flex flex-col items-center gap-1">
                    <IncDecButton
                      setCarteditems={setCarteditems}
                      data={e}
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
          {total.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="flex justify-end items-end">
        {carteditems?.length !== 0 && (
          <Link href={"#"}>
            <motion.button
              type="button"
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="flex px-10  select-none items-center justify-center gap-2 rounded-full w-fit p-4 shadow-lg hover:bg-cyan-200 duration-100"
            >
              <Image
                src={"/static/icons/navbar/buy.svg"}
                alt={"Buy Icon"}
                width={25}
                height={25}
              ></Image>
              <p>Check Out</p>
            </motion.button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Items;
