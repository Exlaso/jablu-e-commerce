"use client";
import { useSession } from "@/utils/useSession";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Exploresection = () => {
  const {  status } = useSession();

  return (
    <div className="relative z-20 flex flex-col items-center justify-center w-full gap-10 py-20 mx-auto overflow-hidden text-center text-gray-200 bg-black shadow-lg ">
      <h2 className="text-3xl font-extrabold tracking-widest uppercase max-sm:text-xl">
        &quot;<span className="text-yellow-300">Express</span> yourself with a
        twist of <span className="text-red-600">uniqueness</span>.&quot;
      </h2>
      <span className="flex flex-wrap items-center justify-center gap-2 whitespace-nowrap ">
        <Link
          href={"/Categories/Search/Jablu-Exclusive"}
          className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white duration-150 bg-blue-300 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          <Image
            src={"/static/icons/navbar/explore.svg"}
            alt={"explore"}
            width={"20"}
            height={"20"}
          ></Image>
          Explore Exclusive
        </Link>
        {status !== "authenticated" ? (
          <Link
            href={"/Auth/Signup"}
            className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white duration-150 rounded-full bg-cyan-400 hover:bg-cyan-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            <Image
              src={"/static/hero/register.svg"}
              alt={"explore"}
              width={"20"}
              height={"20"}
            ></Image>
            Become Member
          </Link>
        ) : (
          <Link
            href={"/Favourites"}
            className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white duration-150 rounded-full bg-cyan-400 hover:bg-cyan-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            <Image
              src={"/static/hero/register.svg"}
              alt={"explore"}
              width={"20"}
              height={"20"}
            ></Image>
            Check out your wish list
          </Link>
        )}
      </span>
    </div>
  );
};

export default Exploresection;
