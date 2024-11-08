"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Categories = ({ category }: { category: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  const pathname: string | undefined = decodeURIComponent(
    usePathname().split("/").at(-1) as string
  ).toLowerCase();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul className="flex flex-col gap-3 capitalize max-md:hidden">
        {["All", ...category].map((e, i) => {
          return (
            <Link
              shallow={true}
              key={i}
              href={"/Categories/Search/" + e.replaceAll(" ", "-")}
              className={`hover:underline text-highlight p-1 rounded-sm  ${
                e.replaceAll(" ", "-").toLowerCase() === pathname && "bg-tertiary "
              }`}
            >
              {e}
            </Link>
          );
        })}
      </ul>
      <div
        ref={divRef}
        className="relative w-full text-left md:hidden"
      >
        <button
          onClick={toggleDropdown}
          type="button"
          className="px-4 py-2 text-gray-700 w-full capitalize items-center border justify-between flex hover:bg-gray-100 focus:outline-none"
        >
          {pathname}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-1 p-2 w-full capitalize z-20  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex flex-col gap-2">
              {["All", ...category].map((e, i) => (
                <Link 
                  shallow
                  key={i}
                  onClick={() => setIsOpen(false)}
                  href={"/Categories/Search/" + e.replaceAll(" ", "-")}
                  className={`hover:underline text-black  ${
                    e.replaceAll(" ", "-").toLowerCase() === pathname && "underline"
                  }`}
                >
                  {e}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
