"use client";
import { useCartContext } from "@/Store/StoreContext";
import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const LandingSection: FC = () => {
  const { FetchNoifItemsinCart } = useCartContext();

  useEffect(() => {
    FetchNoifItemsinCart();

    return () => {};
  }, [FetchNoifItemsinCart]);

  useEffect(() => {
    fetch(`/api/islogin?a=${Math.random}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.islogin) {
          signOut();
        }
      });

    return () => {};
  }, []);

  return (
    <div
      className="relative  grid  grid-cols-2 max-lg:grid-cols-1 bg-gradient-to-l py-[5vh] 
     overflow-hidden bg-no-repeat bg-cover bg-right max-md:bg-bottom  "
    >
      <Image
        src={"/static/background_imgs/landingcropped.jpg"}
        alt={"Background Image"}
        fill={true}
        fetchPriority="high"
        quality={100}
        priority
        className="object-cover relative -z-10 frontimage "
      ></Image>
      <div className="flex justify-center items-center  h-screen  flex-col gap-5 ">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="text-[8rem] max-md:text-8xl shadowhand  text-center flex flex-col items-center justify-center flex-wrap">
            <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold">
              <div className="jablutext ">Jablu </div>
              <div className="jablutext ">.</div>
              <div className="jablutext ">in</div>
            </div>
          </div>
          <p className="w-1/2 text-center">
            Crafting Excellence, Elevating Elegance: Your Premium Choice in
            Quality
          </p>
        </div>
        <Link
          href={"/Categories"}
          className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-white transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-opacity-50"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingSection;
