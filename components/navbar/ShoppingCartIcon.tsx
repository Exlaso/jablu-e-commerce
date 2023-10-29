"use client";
import { useCartContext } from "@/Store/StoreContext";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
interface ShoppingCartIconProps {}
const ShoppingCartIcon: FunctionComponent<ShoppingCartIconProps> = () => {
  const { noItemsinCart } = useCartContext();

  return (

    <Link href={"/ShoppingBag"}>
      <span>
        <Badge
          badgeContent={noItemsinCart}
          color="primary"
          >
          <ShoppingBagOutlinedIcon fontSize="large" />
        </Badge>
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
