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
import { useRouter } from "next/navigation";
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
        .then((data) => setuserpfp(data.data));
    }

    return () => {};
  }, [status]);

  useEffect(() => {
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
  }, []);
  const router = useRouter();
  const { carted } = useCartContext();
  const numberofcardedproducts: number = carted.length;
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
        className={`px-2 min-h-[8vh] w-full fixed flex z-[25] justify-center backdrop-blur-sm items-center top-0 border-b border-b-slate-500 transition-transform duration-300 ease-in-out ${
          isScrolling ? "-translate-y-full" : "translate-y-0"
        } `}
      >
        <nav className="container mx-auto ">
          <div className="justify-between items-center grid grid-cols-3">
            <div
              className="z-40 relative"
              onClick={() => setIsmenuopen((prev) => !prev)}
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
              {showsearch && (
                <li className="max-lg:hidden">
                  <SearchBar />
                </li>
              )}

              <Link
                className="flex gap-1 items-center justify-center relative"
                href={"/ShoppingBag"}
              >
                {/* <h1 className="text-lg text-black font-bold">Shopping Bag</h1> */}{" "}
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
                  {numberofcardedproducts !== 0 && (
                    <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute -top-0 -right-1 rounded-full text-[10px] leading-none text-white font-medium">
                      <span className="mt-[1px]">{numberofcardedproducts}</span>
                    </div>
                  )}
                </motion.div>
              </Link>
              <motion.li
                initial="hidden"
                animate="visible"
                className="flex justify-center group flex-col relative items-center gap-2 text-lg font-bold"
              >
                {/* <h1>Your Account</h1> */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Image
                    onClick={() => {
                      if (status === "unauthenticated") {
                        router.push("/Signin");
                      } else if (status === "authenticated") {
                        setAccountmenu((e) => !e);
                      }
                    }}
                    src={userpfp}
                    width={35}
                    height={35}
                    className="rounded-full aspect-square  object-cover"
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
