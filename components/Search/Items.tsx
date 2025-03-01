"use client";

import React from "react";
import { Product } from "@/lib/Interfaces";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/mt/Card";

const Items = ({ filtereddata }: { filtereddata: Product[] | undefined }) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      transition={{
        staggerChildren: 0.1,
      }}
      className="grid grid-cols-2  max-lg:grid-cols-1 gap-5  w-full mx-auto"
    >
      {filtereddata?.map((e) => <ProductCard key={e.id} {...e} />)}
    </motion.div>
  );
};

export default Items;
