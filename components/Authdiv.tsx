"use client";
import { motion } from "framer-motion";
import { FunctionComponent, ReactNode } from "react";

interface AuthdivProps {
  children: ReactNode;
}

const Authdiv: FunctionComponent<AuthdivProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
      }}
      className=" p-8 rounded max-w-xl max-lg:max-w-[80vw]  max-sm:max-w-[98vw] relative flex flex-col gap-12 AuthDivcss text-justify "
    >
      {children}
    </motion.div>
  );
};

export default Authdiv;
