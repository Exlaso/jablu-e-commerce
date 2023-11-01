"use client";
import React, { ReactNode,  useEffect, useState } from "react";

const NavbarHeader = ({ children }: { children: ReactNode }) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let prevScrollPos: number = window.scrollY;

      const handleScroll = (): void => {
        const currentScrollPos: number = window.scrollY;

        if (currentScrollPos > 0) {
          setIsScrolling(prevScrollPos < currentScrollPos);
        } else {
          setIsScrolling(false);
        }

        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } 
  }, []);
  

  return (
    <header
      className={`px-2 min-h-[8vh] w-full fixed  flex z-[27] justify-center backdrop-blur-sm items-center top-0 border-b border-b-slate-500 transition-transform duration-300 ease-in-out ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      } `}
    >
    {children}
    </header>
  );
};

export default NavbarHeader;
