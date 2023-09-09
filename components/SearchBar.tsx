"use client";
import { dataforproduct } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import SearchProductCard from "./SearchProductCard";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [maindata, setmaindata] = useState<dataforproduct[]>();
  const [data, setdata] = useState<dataforproduct[]>();
  const [isbaropen, setIsbaropen] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts().then((data) => {
      setdata(data);
      setmaindata(data);
    });

    return () => {};
  }, [getAllProducts]);

  const imageurl = isbaropen
    ? "/static/icons/navbar/cross.svg"
    : "/static/icons/navbar/search.svg";

  const SearchPromtHandler = (e: FormEvent<HTMLInputElement>) => {
    const promt: string = e.currentTarget.value.toLowerCase();
    const length: number = promt.length;
    console.log(promt);

    setdata(maindata?.filter((e) => e.title.toLowerCase().includes(promt)));
  };
  return (
    <>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
      className="flex">
        <div className={`flex-col w-full  ${isbaropen ? "flex" : "hidden"}`}>
          <input
            onInput={SearchPromtHandler}
            className={`  border border-black focus:outline-0  text-black p-3 rounded-sm  `}
            placeholder="Search Anything here"
            type="search"
            name="searchbar"
            id="searchbar"
          />
          <div className="backdrop-blur-sm  bg-white text-black shadow-2xl absolute top-full mx-2 left-0 right-0 rounded-xl px-[10vw] py-3 flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center">Results</h1>
            <hr />
            {data?.length === 0 && <div className="py-10">No Item Found</div>}
            {data?.map((e, i) => (
              <SearchProductCard
                imgurl={e.image}
                id={e.id}
                title={e.title}
                key={i}
              />
            ))}
          </div>
        </div>
        <Image
          onClick={() => {
            setIsbaropen((prev) => !prev);
          }}
          src={imageurl}
          width={30}
          height={30}
          alt="search"
        ></Image>
      </motion.div>
    </>
  );
};

export default SearchBar;
