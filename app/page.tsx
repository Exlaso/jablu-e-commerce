import Navbar from "@/components/navbar";
import LandingSection from "@/components/LandingSection";
import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import { dataforproduct } from "@/lib/Interfaces";
import ProccessSection from "@/components/Parallax/Parallax";
import Image from "next/image";
import Link from "next/link";
import Exploresection from "@/components/Exploresection";

export default async function Home() {
  const Items: dataforproduct[] | undefined = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col">
      <LandingSection />
      <Exploresection />
      <ProccessSection />

      <div className=" px-16 py-4 max-lg:px-0">
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
