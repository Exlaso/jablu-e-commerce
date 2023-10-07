import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const Storecontext = createContext<any>(null);

type context = {
  isdark: boolean;
  setIsdark: Dispatch<SetStateAction<boolean>>;
};
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isdark, setIsdark] = useState<boolean>(false);
  return (
    <Storecontext.Provider value={{ isdark, setIsdark }}>
      {children}
    </Storecontext.Provider>
  );
};
export const useModeContext = (): context => {
  return useContext(Storecontext);
};
export default ContextProvider;
