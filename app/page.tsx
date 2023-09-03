import Image from "next/image";
import { JSX } from "react";
import Navbar from "@/components/navbar";
import LankingSection from "@/components/LandingSection";
import CardSection from "@/components/CardSection";
import Filter from "@/components/Filter";
import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import { dataforproduct } from "@/lib/Interfaces";

export default async function Home() {
  const Items: dataforproduct[] | undefined = await getAllProducts();
  const Manclothings = Items?.filter((e) => e.category === "men's clothing");
  const Jewelery = Items?.filter((e) => e.category === "jewelery");

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <LankingSection />
      <div className="w-full mx-auto text-center min-h-[20vh] relative bg-transparent  before:shadow-2xl flex justify-center items-center  text-gray-200  before:bg-purple-700 before:absolute before:inset-0 before:-z-10  before:skew-y-3">
        <h2 className="text-4xl max-sm:text-xl font-bold text-yellow-400 shadowhand tracking-widest">
          &quot;We Prefer Only Premium Things&quot;
        </h2>
      </div>
      <div className=" px-16 py-4 max-lg:px-0">
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
