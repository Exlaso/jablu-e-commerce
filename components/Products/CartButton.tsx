"use client";
import { useCartContext } from "@/Store/StoreContext";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CartButtonProps {
  data: dataforproductwithmetadata;
}

const CartButton: FunctionComponent<CartButtonProps> = ({ data }) => {
  const [, setCarted] = useCartContext();
  const addtoCartHandler = () => {
    setCarted((prev) => {
      const existingObject = prev.find((item) => item.id === data.id);
      if (existingObject) {
        return [
          ...prev.filter((e) => e.id !== data.id),
          { ...data, count: data.count++ },
        ];
      } else {
        return [...prev, data];
      }
    });
  };

  return (
    <motion.button
      type="button"
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={addtoCartHandler}
      className="flex  grow-0 select-none items-center justify-center gap-2 rounded-full border p-6 text-green-600 border-green-600 bg-green-50/20"
    >
      <Image
        src={"/static/icons/navbar/buy.svg"}
        alt={"Buy Icon"}
        width={25}
        height={25}
      ></Image>
      <p>Add to Cart</p>
    </motion.button>
  );
};

export default CartButton;
