"use client";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface CartButtonProps {
  data: dataforproductwithmetadata;
  setCarted: Dispatch<SetStateAction<dataforproductwithmetadata[]>>;
}

const CartButton: FunctionComponent<CartButtonProps> = ({
  data,
  setCarted,
}) => {
  const addtoCartHandler = () => {
    setCarted((prev) => {
      const existingObject = prev.find(
        (item) =>
          item.id === data.id &&
          item.color === data.color &&
          item.size === data.size
      );
      if (existingObject !== undefined) {

        return [
          ...prev.filter(
            (e) =>
              !(
                e.id === data.id &&
                e.color === data.color &&
                e.size === data.size
              )
          ),
          { ...data, count: existingObject.count + data.count },
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
      className="flex bg-slate-100/80 grow select-none items-center justify-center gap-2 rounded-full w-fit p-4 shadow-lg hover:bg-slate-200 duration-100"
    >
      <Image
        src={"/static/icons/navbar/buy.svg"}
        alt={"Buy Icon"}
        width={25}
        height={25}
      ></Image>
      <p>Add to Bag</p>
    </motion.button>
  );
};

export default CartButton;
