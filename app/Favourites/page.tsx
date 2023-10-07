import Items from "@/components/Favourites/Items";
import BackButton from "@/components/Utils/Backbtn";
import { Metadata } from "next";
import { signOut } from "next-auth/react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Favourites",
  description:
    "Your list of desired items or products you have expressed interest in.",
};
const Page = async () => {
  const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
  const res = await fetch(
    process.env.NEXTAUTH_URL +
      `/api/Getallwishlist?jablu_jwt_token=${token?.value}`,
    {
      cache: "no-cache",
    }
  );
  let data = await res.json();
  let wishlistdata;
  if (data.errorcode === "TCNF") {
    signOut();
    wishlistdata = [];
  } else {
    wishlistdata = data.message.map((e: any) => ({ ...e.product }));
  }

  return (
    <>
      <main className="px-[10%] min-h-screen gap-14 py-[15vh] flex flex-col max-md:px-5 w-full ">
        <div className="grid gap-3 ">
          <BackButton />
          <h1 className="flex items-center text-4xl font-bold exlasi">
            <Image
              src={"/static/icons/navbar/buy.svg"}
              alt={"buy"}
              width={40}
              height={40}
            ></Image>
            Favourites
          </h1>
        </div>
        <section className="relative flex flex-col items-start justify-between ">
          <div className="flex flex-col w-full gap-10 ">
            <Items wishlistdata={wishlistdata} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
