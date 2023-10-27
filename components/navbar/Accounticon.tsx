"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Accountmenu from "./Accountmenu";
import { useSession } from "next-auth/react";

const Accounticon = () => {
  const [accountmenu, setAccountmenu] = useState<boolean>(false);

  const [userpfp, setuserpfp] = useState<string>(
    "/static/icons/navbar/face.svg"
  );
  const { status } = useSession();

  useEffect(() => {
    
    if (status === "authenticated") {
      
      fetch("/api/GetuserPFP", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          pragma: "no-cache",
          "cache-control": "no-cache",
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
  return (
    <>
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
            src={userpfp}
            width={35}
            height={35}
            className="object-cover rounded-full aspect-square border"
            alt="user pfp"
          ></Image>
        </motion.div>
        <AnimatePresence>
          {accountmenu && <Accountmenu setAccountmenu={setAccountmenu} />}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Accounticon;
