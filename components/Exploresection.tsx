import Image from "next/image";
import Link from "next/link";
import React from "react";

const Exploresection = () => {
  return (
    <div className="w-full relative mx-auto overflow-hidden flex-col gap-10 text-center py-20 shadow-lg flex justify-center items-center  text-gray-200 bg-black ">
     
      <h2 className="text-3xl max-sm:text-xl font-extrabold tracking-widest uppercase">
        &quot;<span className="text-yellow-300">Express</span> yourself with a
        twist of <span className="text-red-600">uniqueness</span>.&quot;
      </h2>
      <span className="flex gap-2 items-center justify-center whitespace-nowrap flex-wrap ">
        <Link
          href={"/Categories/Search/All"}
          className="bg-blue-300 hover:bg-blue-600 flex gap-2  duration-150 justify-center items-center text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          <Image
            src={"/static/icons/navbar/explore.svg"}
            alt={"explore"}
            width={"20"}
            height={"20"}
          ></Image>
          Explore
        </Link>
        <Link
          href={"/"}
          className="bg-cyan-400 hover:bg-cyan-600 flex gap-2  duration-150 justify-center items-center text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          <Image
            src={"/static/hero/register.svg"}
            alt={"explore"}
            width={"20"}
            height={"20"}
          ></Image>
          Become Member
        </Link>
      </span>
    </div>
  );
};

export default Exploresection;
