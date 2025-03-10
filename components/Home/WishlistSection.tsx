import React from "react";
import CardSection from "../CardSection";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { Product } from "@/lib/Interfaces";

const WishlistSection = async () => {
  const token: RequestCookie | undefined = (await cookies()).get(
    "jablu_jwt_token",
  );
  let wishlistdata;
  if (token?.value) {
    const res = await fetch(
      process.env.NEXTAUTH_URL +
        `/api/Getallwishlist?jablu_jwt_token=${token?.value}`,
      {
        cache: "no-cache",
      },
    );
    const data = await res.json();
    if (data.errorcode === "TCNF") {
      wishlistdata = [];
    } else {
      wishlistdata = data?.message?.map((e: { product: Product }) => ({
        ...e.product,
      }));
    }
  } else {
    wishlistdata = [];
  }
  return (
    wishlistdata.length !== 0 && (
      <CardSection href={"/Favourites"} data={wishlistdata}>
        Wishlist
      </CardSection>
    )
  );
};

export default WishlistSection;
