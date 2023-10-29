"use client";
import { useCartContext } from "@/Store/StoreContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
interface ShoppingCartIconProps {}
const ShoppingCartIcon: FunctionComponent<ShoppingCartIconProps> = () => {
  const { noItemsinCart } = useCartContext();

  return (
    <Link
      className="relative flex items-center justify-center gap-1"
      href={"/ShoppingBag"}
    >
      <Badge
        badgeContent={noItemsinCart}
        color="primary"
      >
        <ShoppingBagOutlinedIcon fontSize="large" />
      </Badge>
    </Link>
  );
};

export default ShoppingCartIcon;
