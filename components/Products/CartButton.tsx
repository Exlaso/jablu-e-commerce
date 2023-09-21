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
      fetch("/api/InsertIntoCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          size: data.size,
          product_id: data.id,
          count: data.count,
          color: data.color
        }),
      })
        .then((res) => res.json())
        .then(() => { 
            setBuyicon("/static/icons/done.svg");
            setIsadding(false);
            setTimeout(() => {
              setBuyicon("/static/icons/navbar/buy.svg");
            }, 2000); 
        });
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
