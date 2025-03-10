"use client";
import { Productwithmetadata } from "@/lib/Interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { toast } from "sonner";
import { Typography } from "@material-tailwind/react";
import { MdOutlineVpnKey } from "react-icons/md";

interface CartButtonProps {
  data: Productwithmetadata;
  islogin: boolean;
}

const CartButton: FunctionComponent<CartButtonProps> = ({ data, islogin }) => {
  const path = usePathname();
  const [isadding, setIsadding] = useState(false);

  const addtoCartHandler = () => {
    if (islogin) {
      setIsadding(true);
      toast.promise(
        fetch("/api/InsertIntoCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            size: data.size,
            product_id: data.id,
            count: data.count,
            color: data.color,
          }),
        })
          .then((res) => res.json())
          .then(() => {
            setIsadding(false);
          }),
        {
          loading: "Adding to Cart...",
          success: () => {
            return (
              <section className="flex flex-col gap-1">
                <p className={"capitalize"}>
                  {data.title.toLowerCase()} x {data.count} was successfully
                  added to cart.
                </p>
                <Link href={"/ShoppingBag"} className="underline">
                  View Cart
                </Link>
              </section>
            );
          },

          error: "Error",
        },
      );
    } else {
      toast.error(
        <section className="flex flex-col gap-2">
          <Typography
            variant={"paragraph"}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Login required to add items to cart.
          </Typography>
          <div className="flex justify-start items-center gap-2">
            <MdOutlineVpnKey fontSize="small"></MdOutlineVpnKey>
            <Link
              href={`/Auth/Signin?callback=${encodeURIComponent(path)}`}
              className="underline"
            >
              Login Here
            </Link>
          </div>
        </section>,
      );
    }
  };

  return (
    <motion.button
      disabled={isadding}
      type="button"
      {...(!isadding && { whileTap: { scale: 0.9 } })}
      initial={{ scale: 1 }}
      onClick={addtoCartHandler}
      className="flex bg-[var(--tertiary-color)] grow select-none items-start justify-center gap-2 rounded-full w-fit p-4 shadow-lg hover:bg-gray-500/50 duration-100"
    >
      <Image
        src={"/static/icons/navbar/buy.svg"}
        alt={"Buy Icon"}
        width={25}
        className="invertsvg"
        height={25}
      ></Image>
      Add to Bag
    </motion.button>
  );
};

export default CartButton;
