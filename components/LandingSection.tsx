'use client'
import Image from "next/image";
import React, { FC } from "react";

const LankingSection: FC = () => {
 
  return (
    <div className="relative -z-10 grid grid-cols-2 max-lg:grid-cols-1 bg-gradient-to-l py-[5vh] max-lg:bg-gradient-to-t from-transparent from-60% to-neutral-400 ">
      <div className="flex justify-center items-center h-[92vh] max-lg:h-[90vh]">
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-8xl  max-sm:text-5xl font-bold shadowhand text-center flex flex-col items-center justify-center flex-wrap">
            <Image
              src={"/static/logo/jablu4.svg"}
              alt={"jablulogo"}
              width={200}
              height={200}
            ></Image>
            <div className="flex">
              <h1 className="jablutext">Jabluuu </h1>
              <h1 className="jablutext">.</h1>
              <h1 className="jablutext">com</h1>
            </div>
          </span>
          <p className="w-1/2 text-center">
            Crafting Excellence, Elevating Elegance: Your Premium Choice in
            Quality
          </p>
          <span className="flex gap-1">
         
            <button className="bg-blue-500 hover:bg-blue-600 flex gap-2 justify-center items-center text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
              <Image
                src={"/static/icons/navbar/explore.svg"}
                alt={"explore"}
                width={"20"}
                height={"20"}
              ></Image>
              Explore
            </button>
          </span>
        </div>
      </div>

      <div className="bg-[#E1E6EA] relative h-[92vh] max-lg:h-[90vh] w-full">
        <Image
          src="/static/hero/tshirts.gif"
          alt="tshirt"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
};

export default LankingSection;
