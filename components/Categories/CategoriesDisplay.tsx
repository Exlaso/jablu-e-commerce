"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesDisplay = ({
  cats,
  className,
}: {
  cats: { src: string; title: string; description: string }[];
  className?: string;
}) => {
  return (
    <section className={className}>
      {cats.map((e, i) => {
        return (
          <motion.div
            key={i}
            initial="faded"
            whileHover="visible"
            className=" w-full h-full relative border bg-black  hover:border-gray-500 duration-150 border-transparent aspect-square group overflow-hidden "
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
                    filter: "blur(2px)",
                    transition: { scale: { duration: 30 } },
                  },
                  visible: {
                    opacity: 0.5,
                    scale: 1.5,
                    filter: "blur(4px)",
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
                  className="object-cover"
                  alt={"Anime"}
                  fill={true}
                ></Image>
              </motion.div>
              <div className="absolute top-[10%] w-[80%] capitalize break-words px-5 text-white  left-[10%]">
                <h1
                  className="text-5xl max-lg:text-3xl duration-150  lg:group-hover:text-6xl 
               
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
