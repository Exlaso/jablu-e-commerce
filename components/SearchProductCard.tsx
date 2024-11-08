import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { title: string; id: number; imgurl: string };
const SearchProductCard = ({ title, id, imgurl }: props) => {
  return (
    <Link href={`Products/${id}`}>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        // @ts-ignore
        className="flex gap-2 items-center "
      >
        <Image
          className="rounded-md"
          src={`${imgurl}`}
          alt={`${title} Image`}
          width={50}
          height={50}
        ></Image>
        {title}
      </motion.div>
    </Link>
  );
};

export default SearchProductCard;
