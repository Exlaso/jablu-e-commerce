import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";
import { GetCategories } from "@/lib/db/hasura";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Explore Categories - Jablu.in",
  description:
    "Discover a world of unique clothing and premium designs at Jablu.in. Explore a variety of categories, from fashion and accessories to home decor. Your trusted E-commerce destination.",
  keywords: "Jablu.in, E-commerce, Categories, Unique clothing, Premium designs, Fashion, Accessories, Home decor, Exlaso, Vedant Bhavsar",
 
    metadataBase: new URL("https://jabluu.vercel.app"),
 openGraph: {
    title: "Explore Categories - Jablu.in",
    url: "https://jabluu.vercel.app/Categories",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jabluu.vercel.app/icon.svg",
    description:
      "Discover a world of unique clothing and premium designs at Jablu.in. Explore a variety of categories, from fashion and accessories to home decor. Your trusted E-commerce destination.",
  },
};

const Page = async () => {
  const data: { name: string; image: string; description: string }[] =
    await GetCategories();
  return (
    <div className="px-[15vh] py-[15vh] max-md:px-[1vh]">
      <h1 className="text-4xl font-bold">Categories</h1>
      <CategoriesDisplay
        data={data} 
        innerClassName="rounded-3xl "
        className="my-20 w-full grid-cols-1 gap-2  grid min-h-screen   "
      />
    </div>
  );
};

export default Page;
