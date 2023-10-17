import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
const Accountmenu = ({
  setAccountmenu,
}: {
  setAccountmenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const Logout = () => {
    fetch("/api/DeleteCookie", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => signOut());
  };

  const list: {
    title: string;
    href: string;
    image: string;
    onClick?: Function;
  }[] = [
    {
      image: "/static/menu_content/login.svg",
      title: "Account Settings",
      href: "/Account/Information",
    },
    {
      image: "/static/icons/navbar/favourite.svg",
      title: "Favourites",
      href: "/Favourites",
    },
    {
      image: "/static/menu_content/orders.svg",
      title: "Orders",
      href: "#",
    },
    // {
    //   image: "/static/menu_content/logout.svg",
    //   title: "Logout",
    //   href: "",
    //   onClick: Logout,
    // },
  ];

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setAccountmenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setAccountmenu]);

  return (
    <motion.div
      ref={divRef}
      exit={{opacity:0}}  
      variants={{
        hidden: { y: 10, opacity: 0, height: 0 },
        visible: { y: 0, opacity: 1, height: "auto" },
      }}
      transition={{
        height: {
          duration: 0,
          delay: 0.1,
        },
      }}
      className="absolute w-64 border font-normal overflow-hidden rounded-lg top-[110%] right-0 shadow-lg  bg-white"
    >
      <motion.ul
        initial={"hidden"}
       
        animate="visible"
        transition={{
          staggerChildren: 0.15,
        }}
        className="flex flex-col p-4 text-lg text-black items-start justify-around font-bold gap-3"
      >
        {list.map((e) => (
          <Link
            key={e.title}
            href={e.href}
            onClick={(xe) => {
              setAccountmenu(false)
              if (e.href === "") {
                xe.preventDefault();
                if (e.onClick) {
                  e.onClick();
                }
              }
            }}
            className="flex items-start justify-start h-full w-full"
          >
            <motion.li
              className="flex items-center justify-start gap-3 w-full h-full"
              whileHover={{
                y: -5,
              }}
              variants={{
                hidden: { x: -10, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <Image
                src={e.image}
                width={30}
                height={30}
                loading="eager"
                alt="search"
              ></Image>
              <h1>{e.title}</h1>
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Accountmenu;
