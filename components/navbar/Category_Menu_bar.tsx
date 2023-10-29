"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MenuCard from "../MenuCard";

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
        className="relative z-[22]"
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
    </>
  );
}
