"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuCard from "./MenuCard";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [ismenuopen, setIsmenuopen] = useState<boolean>(false);

  const menustate = ismenuopen
    ? "/static/icons/navbar/cross.svg"
    : "/static/icons/navbar/menu.svg";
  return (
    <>
      <AnimatePresence>{ismenuopen && <MenuCard></MenuCard>}</AnimatePresence>
      <nav className="px-2 min-h-[8vh] w-full fixed flex z-20 justify-center backdrop-blur-md items-center top-0 border-b border-b-slate-500">
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
                <span className="font-bold text-center  flex shadowhand justify-evenly flex-wrap">
                  <Image
                    src={"/static/logo/jablu4.svg"}
                    alt={"jablulogo"}
                    width={80}
                    height={80}
                  ></Image>
                </span>
              </div>
            <ul className="flex space-x-4 items-center justify-end">
              <li>
                <SearchBar />
              </li>
              <li>
                <Image
                  src={"/static/icons/navbar/cart.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
              </li>
              <li>
                <Image
                  src={"/static/icons/navbar/buy.svg"}
                  width={30}
                  height={30}
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
