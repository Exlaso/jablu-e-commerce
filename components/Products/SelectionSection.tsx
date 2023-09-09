"use client";
import { dataforproduct } from "@/lib/Interfaces";
import { FunctionComponent, useState } from "react";
import Colors from "./Colors";
import Size from "./Size";
import CartButton from "./CartButton";

interface SelectionSectionProps {
  data: dataforproduct[];
}

const SelectionSection: FunctionComponent<SelectionSectionProps> = ({
  data,
}) => {
  const colors = ["red", "white", "black", "cyan", "gray", "green"];
  const sizes: string[] = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const [color, setColor] = useState<string>(colors.at(0) as string);
  const [size, setsize] = useState<string>(sizes.at(0) as string);
  type varientsofsize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

  const {
    image,
    title,
    price,
    description,
    rating,
    category,
    id,
  }: dataforproduct = data?.at(0) as dataforproduct;

  const Fetchcolor = (e: string) => {
    setColor(e);
  };
  const FetchSize = (e: varientsofsize) => {
    setsize(e);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className=" flex gap-3 items-center">
        <span className="border border-green-500 text-xl  font-bold text-green-500 rounded-md py-2 px-4">
          ₹
          {(price * 82.69).toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 pb-[1px] text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {rating.rate}
        </span>{" "}
        <span>·</span>
        <span className="underline cursor-pointer">{rating.count} reviews</span>
      </div>
      <Colors
        Colors={colors}
        FetchColor={Fetchcolor}
      ></Colors>
      <Size
        Size={sizes}
        FetchSize={FetchSize}
      ></Size>

      <CartButton
        data={{
          id,
          image,
          title,
          category,
          description,
          price,
          rating,
          color,
          size,
          count: 1,
        }}
      ></CartButton>
    </>
  );
};

export default SelectionSection;
