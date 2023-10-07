"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartContext } from "@/Store/StoreContext";
import Accountmenu from "./navbar/Accountmenu";
import { signIn, useSession } from "next-auth/react";
const Navbar = ({
  showsearch = true,
  category,
}: {
  showsearch?: boolean;
  category: string[] | undefined;
}) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [userpfp, setuserpfp] = useState<string>(
    "/static/icons/navbar/facenosignin.svg"
  );
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/GetuserPFP", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            setuserpfp(data.data);
          }
        });
    }

    return () => {};
  }, [status]);

  useEffect(() => {
    
    if (window !== undefined) {
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
  const { noItemsinCart } = useCartContext();
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
              ></Image>
            </div>
            <div className="text-xl font-bold ">
              <Link
                href="/"
                className="flex flex-wrap font-bold text-center shadowhand justify-evenly"
              >
                <Image 
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

              <Link
                className="relative flex items-center justify-center gap-1"
                href={"/ShoppingBag"}
              >
                {/* <h1 className="text-lg font-bold text-black">Shopping Bag</h1> */}{" "}
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Image 
                    src={"/static/icons/navbar/buy.svg"}
                    width={30}
                    height={30}
                    alt="search"
                  ></Image>
                  {noItemsinCart !== 0 && (
                    <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute -top-0 -right-1 rounded-full text-[10px] leading-none text-white font-medium">
                      <span className="mt-[1px]">{noItemsinCart}</span>
                    </div>
                  )}
                </motion.div>
              </Link>
              <motion.li
                initial="hidden"
                animate="visible"
                className="relative flex flex-col items-center justify-center gap-2 text-lg font-bold group"
              >
                {/* <h1>Your Account</h1> */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Image 
                    onClick={() => {
                      if (status === "unauthenticated") {
                        void signIn("okta");
                      } else if (status === "authenticated") {
                        setAccountmenu((e) => !e);
                      }
                    }}
                    src={userpfp}
                    width={35}
                    height={35}
                    className="object-cover rounded-full aspect-square"
                    alt="user pfp"
                  ></Image>
                </motion.div>{" "}
                <AnimatePresence>
                  {accountmenu && (
                    <Accountmenu setAccountmenu={setAccountmenu} />
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
