"use client";
import { useCartContext } from "@/Store/StoreContext";
import Cardforproduct from "@/components/Cardforproduct";
import Navbar from "@/components/navbar";
import { dataforproduct } from "@/lib/Interfaces";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface CartPageProps {}
const CartPage: FunctionComponent<CartPageProps> = () => {
  const [carted] = useCartContext();
  let total: number = 0;
  const data: dataforproduct[] = carted;
  return (
    <>
      <Navbar />
      <div className="px-10 py-[15vh] max-md:px-5 w-full h-auto grid gap-4">
        <div className="grid gap-3">
          <Link href="/">{"<"} Back</Link>
          <h1 className="font-bold text-4xl text-black flex items-center">
            <Image
              src={"/static/icons/navbar/buy.svg"}
              alt={"buy"}
              width={40}
              height={40}
            ></Image>
            Cart
          </h1>
        </div>
        <section className="flex max-lg:flex-col justify-between items-start relative  ">
          <div className="  max-lg:w-full flex-col flex gap-4  w-[70%]">
            {" "}
            {data?.length === 0 && <h2 className="text-lg">Cart is Empty</h2>}
            {data?.map((e) => (
              <Cardforproduct
                id={e.id}
                category={e.category}
                image={e.image}
                className="border border-red-600"
                description={e.description}
                price={e.price}
                title={e.title}
                rating={e.rating}
                key={e.id}
              ></Cardforproduct>
            ))}
          </div>
          <div className=" h-full p-2 rounded-lg overflow-y-auto text-black w-[30%] pt-[12vh] max-lg:w-full lg:fixed right-0 bottom-0 ">
            <h1 className="text-4xl  font-bold ">Summary</h1>
            <div className="flex flex-col gap-2 my-5">
              {data.map((e) => {
                total += e.price;
                return (
                  <div className="flex shrink-0 justify-between py-10 items-center border-b border-b-black">
                    <span className="break-all pr-10">{e.title}</span>
                    <span className="font-bold">
                      ₹
                      {(e.price * 82.69).toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex shrink-0 font-bold py-10 bg-white text-xl sticky -bottom-2 justify-between items-center">
              <span>Total</span>
              <span>
                ₹
                {(total * 82.69).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartPage;
