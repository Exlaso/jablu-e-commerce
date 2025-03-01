"use client";
import { motion } from "framer-motion";
import { FunctionComponent, MouseEvent, useState } from "react";
import { ColorsType } from "@/lib/Interfaces";

interface colorsProps {
  Colors: ColorsType[] | undefined;
  FetchColor: (e: ColorsType | undefined) => void;
}

const Colors: FunctionComponent<colorsProps> = ({ Colors, FetchColor }) => {
  const [currentColor, setCurrentColor] = useState(Colors?.at(0));

  const ColorChoose = (
    e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) => {
    setCurrentColor(Colors?.find((ex) => e.currentTarget.id === ex?.color));
  };

  return (
    <div className="text-lg flex flex-col gap-4 ">
      <div>
        <span> Color: </span>
        <span className="font-bold text-highlight capitalize">
          {" "}
          {currentColor?.color}{" "}
        </span>
      </div>

      <div className="flex gap-3  flex-wrap justify-between ">
        {Colors === undefined && "No Colors Found for this product"}

        {Colors?.map((e) => {
          let highlight: string = "";
          if (e === currentColor) {
            highlight = " outline outline-cyan-600  outline outline-offset-1";
          } else {
            highlight = "";
          }
          return (
            <motion.span
              key={e.color}
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                ColorChoose(e);
                FetchColor(
                  Colors?.find((ex) => e.currentTarget.id === ex.color),
                );
              }}
              style={{ background: e.hexcode }}
              className={` rounded-3xl   shrink-0 border  py-4 px-12   ${highlight}`}
            ></motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
