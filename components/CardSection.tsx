"use client";
import React, { ReactNode, useState } from "react";
import Cardforproduct from "./Cardforproduct";
import { dataforproduct } from "@/lib/Interfaces";
import { Variants, motion } from "framer-motion";

const CardSection = ({
  data,
  children,
}: {
  data: undefined;
  children: ReactNode;
}) => {
  const [filtereditems, setFiltereditems] = useState<
    dataforproduct[] | undefined
  >(data);


  const divVarients:Variants = {
    visible: {
      transition: { staggerChildren: .1, 
      },
      
    },
    hidden: {},
  };

  const varients: Variants = {
    hidden: {
      scale: 0.5,opacity:0,
      y: 50,
    },
    visible: {
      scale: 1,opacity:1,
      y: 0, 
    },
  };

  return (
    <div>
      <h1 className="text-4xl font-bold px-4 whitespace-nowrap capitalize">
        {children}
      </h1>
      {/* <Filter data={data} filteritem={filteritem}/> */}
      <motion.div 
      variants={divVarients}
      viewport={{once:true}}
        initial="hidden"
        whileInView={"visible"}
        className="p-4 flex gap-4 overflow-x-auto snap-mandatory snap-x"
      >
        {filtereditems?.map((item) => (
          <Cardforproduct
            varients={varients}
            id={item.id}
            category={item.category}
            image={item.image}
            price={item.price}
            key={item.id}
            description={item.description}
            rating={item.rating}
            title={item.title}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CardSection;
