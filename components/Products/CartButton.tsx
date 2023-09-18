"use client";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

interface CartButtonProps {
  data: dataforproductwithmetadata;
  setCarted: Dispatch<SetStateAction<dataforproductwithmetadata[]>>;
  islogin: boolean;
}

const CartButton: FunctionComponent<CartButtonProps> = ({
  data,
  setCarted,
  islogin,
}) => {
  const router = useRouter();
  const path = usePathname();
  const [buyicon, setBuyicon] = useState<string>(
    "/static/icons/navbar/buy.svg"
  );
  const [isadding, setIsadding] = useState(false);

  const addtoCartHandler = () => {
    if (islogin) {
      setBuyicon("/static/icons/loading.svg");
      setIsadding(true);
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
      setTimeout(() => {
        setBuyicon("/static/icons/done.svg");
        setIsadding(false);
        setTimeout(() => {
          setBuyicon("/static/icons/navbar/buy.svg");
        }, 2000);
      }, 500);
    } else {
      router.push(`/Signin?callback=${encodeURIComponent(path)}`);
    }
  };

  return (
    <motion.button
      disabled={isadding}
      type="button"
      {...(!isadding && { whileTap: { scale: 0.9 } })}
      initial={{ scale: 1 }}
      onClick={addtoCartHandler}
      className="flex bg-slate-100/80 grow select-none items-center justify-center gap-2 rounded-full w-fit p-4 shadow-lg hover:bg-slate-200 duration-100"
    >
      <Image
        src={buyicon}
        alt={"Buy Icon"}
        width={25}
        height={25}
      ></Image>
      <p>{islogin ? "Add to Bag" : "Login to Add to Bag"}</p>
    </motion.button>
  );
};

export default CartButton;
