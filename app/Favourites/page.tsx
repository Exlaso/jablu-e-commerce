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
  if (!token?.value) {
    signOut();
  }
  const res = await fetch(
    process.env.VERCEL_URL +
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
          <h1 className="font-bold text-4xl exlasi flex items-center">
            <Image
              src={"/static/icons/navbar/buy.svg"}
              alt={"buy"}
              width={40}
              height={40}
            ></Image>
            Favourites
          </h1>
        </div>
        <section className="flex flex-col  justify-between items-start relative ">
          <div className=" w-full flex-col  flex gap-10">
            <Items wishlistdata={wishlistdata} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
