"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type context = {
  noItemsinCart: number;
  FetchNoifItemsinCart: () => void;
};
const Storecontext = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [noItemsinCart, setnoItemsinCart] = useState<number>(0);
  const FetchNoifItemsinCart = () => {
    
    fetch(`/api/GetNoofitemsincart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "pragma":"no-cache",
        "cache-control":"no-cache"
      },
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
          setnoItemsinCart(0);
        } else {
          setnoItemsinCart(data.message);
        }
      });
  };

  return (
    <Storecontext.Provider value={{ noItemsinCart, FetchNoifItemsinCart }}>
      {children}
    </Storecontext.Provider>
  );
};
export const useCartContext = (): context => {
  return useContext(Storecontext);
};
export default ContextProvider;
