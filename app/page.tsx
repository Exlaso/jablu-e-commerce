import Navbar from "@/components/navbar";
import LankingSection from "@/components/LandingSection";
import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import { dataforproduct } from "@/lib/Interfaces";
import ProccessSection from "@/components/Parallax/Parallax";

export default async function Home() {
  const Items: dataforproduct[] | undefined = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <LankingSection />
      <div className="w-full mx-auto text-center min-h-[20vh] relative bg-transparent  before:shadow-2xl flex justify-center items-center  text-gray-200  before:bg-[#0B2447] before:absolute before:inset-0 before:-z-10  before:skew-y-1">
        <h2 className="text-3xl max-sm:text-xl font-extrabold tracking-widest uppercase">
          &quot;<span className="text-yellow-300">Express</span> yourself with a
          twist of <span className="text-red-600">uniqueness</span>.&quot;
        </h2>
      </div>
      <ProccessSection />
      
      <div className=" px-16 py-4 max-lg:px-0">
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
;