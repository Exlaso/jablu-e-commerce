"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MenuCard from "../MenuCard";

import { JabluLogo } from "@/components/jabluLogo";
import Link from "next/link";

export function Catergory_Menu_Bar({ category }: { category: string[] }) {
  const [ismenuopen, setIsmenuopen] = useState<boolean>(false);
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
      <div
        className="relative md:hidden z-[22]"
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
      <div
        className={"flex max-md:hidden  items-center  shrink-0 gap-2 h-max  "}
      >
        <JabluLogo
          className={"card-blur !p-1    shrink-0 grow-0   "}
          size={45}
        />
        <div
          className={"flex whitespace-nowrap     capitalize card-blur  h-max  "}
        >
          {category.map((e, i) => (
            <div
              key={i}
              className="hidden md:flex items-center animated-underline after:h-[1px] after:bg-white relative px-2  gap-3 appleFont text-sm "
            >
              <Link href={"/Categories/Search/" + e.replaceAll(" ", "-")}>
                {e}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
