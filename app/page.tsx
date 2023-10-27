import LandingSection from "@/components/LandingSection";
import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import { dataforproduct } from "@/lib/Interfaces";
import ProccessSection from "@/components/Parallax/Parallax";
import Exploresection from "@/components/Exploresection";
import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";
import WishlistSection from "@/components/Home/WishlistSection";
import { GetCategories } from "@/lib/db/hasura";



export default async function Home() {
  const Items: dataforproduct[] | undefined = await getAllProducts();
  const data: { name: string; image: string; description: string }[] =
  await GetCategories();
  return (
    <main className="flex min-h-screen flex-col">
      <LandingSection />
      <Exploresection />
      <ProccessSection />
      <CategoriesDisplay className="py-20"  data={data}/>

      <div className=" px-16 py-4 max-lg:px-0 flex flex-col gap-5 ">
        <WishlistSection />
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
