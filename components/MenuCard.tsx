import { motion } from "framer-motion";
import React from "react";
const MenuCard = () => {
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
      data: [
        { title: "", href: "" },
        { title: "Men Tshirts ", href: "" },
        { title: "Jablu's Exclusives", href: "" },
        { title: "Unfit to fit Exclusives", href: "" },
      ],
    },
    {
      title: "Retro Fits",
      data: [
        { title: "Watches", href: "" },
        { title: "Cap", href: "" },
        { title: "Phone Case", href: "" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      exit={{ y: "-100%" }}
      className="fixed py-[12vh] top-0 w-full h-[60%] min-h-[60%] z-20 border-b border-b-black bg-white"
    >
   
      <div className="z-10 grid grid-cols-2 w-full h-full ">
        {Menu.map((data, i) => (
          <ul
            key={i}
            className="flex justify-center h-full gap-3  flex-wrap items-center flex-col"
          >
            <h1 className="text-2xl font-bold capitalize">{data.title}</h1>
            <div className="flex flex-col gap-1 justify-center items-center">
              {data.data.map((d) => (
                <li
                  className="text-lg"
                  key={d.title}
                >
                  {d.title}
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCard;
