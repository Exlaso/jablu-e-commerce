"use client";
import {  useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "graphql-ws";
import { Badge } from "@material-tailwind/react";
import { FaShoppingCart} from "react-icons/fa";



interface ShoppingCartIconProps {token:string, isAuthed:boolean}
const ShoppingCartIcon = ({token,isAuthed}:ShoppingCartIconProps) => {
const [Noofitemsincart, setNoofitemsincart] = useState<number>(0);


useEffect(() => {
  if (isAuthed) {
    
    const wsClient = createClient({
      url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL!,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    
    
    const unsub = wsClient.subscribe(
    {
      query: `subscription GetnoofitemsinCart {
        cart {
          product_id
        }
      }`,
    },
    {
      next: (data: {
        data: {
          cart: {product_id:string}[];
        };
      }) => {

        setNoofitemsincart(data.data.cart.length ?? 0);
      },
      error() {
        console.log("Error in Cart WS - ");
        
      },
      complete() {
        console.log("Completed Cart WS");
        
      },
    }
  );

  
  return () => {
    unsub();
  };
}

}, [isAuthed,token])


  
  return (

    <Link href={"/ShoppingBag"} className={""}>
      <span className={" flex justify-end items-end border-green-600 h-full w-full"}>
        <Badge

          content={Noofitemsincart}
          color="cyan"
          >
          <FaShoppingCart className={"h-7  w-7"} />
        </Badge>
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
