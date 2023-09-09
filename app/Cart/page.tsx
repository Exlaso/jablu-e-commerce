"use client";
import { useCartContext } from "@/Store/StoreContext";
import Navbar from "@/components/navbar";
import {  dataforproductwithmetadata } from "@/lib/Interfaces";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CartPageProps {}
const CartPage: FunctionComponent<CartPageProps> = () => {
  const [carted, setCarted] = useCartContext();
  let total: number = 0;
  const data: dataforproductwithmetadata[] = carted;

  const IncrementHandler = (productid: number) => {
    setCarted((prev) => {
      return [
        ...prev
          .filter((e) => e.id === productid)
          .map((e) => ({ ...e, count: e.count + 1 })),
        ...prev.filter((e) => e.id !== productid),
      ];
    });
  };
  const DecrementHandler = (productid: number, Currentcount: number) => {
    if (Currentcount === 1) {
      setCarted((prev) => {
        return [...prev.filter((e) => e.id !== productid)];
      });
    } else {
      setCarted((prev) => {
        return [
          ...prev
            .filter((e) => e.id === productid)
            .map((e) => ({ ...e, count: e.count - 1 })),
          ...prev.filter((e) => e.id !== productid),
        ];
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-[10%] gap-20 py-[15vh] max-md:px-5 w-full h-auto grid ">
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
        <section className="flex flex-col justify-between items-start relative ">
          <div className=" w-full flex-col flex gap-4">
            {data?.length === 0 && <h2 className="text-lg">Cart is Empty</h2>}
            {data?.map((e) => {
              total += e.price * e.count;
              return (
                <div
                  className="flex gap-5 w-full"
                  key={e.id}
                >
                 <Link href={"/Products/"+e.id}>
                 <Image
                    src={e.image}
                    alt={e.title + " image"}
                    width={100}
                    height={100}
                  ></Image></Link>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex max-sm:flex-col text-xl justify-between items-start w-full gap-4">
                    <Link href={"/Products/"+e.id} className="underline">
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
                      <div className=" px-4 py-2 text-xl bg-transparent text-black border border-black rounded-full w-28 flex justify-between">
                        <button
                          type="button"
                          onClick={() => DecrementHandler(e.id, e.count)}
                        >
                          -
                        </button>
                        <span>{e.count}</span>
                        <button
                          type="button"
                          onClick={() => IncrementHandler(e.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex shrink-0 border-t border-t-black font-bold text-black py-10 bg-white text-2xl sticky -bottom-2 justify-between items-center">
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
