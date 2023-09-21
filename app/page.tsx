import LandingSection from "@/components/LandingSection";
import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import { dataforproduct } from "@/lib/Interfaces";
import ProccessSection from "@/components/Parallax/Parallax";
import Exploresection from "@/components/Exploresection";
import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";

const cats = [
  {
    src: "/static/Categories/anime.png",
    title: "Anime",
    description: "Elevate your anime style with our collection of wearable treasures. From iconic characters to unique designs, embrace your anime obsession.",
  },
  {
    src: "/static/background_imgs/exclusive.jpeg",
    title: "Jablu Exclusive",
    description: "Explore JABLU's exclusive wearables - a curated selection of one-of-a-kind fashion pieces designed to make you stand out. Discover uniqueness today!",
  },
  {
    src: "/static/background_imgs/exclusive.jpg",
    title: "Quirky tshirts",
    description: "Step into comfort and style with our Oversized T-shirt collection. Embrace the relaxed, trendy look with these spacious and versatile garments.",
  },
  {
    src: "/static/background_imgs/mat.jpeg",
    title: "Unfit to Fit yoga mat",
    description: "UTF Card",
  },
];

export default async function Home() {
  const Items: dataforproduct[] | undefined = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col">
      <LandingSection />
      <Exploresection />
      <ProccessSection />
      <CategoriesDisplay
        cats={cats}
        className={
          "my-20 w-full grid-cols-4 py-10 max-lg:grid-cols-2 grid min-h-screen gap-1 bg-black"
        }
      />

      <div className=" px-16 py-4 max-lg:px-0">
        <ProductsCategories data={Items} />
      </div>
    </main>
  );
}
