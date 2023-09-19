"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Isphone } from "./Utils/Isphone";

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
          {...(!Isphone && { translateX: [50, -55] })}
          className="flex justify-center items-center  h-[80vh] md:h-screen"
        >
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="text-8xl  max-sm:text-5xl font-extrabold shadowhand  text-center flex flex-col items-center justify-center flex-wrap">
              <div>
                <Image  
                  src={"/static/logo/jablu4.svg"}
                  alt={"jablulogo"}
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div className="flex items-center justify-center flex-wrap tracking-widest">
                <h1 className="jablutext ">Jablu </h1>
                <h1 className="jablutext ">.</h1>
                <h1 className="jablutext ">in</h1>
              </div>
            </div>
            <p className="w-1/2 text-center">
              Crafting Excellence, Elevating Elegance: Your Premium Choice in
              Quality
            </p>
          </div>
        </Parallax>

        <Parallax
          translateX={[-50, 55]}
          className=" relative h-[80vh] md:h-screen flex justify-between items-center w-full  mix-blend-darken bg-blend-darken overflow-hidden "
        >
          <video
            autoPlay={true}
            preload={"auto"}
            loop={true}
            playsInline={true}
            muted={true}
            className="max-sm:scale-[2] scale-150"
          >
            <source
              src="/static/hero/tshirts_black.mp4"
              type="video/mp4"
              className="w-full h-full "
            />
            Your browser does not support the video tag.
          </video>
          {/* <Image
            src="/static/hero/tshirts_black.gif"
            alt="tshirt"
            className="object-cover "
            width={600}
            height={600}
          ></Image> */}
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default LandingSection;
