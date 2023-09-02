import Image from "next/image";
import React, { FC } from "react";

const LankingSection: FC = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
      <div className="flex justify-center items-center h-[92vh] max-lg:h-[70vh]">
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-9xl max-md:text-7xl font-bold shadowhand text-center flex justify-center flex-wrap">
            <h1 className="text-blue-600">Jabluuu </h1>
            <h1 className="text-red-600">.</h1>
            <h1 className="text-yellow-400">com</h1>
          </span>
          <p className="w-1/2 text-center">
            Crafting Excellence, Elevating Elegance: Your Premium Choice in
            Quality
          </p>
          <span className="flex gap-1">
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 flex gap-2 justify-center items-center text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
              <Image src={"/static/icons/navbar/explore.svg"} alt={"explore"} width={"20"} height={"20"} ></Image>
              Explore our Products
            </button> */}
            <button className="bg-blue-500 hover:bg-blue-600 flex gap-2 justify-center items-center text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
              <Image src={"/static/icons/navbar/explore.svg"} alt={"explore"} width={"20"} height={"20"} ></Image>
              Explore
            </button>
          </span>
        </div>
      </div>

      <div className="bg-[#E1E6EA] relative h-[92vh] max-lg:h-[70vh] w-full">
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
