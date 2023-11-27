"use client";

import React from "react";
import {Product} from "@/lib/Interfaces";
import {motion} from "framer-motion";
import {EcommerceCard} from "@/components/mt/Card";

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
            className="grid grid-cols-2   max-lg:grid-cols-1 gap-5 mx-auto"
        >
            {filtereddata?.map((e) => (
                <EcommerceCard image={e.images} title={e.title} price={e.price} mrp={e.mrp}
                               availablecolors={e.product_colors} key={e.id}/>
            ))}
        </motion.div>
    );
};

export default Items;
