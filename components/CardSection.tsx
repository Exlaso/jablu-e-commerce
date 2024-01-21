"use client";
import React, {ReactNode} from "react";
import {Product} from "@/lib/Interfaces";
import {motion, Variants} from "framer-motion";
import {EcommerceCard} from "@/components/mt/Card";
import Cardforproduct from "@/components/Cardforproduct";

const CardSection = ({
                         data,
                         children,
                     }: {
    data: Product[] | undefined;
    children: ReactNode;
}) => {
    const divVarients: Variants = {
        visible: {
            transition: {staggerChildren: 0.1},
        },
        hidden: {},
    };

    const varients: Variants = {
        hidden: {
            scale: 0.5,
            opacity: 0,
            y: 50,
        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div>
            <h2 className="text-4xl font-bold px-4 break-all capitalize">
                {children}
            </h2>
            <motion.div
                variants={divVarients}
                viewport={{once: true}}
                initial="hidden"
                whileInView={"visible"}
                className="p-4 flex gap-4 overflow-x-auto snap-mandatory snap-x"
            >
                {data?.slice(0, 3)?.map((item) => (
                    <EcommerceCard
                        key={item.id}
                        mrp={item?.mrp}
                        title={item.title}
                        price={item.price}
                        image={item.images}
                        availablecolors={item.product_colors}

                    />
                ))}
            </motion.div>
        </div>
    );
};

export default CardSection;
