"use client";
import {  dataforproductwithmetadata } from "@/lib/Interfaces";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type context = [dataforproductwithmetadata[],Dispatch<SetStateAction<dataforproductwithmetadata[]>>]
const Storecontext = createContext<any>(null);


const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [carted, setCarted] = useState<[]>([]);

  return (
    <Storecontext.Provider value={[carted, setCarted]}>
      {children}
    </Storecontext.Provider>
  );
};
export const useCartContext = ():context => {
  return useContext(Storecontext);
};
export default ContextProvider;