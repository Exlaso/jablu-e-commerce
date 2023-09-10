"use client";
import { dataforproductwithmetadata,dataforproduct } from "@/lib/Interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type context = {
  carted: dataforproductwithmetadata[];
  setCarted: Dispatch<SetStateAction<dataforproductwithmetadata[]>>;
  favourited: dataforproduct[];
  setFavourited: Dispatch<SetStateAction<dataforproduct[]>>;
};
const Storecontext = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [carted, setCarted] = useState<dataforproductwithmetadata[]>([]);
  const [favourited, setFavourited] = useState<dataforproductwithmetadata[]>(
    []
  );

  return (
    <Storecontext.Provider
      value={{ carted, setCarted, favourited, setFavourited }}
    >
      {children}
    </Storecontext.Provider>
  );
};
export const useCartContext = (): context => {
  return useContext(Storecontext);
};
export default ContextProvider;
