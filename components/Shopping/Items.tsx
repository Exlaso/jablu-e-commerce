"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import IncDecButton from "../Cart/EncDecButton";
import { toast } from "sonner";
import { Cartitems, Product } from "@/lib/Interfaces";
import CardSection from "@/components/CardSection";
import { LitUpButton } from "@/components/ui/tailwindcss-buttons";

const Items = ({
  Carteddata,
  products,
}: {
  Carteddata: Cartitems[];
  products: Product[];
}) => {
  const [carteditems, setCarteditems] = useState<Cartitems[]>(Carteddata);
  let total: number = 0;
  const ItemRemoveHandler = (productdata: Cartitems) => {
    toast.promise(
      fetch("api/UpdateCount", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productdata.product_id,
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
                      e.product_id === productdata.product_id &&
                      e.color === productdata.color &&
                      e.size === productdata.size
                    ),
                ),
              ];
            });
          }
        }),
      {
        loading: "Updating...",
        success: () => {
          return `Information Was Successfully Removed.`;
        },
        error: "Error",
      },
    );
  };

  return (
    <div className=" w-full flex-col flex gap-4">
      <AnimatePresence>
        {carteditems?.length === 0 && (
          <div
            className={"flex flex-col justify-start w-full items-center gap-4"}
          >
            <h1 className={"text-4xl text-center font-bold"}>
              Your Shopping Bag is Empty
            </h1>
            <p>Add some items to cart</p>
            <LitUpButton className={"p-4  rounded-lg w-max"}>
              <Link href={"/Categories"}>Explore Products here</Link>
            </LitUpButton>
            <p className={"border-y-2 border-gray-500 my-10 py-2 px-20"}>OR</p>

            <div className="w-full">
              <CardSection href={"/Categories"} data={products?.slice(0, 4)}>
                Related Products
              </CardSection>
            </div>
          </div>
        )}
        {carteditems
          ?.sort((a, b) => {
            const titleA = a.product.title.toLowerCase();
            const titleB = b.product.title.toLowerCase();

            if (titleA < titleB) {
              return -1;
            } else if (titleA > titleB) {
              return 1;
            } else {
              return 0;
            }
          })
          ?.map((e) => {
            total += e.product.price * e.count;
            return (
              <motion.div
                initial={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-5 w-full"
                key={e.product_id}
              >
                <Link
                  href={"/Products/" + e.product.title.replaceAll(" ", "-")}
                >
                  <Image
                    src={e.product.images}
                    alt={e.product.title + " image"}
                    width={150}
                    height={150}
                    className="aspect-square object-contain"
                  ></Image>
                </Link>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex max-sm:flex-col text-xl max-sm:text-sm justify-between items-start w-full gap-4">
                    <Link
                      href={"/Products/" + e.product.title.replaceAll(" ", "-")}
                      className="underline capitalize"
                    >
                      <h2>{e.product.title}</h2>
                    </Link>
                    <span className="font-bold text-xl">
                      ₹
                      {(e.product.price * e.count).toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between w-full items-center">
                    <h4 className="uppercase">
                      {e.color}/{e.size}
                    </h4>
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

      {carteditems?.length !== 0 && (
        <div className="flex shrink-0 border-t bg-primary border-t-[var(--secondary-color)] font-bold text-highlight py-5 p-2 text-2xl sticky -bottom-2 justify-between items-center">
          <span>Total</span>
          <span>
            ₹
            {total.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      )}
      <div className="flex justify-end items-end">
        {carteditems?.length !== 0 && (
          <Link href={"/Checkoutcart/Address"}>
            <LitUpButton
              className={"flex justify-center items-center gap-1 py-2 "}
            >
              <Image
                src={"/static/icons/navbar/buy.svg"}
                alt={"Buy Icon"}
                width={25}
                height={25}
                className="invertsvg"
              ></Image>
              <p>Check Out</p>
            </LitUpButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Items;
