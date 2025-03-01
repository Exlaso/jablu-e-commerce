import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import ProccessSection from "@/components/Parallax/Parallax";
import Exploresection from "@/components/Exploresection";
import CategoriesCardContainer from "@/components/Categories/CategoriesCardContainer";
import WishlistSection from "@/components/Home/WishlistSection";
import { GetCategories } from "@/lib/db/hasura";
import { Product } from "@/lib/Interfaces";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import LandingSection from "@/components/LandingSection";
import { CategoriesSection } from "@/components/Categories/CategoriesSection";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingSection />
      <Exploresection />
      <ProccessSection />
      <CategoriesSection />
      <div className=" px-16 py-4 max-lg:px-0 flex flex-col gap-5 ">
        <WishlistSection />
        <ProductsCategories />
      </div>
    </main>
  );
}
