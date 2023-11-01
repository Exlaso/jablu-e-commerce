"use client";

import React from "react";
import Cardforproduct from "../Cardforproduct";
import { Product } from "@/lib/Interfaces";
import { motion } from "framer-motion";
const Items = ({
  filtereddata,
}: {
  filtereddata: Product[] | undefined;
}) => {
  return (
    
    <motion.div
      initial="hidden"
      animate={"visible"}
      transition={{
        staggerChildren: 0.1,
      }}
      className="grid grid-cols-2   max-lg:grid-cols-1 gap-5 "
    >
      {filtereddata?.map((e) => (
        <Cardforproduct
        varients={{
          hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          category={e.category}
          title={e.title}
          key={e.id}
          description={e.description}
        product_sizes={e.product_sizes}
        product_image_urls={e.product_image_urls}
        product_colors={e.product_colors}
        product_rating={e.product_rating}
          id={e.id}
          images={e.images}
          price={e.price}
          mrp={e.mrp}
        />
      ))}
    </motion.div>
  );
};

export default Items;
