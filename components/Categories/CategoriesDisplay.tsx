"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesDisplay = ({
  data,
  className,
  innerClassName,
}: {
  data: { name: string; image: string; description: string }[];
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <section className={className}>
      {data?.map((e, i) => {
        return (
          <motion.div
            key={i}
            initial="faded"
            whileHover="visible"
            // @ts-ignore
            className={` w-full h-full relative border bg-black  hover:border-gray-500 duration-150 border-transparent  group overflow-hidden ${innerClassName}`}
          >
            <Link
              href={"Categories/Search/" + e.name.replaceAll(" ", "-")}
              className="group"
            >
              <motion.div
                variants={{
                  faded: {
                    opacity: 0.25,
                    scale: 1,
                    transition: { scale: { duration: 30 } },
                  },
                  visible: {
                    opacity: 0.5,
                    scale: 1.5,
                    transition: { scale: { duration: 60 } },
                  },
                }}
                // @ts-ignore
                className="h-full w-full"
              >
                <Image
                  src={e.image}
                  className="object-cover w-full h-96 "
                  alt={"Anime"}
                  width={1000}
                  height={1000}
                ></Image>
              </motion.div>
              <div className="absolute top-[10%] w-[80%] capitalize break-words px-5 text-white  left-[10%]">
                <h1
                  className="text-5xl max-lg:text-3xl duration-150  lg:group-hover:text-6xl 
               
            "
                >
                  {e.name}
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
                  // @ts-ignore
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
