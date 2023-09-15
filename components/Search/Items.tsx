"use client";

import React from "react";
import Cardforproduct from "../Cardforproduct";
import { dataforproduct } from "@/lib/Interfaces";
import { motion } from "framer-motion";
const Items = ({
  filtereddata,
}: {
  filtereddata: dataforproduct[] | undefined;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      transition={{
        staggerChildren: 0.1,
      }}
      className="grid grid-cols-2  max-lg:grid-cols-1 gap-5 "
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
          id={e.id}
          image={e.image}
          images={e.images}
          price={e.price}
          rating={e.rating}
        />
      ))}
    </motion.div>
  );
};

export default Items;
