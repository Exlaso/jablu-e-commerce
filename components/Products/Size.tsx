"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, MouseEvent, useState } from "react";

interface colorsProps {
  Size: string[] | undefined;
  FetchSize: (e: "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL") => void;
}
const Size: FunctionComponent<colorsProps> = ({ Size, FetchSize }) => {
  const allsize: ("XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL")[] = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
  ];
  const [currentColor, setCurrentColor] = useState(Size?.at(0));
  const ColorChoose = (
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    setCurrentColor(e.currentTarget.id);
  };

  return (
    <div className="text-lg flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <span> Size: </span>
          <span className="font-bold text-black capitalize">
            {currentColor}
          </span>
        </div>
        <Link
          href={"#"}
          className="hover:underline capitalize text-[#3B82F7] text-sm"
        >
          See Sizing Chart
        </Link>
      </div>
      <div className="flex gap-3 flex-wrap justify-between ">
        {Size === undefined && "No size Found for this product"}
        {allsize?.map((e) => {
          let isavailable: boolean;
          if (Size?.includes(e)) {
            isavailable = true;
          } else {
            isavailable = false;
          }
          let highlight: string = "";
          if (e === currentColor) {
            highlight = " outline outline-cyan-600 outline outline-offset-1";
          } else {
            highlight = "";
          }
          return (
            <motion.button
              disabled={!isavailable}
              key={e}
              initial={{ scale: 1 }}
              {...(isavailable && { whileTap: { scale: 0.9 } })}
              id={e}
              onClick={(e) => {
                ColorChoose(e);
                FetchSize(
                  e.currentTarget.id as
                    | "XS"
                    | "S"
                    | "M"
                    | "L"
                    | "XL"
                    | "XXL"
                    | "XXXL"
                );
              }}
              className={`disabled:after:absolute disabled:bg-gray-500/10  disabled:after:bg-gray-500/50 disabled:opacity-[25] disabled:after:inset-0  disabled:after:my-auto disabled:after:-rotate-[20deg] overflow-hidden after:bg-red-500 after:h-[1px] after:w-full relative  rounded-3xl select-none ${
                isavailable && " hover:bg-black/20"
              }  shrink-0 border  py-1 px-8 ${highlight}`}
            >
              {e}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
