"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MenuCard from "./MenuCard";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartContext } from "@/Store/StoreContext";
const Navbar = () => {
const [carted] = useCartContext()
  const numberofcardedproducts:number = carted.length
  const [ismenuopen, setIsmenuopen] = useState<boolean>(false);
  const menustate = ismenuopen
    ? "/static/icons/navbar/cross.svg"
    : "/static/icons/navbar/menu.svg";
  return (
    <>
      <AnimatePresence>{ismenuopen && <MenuCard></MenuCard>}</AnimatePresence>
      <nav className="px-2 min-h-[8vh] w-full fixed flex z-20 justify-center backdrop-blur-sm items-center top-0 border-b border-b-slate-500">
        <div className="container mx-auto ">
          <div className="justify-between items-center grid grid-cols-3">
            <div
              className="z-40 relative"
              onClick={() => setIsmenuopen((prev) => !prev)}
              // whileTap={{ scaleY: 0 }}
              // animate={{ scaleY: 1 }}
            >
              <Image
                src={menustate}
                alt="menu"
                width={30}
                height={30}
              ></Image>
            </div>
            <div className=" font-bold text-xl">
              <Link
                href="/"
                className="font-bold text-center  flex shadowhand justify-evenly flex-wrap"
              >
                <Image
                  src={"/static/logo/jablu4.svg"}
                  alt={"jablulogo"}
                  width={80}
                  height={80}
                ></Image>
              </Link>
            </div>
            <ul className="flex space-x-4 items-center justify-end">
              <li>
                <SearchBar />
              </li>
              <li className="flex gap-1 items-center justify-center ">
                {/* <h1 className="text-lg text-black font-bold">Favourite</h1> */}
                <Image
                  src={"/static/icons/navbar/favourite.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
              </li>
              <Link
                className="flex gap-1 items-center justify-center relative"
                href={"/Cart"}
              >
                {/* <h1 className="text-lg text-black font-bold">Cart</h1> */}
                <Image
                  src={"/static/icons/navbar/buy.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
               <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute -top-0 -right-1 rounded-full text-[10px] leading-none text-white font-medium"><span className="mt-[1px]">
                {numberofcardedproducts}
                </span></div>
              </Link>
              <li className="flex justify-center items-center gap-2 text-lg font-bold">
                {/* <h1>Your Account</h1> */}
                <Image
                  className="rounded-full"
                  src={"/static/icons/navbar/pfp1.jpeg"}
                  width={40}
                  height={40}
                  alt="search"
                ></Image>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
