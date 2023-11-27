"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, {  useState } from "react";
import Accountmenu from "./Accountmenu";

const Accounticon = ({ imgurl }: { imgurl:string }) => {
  const [accountmenu, setAccountmenu] = useState<boolean>(false);

  return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center justify-center gap-2 text-lg font-bold group"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.85 }}
        >
          <Image
            onClick={() => {
              setAccountmenu((e) => !e);
            }}
            src={imgurl}
            width={35}
            loading="eager"
            height={35}
            className="object-cover rounded-full aspect-square border"
            alt="user pfp"
          ></Image>
        </motion.div>
        <AnimatePresence>
          {accountmenu && <Accountmenu setAccountmenu={setAccountmenu} />}
        </AnimatePresence>
      </motion.div>
  );
};

export default Accounticon;
