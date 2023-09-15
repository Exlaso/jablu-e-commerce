import Items from "@/components/Shopping/Items";
import BackButton from "@/components/Utils/Backbtn";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import { FunctionComponent } from "react";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description:
    "Your list of desired items or products you have expressed interest in.",
};
interface CartPageProps {}
const CartPage: FunctionComponent<CartPageProps> = () => {
  return (
    <>
      <div className="px-[10%]  min-h-screen gap-14 py-[15vh] max-md:px-5 w-full  flex flex-col ">
        <div className="grid gap-3">
          <BackButton />
          <h1 className="font-bold text-4xl text-black flex items-center">
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
          <Items />
        </section>
      </div>
    </>
  );
};

export default CartPage;
