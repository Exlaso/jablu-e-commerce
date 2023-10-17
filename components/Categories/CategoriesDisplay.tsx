"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesDisplay = ({
  cats = [
    {
      src:"/static/demotshirt.jpg",
      title: "Anime",
      description:
        "Elevate your anime style with our collection of wearable treasures. From iconic characters to unique designs, embrace your anime obsession.",
    },
    {
      src:"/static/demotshirt.jpg",
      title: "Jablu Exclusive",
      description:
        "Explore JABLU's exclusive wearables - a curated selection of one-of-a-kind fashion pieces designed to make you stand out. Discover uniqueness today!",
    },
    {
      src:"/static/demotshirt.jpg",
      title: "Quirky tshirts",
      description:
        "Step into comfort and style with our Oversized T-shirt collection. Embrace the relaxed, trendy look with these spacious and versatile garments.",
    },
    {
      src:"/static/demotshirt.jpg",
      title: "Unfit to Fit yoga mat",
      description: "UTF Card",
    },
  ],
  className,
  innerClassName
}: {
  cats?: { src: string; title: string; description: string }[];
  className?: string;
  innerClassName?:string
}) => {
  return (
    <section className={className}>
      {cats.map((e, i) => {
        return (
          <motion.div
            key={i}
            initial="faded"
            whileHover="visible"
            className={` w-full h-full relative border bg-black  hover:border-gray-500 duration-150 border-transparent  group overflow-hidden ${innerClassName}`}
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
                    transition: { scale: { duration: 30 } },
                  },
                  visible: {
                    opacity: 0.5,
                    scale: 1.5,
                    transition: { scale: { duration: 60 } },
                  },
                }}
                className="h-full w-full"
              >
                <Image
                  src={e.src}
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
