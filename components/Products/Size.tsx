"use client";
import { motion } from "framer-motion";
import { FunctionComponent, MouseEvent, useState } from "react";

interface colorsProps {
  Size: string[];
  FetchSize: (e: "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL") => void;
}

const Size: FunctionComponent<colorsProps> = ({ Size, FetchSize }) => {
  const [currentColor, setCurrentColor] = useState(Size.at(0));
  const ColorChoose = (
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    setCurrentColor(e.currentTarget.id);
  };

  return (
    <div className="text-lg flex flex-col gap-4">
      <div>
        <span> Size :</span>
        <span className="font-bold text-black capitalize">
          {" "}
          {currentColor}{" "}
        </span>
      </div>
      <div className="flex gap-3 flex-wrap ">
        {Size.map((e) => {
          let highlight:string = ""
          if (e === currentColor) {
            highlight =
              " outline outline-cyan-600 outline outline-offset-1";
          } else {
            highlight = "";
          }
          return (
            <motion.span
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
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
              className={` rounded-3xl  shrink-0 border  py-1 px-8 ${highlight}`}
            >
              {e}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
