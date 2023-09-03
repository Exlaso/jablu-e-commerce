import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [isbaropen, setIsbaropen] = useState<boolean>(false);
  const imageurl = isbaropen?"/static/icons/navbar/cross.svg":"/static/icons/navbar/search.svg";
  
  return (
    <div className="flex">
      <div>
        <input
        className={`  border border-black focus:outline-0  text-black p-3 rounded-sm   ${isbaropen?"flex":"hidden"}`}
        placeholder="Search Anything here"
          type="search"
          name="searchbar"
          id="searchbar"
        />
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
    </div>
  );
};

export default SearchBar;
