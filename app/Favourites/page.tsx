import Items from "@/components/Favourites/Items";
import BackButton from "@/components/Utils/Backbtn";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Favourites",
  description: "Your list of desired items or products you have expressed interest in.",
  
};
const Page = () => {
  return (
    <>
      <Navbar />
      <main className="px-[10%] gap-14 py-[15vh] max-md:px-5 w-full h-auto grid ">
        <div className="grid gap-3">
          <BackButton />
          <h1 className="font-bold text-4xl text-black flex items-center">
            <Image
              src={"/static/icons/navbar/buy.svg"}
              alt={"buy"}
              width={40}
              height={40}
            ></Image>
            Favourites
          </h1>
        </div>
        <section className="flex flex-col justify-between items-start relative ">
          <div className=" w-full flex-col flex gap-10">
            <Items />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
