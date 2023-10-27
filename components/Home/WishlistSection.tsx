import React from "react";
import CardSection from "../CardSection";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const WishlistSection = async () => {
  const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
  let wishlistdata;
  if (token?.value) {
    
    const res = await fetch(
      process.env.NEXTAUTH_URL +
      `/api/Getallwishlist?jablu_jwt_token=${token?.value}`
      );
      let data = await res.json();
      if (data.errorcode === "TCNF") {
        wishlistdata = [];
      } else {
        wishlistdata = data?.message?.map((e: any) => ({ ...e.product }));
      }
    }
else{
  wishlistdata = []
}
  return (
    wishlistdata.length !== 0 && (
      <CardSection data={wishlistdata}>Wishlist</CardSection>
    )
  );
};

export default WishlistSection;
