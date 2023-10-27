"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartContext } from "@/Store/StoreContext";
import Accountmenu from "./navbar/Accountmenu";
import { useSession } from "next-auth/react";
import Accounticon from "./navbar/Accounticon";
import ShoppingCartIcon from "./navbar/ShoppingCartIcon";
const Navbar = ({
  showsearch = true,
  category,
}: {
  showsearch?: boolean;
  category: string[] | undefined;
}) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  

  useEffect(() => {
    if (typeof window !== undefined) {
      let prevScrollPos: number = window.scrollY;

      const handleScroll = (): void => {
        const currentScrollPos: number = window.scrollY;

        if (currentScrollPos > 0) {
          setIsScrolling(prevScrollPos < currentScrollPos);
        } else {
          setIsScrolling(false);
        }

        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const [ismenuopen, setIsmenuopen] = useState<boolean>(false);
  const [accountmenu, setAccountmenu] = useState<boolean>(false);
  const menustate = ismenuopen
    ? "/static/icons/navbar/cross.svg"
    : "/static/icons/navbar/menu.svg";

  return (
    <>
      <AnimatePresence>
        {ismenuopen && (
          <MenuCard
            Categories={category}
            setIsmenuopen={setIsmenuopen}
          ></MenuCard>
        )}
      </AnimatePresence>
      <header
        className={`px-2 min-h-[8vh] w-full fixed  flex z-[25] justify-center backdrop-blur-sm items-center top-0 border-b border-b-slate-500 transition-transform duration-300 ease-in-out ${
          isScrolling ? "-translate-y-full" : "translate-y-0"
        } `}
      >
        <nav className="container mx-auto ">
          <div className="grid items-center justify-between grid-cols-3">
            <div
              className="relative z-40"
              onClick={() => setIsmenuopen((prev) => !prev)}
            >
              <Image
                src={menustate}
                alt="menu"
                width={30}
                height={30}
                className="invertsvg"
              ></Image>
            </div>
            <div className="text-xl font-bold ">
              <Link
                href="/"
                className="flex flex-wrap font-bold text-center shadowhand justify-evenly"
              >
                <Image
                  className="invertsvg"
                  src={"/static/logo/jablu4.svg"}
                  alt={"jablulogo"}
                  width={80}
                  height={80}
                ></Image>
              </Link>
            </div>
            <ul className="flex items-center justify-end space-x-4">
              {showsearch && (
                <li className="max-lg:hidden">
                  <SearchBar />
                </li>
              )}
              <ShoppingCartIcon />
              <Accounticon />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
