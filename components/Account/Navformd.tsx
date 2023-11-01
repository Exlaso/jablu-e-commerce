import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, {  useState } from "react";
const Navformd = ({
  navigation,
  path,
}: {
  navigation: { title: string; href: string }[];
  path: string;
}) => {
  const [ismenuopen, setIsmenuopen] = useState<boolean>(false);

  return (
    <div className="w-full h-full md:hidden">
      <div className="text-2xl justify-between flex font-bold my-5 text-[var(--highlight-color)] bg-tertiary p-3">
        <span>Manage Account</span>
        <Image
          onClick={() => setIsmenuopen((e) => !e)}
          src={
            ismenuopen
              ? "/static/icons/navbar/cross.svg"
              : "/static/icons/navbar/menu.svg"
          }
          alt={"Menu Icon"}
          width={30}
          className="invertsvg"
          height={30}
        ></Image>
      </div>
      <motion.div
        initial={{ height: 0 }}
        className="overflow-hidden"
        {...(ismenuopen ? { animate: { height: "auto" } } : "")}
      >
        <motion.ul className="flex flex-col gap-10 py-5  text-xl font-semibold px-2">
          {navigation.map((e, i) => {
            let selected = "";
            if (path.includes(e.href)) {
              selected = "  bg-tertiary text-[var(--highlight-color)] ";
            }
            return (
              <Link
                href={e.href}
                key={i}
                className={selected + " p-2"}
              >
                {e.title}
              </Link>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navformd;
