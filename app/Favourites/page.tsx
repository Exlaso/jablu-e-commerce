// "use client";

import Items from "@/components/Favourites/Items";
import BackButton from "@/components/Utils/Backbtn";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Favourites",
  description:
    "Your list of desired items or products you have expressed interest in.",
};
const Page = () => {


    return (
      <>
        <main className="px-[10%] min-h-screen gap-14 py-[15vh] flex flex-col max-md:px-5 w-full ">
          <div className="grid gap-3 ">
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
          <section className="flex flex-col  justify-between items-start relative ">
            <div className=" w-full flex-col  flex gap-10">
              <Items />
            </div>
          </section>
        </main>
      </>
    );
  
};

export default Page;
