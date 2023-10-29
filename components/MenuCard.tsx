import { motion } from "framer-motion";

import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
const MenuCard = ({
  Categories,
  setIsmenuopen,
}: {
  Categories: string[] | undefined;

  setIsmenuopen: Dispatch<SetStateAction<boolean>>;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsmenuopen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsmenuopen]);

  type menuwithdata = {
    title: string;
    data: menu[];
  };
  type menu = {
    title: string;
    href: string;
  };

  const Menu: menuwithdata[] = [
    {
      title: "Wearable",
      data: Categories?.map((e) => ({ title: e, href: e })) as menu[],
    },
  ];

  return (
    <motion.div
      ref={divRef}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      exit={{ y: "-100%" }}
      className="fixed left-0  pt-[10%] pb-[5%] max-sm:pt-[30%] max-sm:pb-[15%] top-0 w-full  h-auto z-[21] border-b border-b-black bg-[var(--primary-color)]"
    >
      <div className="flex flex-col gap-8">
        <div className="px-5 py-5 lg:hidden">
          <SearchBar onClick={setIsmenuopen} />
        </div>
        <div className="z-10 grid grid-cols-1 capitalize gap-3 px-7 text-center ">
          {Menu.map((data, i) => (
            <ul
              key={i}
              className="flex justify-start   gap-3 flex-wrap items-center flex-col"
            >
              <h1 className="text-2xl font-bold capitalize">{data.title}</h1>
              <div className="flex flex-col gap-1 justify-center items-start text-lg">
                {data.data.map((d) => (
                  <Link
                    href={"/Categories/Search/" + d.href.replaceAll(" ", "-")}
                    key={d.title}
                    onClick={()=> {
                      setIsmenuopen(false)
                    }}
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </ul>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
