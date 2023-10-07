import Items from "@/components/Shopping/Items";
import BackButton from "@/components/Utils/Backbtn";
import { Metadata } from "next";
import { signOut } from "next-auth/react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import Image from "next/image";
import { FunctionComponent } from "react";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description:
    "Your list of desired items or products you have expressed interest in.",
};

interface CartPageProps {}
const CartPage: FunctionComponent<CartPageProps> = async () => {
  const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
  if (!token?.value) {
    signOut();
  }
  const res = await fetch(
    process.env.VERCEL_URL +
      `/api/GetCartitems?jablu_jwt_token=${token?.value}`,
    {
      cache: "no-cache",
    }
  );
  let data = await res.json();
  let Carteddata;

  if (data.errorcode === "TCNF") {
    signOut();
    Carteddata = [];
  } else {
    Carteddata = data.message.map((e: any) => ({ ...e, ...e.product }));
  }

  return (
    <>
      <div className="px-[10%]  min-h-screen gap-14 py-[15vh] max-md:px-5 w-full  flex flex-col ">
        <div className="grid gap-3">
          <BackButton />
          <h1 className="font-bold text-4xl exlasi flex items-center">
            <Image
              src={"/static/icons/navbar/buy.svg"}
              alt={"buy"}
              width={40}
              height={40}
            ></Image>
            Shopping Bag
          </h1>
        </div>
        <section className="flex flex-col justify-between items-start relative ">
          <Items Carteddata={Carteddata} />
        </section>
      </div>
    </>
  );
};

export default CartPage;
