import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import ProccessSection from "@/components/Parallax/Parallax";
import Exploresection from "@/components/Exploresection";
import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";
import WishlistSection from "@/components/Home/WishlistSection";
import { GetCategories } from "@/lib/db/hasura";
import { Product } from "@/lib/Interfaces";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import LandingSection from "@/components/LandingSection";

export default async function Home() {
  const Items: Product[] | undefined = await getAllProducts();
  const data: { name: string; image: string; description: string }[] =
    await GetCategories();
  const sortFunction = (a: any, b: any) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };
  return (
    <main className="flex min-h-screen flex-col">
      <LandingSection />
      <Exploresection />
      <ProccessSection />
      <CategoriesDisplay
        className="py-20"
        data={data.sort(sortFunction).slice(0, 3)}
      />
      <div className=" px-16 py-4 max-lg:px-0 flex flex-col gap-5 ">
        <WishlistSection />
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
