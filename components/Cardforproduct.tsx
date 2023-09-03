import { dataforproduct } from "@/lib/Interfaces";
import Image from "next/image";
import React from "react";

const Cardforproduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: dataforproduct) => {
  return (
    <div className="flex min-w-[40vh] snap-center rounded-3xl shadow-lg justify-evenly  items-start flex-col border border-blue-600  relative p-3">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-80 h-80 max-lg:w-40 max-lg:h-40 object-contain mx-auto  "
      ></Image>
      <h1 className="max-sm:text-sm">{title}</h1>
      <p>{category}</p>
      <span className="flex gap-1 justify-center items-center">
        Ratings: {rating.rate}
        <Image
          src={"/static/icons/productcard/star.svg"}
          alt={"star"}
          width={20}
          height={20}
        ></Image>
      </span>
      <h1 className="text-2xl text-green-600 font-bold">
        ₹{(price * 82.69).toLocaleString("en-US", { maximumFractionDigits: 2 })}
      </h1>
    </div>
  );
};

export default Cardforproduct;
