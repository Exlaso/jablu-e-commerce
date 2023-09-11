"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const LandingSection: FC = () => {
  return (
    <ParallaxProvider>
      <div
        className="relative -z-10 grid  grid-cols-2 max-lg:grid-cols-1 bg-gradient-to-l py-[5vh] 
     overflow-hidden bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
      >
        {/* <Parallax
          translateY={[-200, 100]}
          scale={[1.5, 1, "easeInQuad"]}
          className="absolute left-0 -z-10 blur-[2px]  opacity-75 "
        >
          <Image
            src={"/static/hero/rightleaves.png"}
            alt={"Leavestop"}
            width={400}
            height={400}
          ></Image>
        </Parallax> */}
        <Parallax
          translateX={[50, -50]}
          className="flex justify-center items-center h-[92vh] max-lg:h-[90vh]"
        >
          <div className="flex flex-col justify-center items-center gap-8">
            <span className="text-8xl  max-sm:text-5xl font-extrabold shadowhand  text-center flex flex-col items-center justify-center flex-wrap">
              <Image
                src={"/static/logo/jablu4.svg"}
                alt={"jablulogo"}
                width={200}
                height={200}
              ></Image>
              <div className="flex items-center justify-center flex-wrap tracking-widest">
                <h1 className="jablutext ">Jablu </h1>
                <h1 className="jablutext ">.</h1>
                <h1 className="jablutext ">com</h1>
              </div>
            </span>
            <p className="w-1/2 text-center">
              Crafting Excellence, Elevating Elegance: Your Premium Choice in
              Quality
            </p>
            <span className="flex gap-2 items-center justify-center whitespace-nowrap flex-wrap ">
              <Link
                href={"/"}
                className="bg-blue-300 hover:bg-blue-600 flex gap-2  justify-center items-center text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
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
                className="bg-cyan-400 hover:bg-cyan-400 flex gap-2  justify-center items-center text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
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
        </Parallax>

        <Parallax
          translateX={[-50, 50]}
          className=" relative h-[92vh] max-lg:h-[90vh] w-full  mix-blend-darken bg-blend-darken"
        >
          <Image
            src="/static/hero/tshirts_black.gif"
            alt="tshirt"
            className="object-cover "
            fill={true}
          ></Image>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default LandingSection;
