"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const ProccessSection = () => {
  return (
    <ParallaxProvider>
      <Parallax 
      speed={-10} className="grid mix-blend-darken grid-cols-4 gap-4 py-10 my-10 mx-10 max-md:grid-cols-2 max-md:mx-5">
        <div
          
          className="flex text-center flex-col gap-3 justify-center  items-center"
        >
          <Image
            src={"/static/Process_content/step1.png"}
            alt={"alt"}
            width={150}
            height={150}
          ></Image>
          <span className="py-1 px-3  bg-red-600/25 rounded-2xl">Step 1</span>
          <h3>Filter & Discover</h3>
          <p className=" px-[20%]">
            Smart filtering and suggestions make it easy to find
          </p>
        </div>
        <div
          
          className="flex text-center flex-col gap-3 justify-center  items-center"
        >
          <Image
            src={"/static/Process_content/step2.png"}
            alt={"alt"}
            width={150}
            height={150}
          ></Image>
          <span className="py-1 px-3  bg-yellow-600/25 rounded-2xl">
            Step 2
          </span>
          <h3>Add to bag</h3>
          <p className=" px-[20%]">
            Easily select the correct items and add them to the cart
          </p>
        </div>
        <div
          
          className="flex text-center flex-col gap-3 justify-center  items-center"
        >
          <Image
            src={"/static/Process_content/step3.png"}
            alt={"alt"}
            width={150}
            height={150}
          ></Image>
          <span className="py-1 px-3  bg-cyan-600/25 rounded-2xl">Step 3</span>
          <h3>Fast shipping</h3>
          <p className=" px-[20%]">
            The carrier will confirm and ship quickly to you
          </p>
        </div>
        <div
          
          className="flex text-center flex-col gap-3 justify-center  items-center"
        >
          <Image
            src={"/static/Process_content/step4.png"}
            alt={"alt"}
            width={150}
            height={150}
          ></Image>
          <span className="py-1 px-3  bg-purple-600/25 rounded-2xl">
            Step 4
          </span>
          <h3>Enjoy the product</h3>
          <p className=" px-[20%]">
            Have fun and enjoy your 5-star quality products
          </p>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
};

export default ProccessSection;
