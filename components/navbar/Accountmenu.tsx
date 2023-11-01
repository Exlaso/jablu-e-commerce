"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
interface listtype {
  title: string;
  href: string;
  image: JSX.Element;
  onClick?: ()=> void;
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
          image: <LoginIcon />,
          title: "Account Settings",
          href: "/Account/Information",
        },
        {
          image: <FavoriteIcon />,
          title: "Favourites",
          href: "/Favourites",
        },
        {
          image: <ShoppingCartIcon  />,
          title: "Orders",
          href: "#",
        },
      ]);
    } else {
      setlist([
        {
          image: <LoginIcon />,
          title: "Sign in",
          href: `/Auth/Signin?callbackUrl=/`,
        },
        {
          image: <SensorOccupiedIcon />,
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
              setAccountmenu(false);
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
              {e.image}
              <h1>{e.title}</h1>
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Accountmenu;
