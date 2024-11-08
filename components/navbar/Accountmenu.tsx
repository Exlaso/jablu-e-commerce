"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, {
  Dispatch,
  JSX,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { PiSignIn } from "react-icons/pi";
import { IoIosCreate } from "react-icons/io";
import { List, ListItem } from "@material-tailwind/react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

interface listtype {
  title: string;
  href: string;
  image: JSX.Element;
  onClick?: () => void;
}

const Accountmenu = ({
  setAccountmenu,
}: {
  setAccountmenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const [list, setlist] = useState<listtype[]>([]);
  const { status } = useSession();

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "authenticated") {
      setlist([
        {
          image: <IoSettingsOutline className={"h-6 w-6"} />,
          title: "Account Settings",
          href: "/Account/Information",
        },
        {
          image: <CiHeart className={"h-6 w-6"} />,
          title: "Favourites",
          href: "/Favourites",
        },
        {
          image: <FaShoppingCart className={"h-6 w-6"} />,
          title: "Orders",
          href: "/Orders",
        },
      ]);
    } else {
      setlist([
        {
          image: <PiSignIn />,
          title: "Sign in",
          href: `/Auth/Signin?callbackUrl=/`,
        },
        {
          image: <IoIosCreate />,
          title: "Sign up",
          href: `/Auth/Signup?callbackUrl=/`,
        },
      ]);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setAccountmenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setAccountmenu, status]);

  return (
    <motion.div
      ref={divRef}
      exit={{ opacity: 0 }}
      variants={{
        hidden: { y: 10, visibility: "hidden" },
        visible: { y: 0, visibility: "visible" },
      }}
      transition={{
        height: {
          duration: 0,
          delay: 0.1,
        },
      }}
      // @ts-ignore
      className="absolute w-64 border font-normal overflow-hidden rounded-lg top-[110%] right-0 shadow-lg  bg-white"
    >
      <motion.ul
        initial={"hidden"}
        animate="visible"
        transition={{
          staggerChildren: 0.15,
        }}
        // @ts-ignore
        className="flex flex-col  text-lg text-black items-start justify-around font-bold gap-3"
      >
        <List
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className={"w-full "}
        >
          {list.map((e) => (
            <Link
              key={e.title}
              href={e.href}
              className={"w-full h-full"}
              onClick={(xe) => {
                setAccountmenu(false);
                if (e.href === "") {
                  xe.preventDefault();
                  if (e.onClick) {
                    e.onClick();
                  }
                }
              }}
            >
              <ListItem
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                key={e.title}
                className="flex justify-start items-center h-full w-full "
              >
                <li className="flex items-center justify-start gap-3 w-full h-full">
                  {e.image}
                  <h1>{e.title}</h1>
                </li>
              </ListItem>
            </Link>
          ))}
        </List>
      </motion.ul>
    </motion.div>
  );
};

export default Accountmenu;
