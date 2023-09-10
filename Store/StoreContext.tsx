"use client";
import { dataforproductwithmetadata } from "@/lib/Interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type context = {
  carted: dataforproductwithmetadata[];
  setCarted: Dispatch<SetStateAction<dataforproductwithmetadata[]>>,
};
const Storecontext = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [carted, setCarted] = useState<{}>([]);
 

  return (
    <Storecontext.Provider value={{ carted, setCarted }}>
      {children}
    </Storecontext.Provider>
  );
};
export const useCartContext = (): context => {
  return useContext(Storecontext);
};
export default ContextProvider;
