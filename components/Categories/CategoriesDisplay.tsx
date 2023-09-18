"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const cats = [
  {
    src: "/static/Categories/anime.png",
    title: "Anime",
    description: "this is anime card",
  },
  {
    src: "/static/Categories/anime.png",
    title: "Jablu Exclusive",
    description: "this is anime card",
  },
  {
    src: "/static/Categories/anime.png",
    title: "Oversize Tshirts",
    description: "this is anime card",
  },
  {
    src: "/static/Categories/anime.png",
    title: "Mugs",
    description: "this is anime card",
  },
];
const CategoriesDisplay = () => {
  return (
    <section className="my-20 w-full grid-cols-4 py-10 max-lg:grid-cols-2 grid min-h-screen gap-1 bg-black">
      {cats.map((e,i) => {
        return (
          <motion.div
          key={i}
            initial="faded"
            whileHover="visible"
            className=" w-full h-full relative border  hover:border-gray-500 duration-150 border-transparent aspect-square group overflow-hidden "
          >
            <Link
              href={"Categories/Search/" + e.title}
              className="group"
            >
              <motion.div
                variants={{
                  faded: {
                    opacity: 0.25,
                    scale: 1,
                    filter:"blur(0px)",
                    transition: { scale: { duration: 30 } },
                  },
                  visible: {
                    opacity: 0.5,
                    scale: 1.5,
                    filter:"blur(4px)",
                    transition: { scale: { duration: 60 } },
                  },
                }}
                // transition={{
                //   scale:{duration:120}
                // }}
                className="h-full w-full"
              >
                <Image
                  src={e.src}
                  className="object-cover "
                  alt={"Anime"}
                  fill={true}
                ></Image>
              </motion.div>
              <div className="absolute top-[10%] w-full capitalize text-white   left-[10%]">
                <h1
                  className="text-6xl max-lg:text-3xl duration-150  lg:group-hover:text-7xl 
               
            "
                >
                  {e.title}
                </h1>
                <motion.p
                  transition={{
                    duration: 0.15,
                    ease: "linear",
                    delay: 0.15,
                  }}
                  variants={{
                    faded: {
                      opacity: 0,
                      x: -100,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  className=" text-xl max-lg:text-lg"
                >
                  {e.description}
                </motion.p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
};

export default CategoriesDisplay;
