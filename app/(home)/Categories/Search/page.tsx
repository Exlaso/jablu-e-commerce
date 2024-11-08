import Items from "@/components/Search/Items";
import SortBy from "@/components/Search/SortBy";
import getAllProducts from "@/utils/GetProduct";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Search - Jablu.in",
  description:
    "Find what you're looking for at Jablu.in, your trusted E-commerce website. Explore a wide selection of unique clothing with premium designs. Search for your favorite items and discover new treasures.",
  keywords: "Jablu.in, E-commerce, Search, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",
 
    metadataBase: new URL("https://jablu.exlaso.in"),
 openGraph: {
    title: "Search - Jablu.in",
    url: "https://jablu.exlaso.in/Categories/Search",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jablu.exlaso.in/icon.svg",
    description:
      "Find what you're looking for at Jablu.in, your trusted E-commerce website. Explore a wide selection of unique clothing with premium designs. Search for your favorite items and discover new treasures.",
  },
    alternates: {
        canonical: "https://jablu.exlaso.in/Categories/Search",
    },
};







const Page = async (
  props: {
    searchParams: Promise<{ q: string; rate: string }>;
  }
) => {
  const searchParams = await props.searchParams;
  const Query: string | undefined = searchParams.q
    ? decodeURIComponent(searchParams?.q)
    : undefined;

  const data = await getAllProducts();
  let filtereddata = data?.filter((product) =>
    product.title.toLowerCase().includes(Query ? Query?.toLowerCase() : "")
  );
  switch (searchParams.rate) {
    case "relevant":
      filtereddata = data?.filter((product) =>
        product.title.toLowerCase().includes(Query ? Query?.toLowerCase() : "")
      );

      break;
    case "Low-to-high":
      filtereddata = filtereddata?.sort((a, b) => a.price - b.price);
      break;
    case "High-to-low":
      filtereddata = filtereddata?.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }
  return (
   <>
        <div className="flex flex-col gap-9 min-h-screen">
          {Query !== undefined ? (
            <h1>
              Showing {filtereddata?.length} results for{" "}
              <span className="font-bold uppercase exlasi">{Query}</span>
            </h1>
          ) : null}
          <Items filtereddata={filtereddata}></Items>
        </div>
        <div className="w-full max-md:row-start-2 ">
          <div className="w-full md:sticky top-[12vh]  ">
            <p className="text-sm text-gray-500 my-3 ">Sort by</p>
            <SortBy Query={Query} />
          </div>
        </div>
   </>
  );
};

export default Page;
