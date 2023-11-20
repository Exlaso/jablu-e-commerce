"use client"
import React, {createContext, ReactNode, useContext, useState} from "react";
import { type_useCartContext, typeofshippingmethods} from "@/lib/Interfaces";


const StoreContext = createContext<any>(null);

export const ContextProvider = ({children}: {
    children: ReactNode
}) => {
    const [region, setRegion] = React.useState<string>('India');
    const [regionstate, setRegionstate] = useState<string>("Gujarat");
    const [phoneno, setPhoneno] = useState<string>("");
    const [address1, setAddress1] = useState<string>("");
    const [address2, setAddress2] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [pincode, setPincode] = useState<string>("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("");
    const [progress, setProgress] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const [savedaddress, setSavedaddress] = useState<boolean>(true);
    const [selectedaddress, setselectedaddress] = useState<string>("");
    const [products, setproducts] = useState< {color: string, count: number, size: string, product_id: string, product: {images: string, price: number, title: string}}[][]>([]);
    const [shippingmethod, setShippingmethod] = useState<typeofshippingmethods>({
        title: "",
        price: 0,
        description: ""
    })
    return <StoreContext.Provider value={{
        total, setTotal,
        progress, setProgress,
        shippingmethod, setShippingmethod,
        region, setRegion,
        regionstate, setRegionstate,
        phoneno, setPhoneno,
        address1, setAddress1,
        address2, setAddress2,
        city, setCity,
        pincode, setPincode,
        name, setName,
        lastname, setLastname,
        savedaddress, setSavedaddress,
        products, setproducts,
        selectedaddress, setselectedaddress
    }}>{children}

    </StoreContext.Provider>
}

export const useCartContext = (): type_useCartContext => {
    return useContext(StoreContext);
}