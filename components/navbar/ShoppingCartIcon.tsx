"use client";
import {  useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import { createClient } from "graphql-ws";



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

    <Link href={"/ShoppingBag"}>
      <span>
        <Badge
          badgeContent={Noofitemsincart}
          color="primary"
          >
          <ShoppingBagOutlinedIcon fontSize="large" />
        </Badge>
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
