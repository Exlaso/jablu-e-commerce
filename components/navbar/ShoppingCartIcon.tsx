'use client'
import { useCartContext } from "@/Store/StoreContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ShoppingCartIconProps {
    
}
const ShoppingCartIcon: FunctionComponent<ShoppingCartIconProps> = () => {
    const { noItemsinCart } = useCartContext();

    return ( 
        <Link
          className="relative flex items-center justify-center gap-1"
          href={"/ShoppingBag"}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
          >
            <Image
              src={"/static/icons/navbar/buy.svg"}
              width={30}
              height={30}
              alt="search"
              className="invertsvg"
            ></Image>
            {noItemsinCart !== 0 && (
              <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute -top-0 -right-1 rounded-full text-[10px] leading-none text-white font-medium">
                <span className="mt-[1px]">{noItemsinCart}</span>
              </div>
            )}
          </motion.div>
        </Link> );
}
 
export default ShoppingCartIcon;