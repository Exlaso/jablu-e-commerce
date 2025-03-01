"use client";
import React, { ReactNode } from "react";
import { Product } from "@/lib/Interfaces";
import { motion, Variants } from "framer-motion";
import { ProductCard } from "@/components/mt/Card";
import Link from "next/link";

const CardSection = ({
  data,
  children,
  href,
}: {
  data: Product[] | undefined;
  children: ReactNode;
  href: string | undefined;
}) => {
  const divVarients: Variants = {
    visible: {
      transition: { staggerChildren: 0.1 },
    },
    hidden: {},
  };

  return (
    <div className={"w-full"}>
      {data?.length !== 0 && (
        <h2 className="text-4xl font-bold px-4  capitalize">
          <Link href={href ?? "/Categories"}>{children}</Link>
        </h2>
      )}
      <motion.div
        variants={divVarients}
        viewport={{ once: true }}
        initial="hidden"
        whileInView={"visible"}
        className="p-4 flex h-full  w-full  gap-4 overflow-x-auto shrink-0 snap-mandatory snap-x"
      >
        {data
          ?.slice(0, 3)
          ?.map((item) => <ProductCard key={item.id} {...item} />)}
      </motion.div>
    </div>
  );
};

export default CardSection;
