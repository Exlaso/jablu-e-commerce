import Items from "@/components/Search/Items";
import SortBy from "@/components/Search/SortBy";
import { Categories, Product } from "@/lib/Interfaces";
import { GetCategories } from "@/lib/db/hasura";
import getAllProducts from "@/utils/GetProduct";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ dir: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  // read route params
  const directory = decodeURIComponent(params.dir);
  const data: Categories[] = await GetCategories();
  let filtereddata: Categories[] | undefined;
  if (directory === "All") {
    filtereddata = data;
  } else {
    filtereddata = data?.filter(
      (dir) =>
        dir.name.replaceAll(" ", "-").toLowerCase() === directory.toLowerCase()
    );
  }
  if (filtereddata?.length === 0) {
    notFound();
  }
  const dir = filtereddata.at(0);

  return {
    title: dir?.name.toLowerCase() + " - Jablu.in",
    keywords: [
      dir?.name.toLowerCase() + " - Jablu.in",
      "Jablu.in",
      "jablu",
      "Jablu",
      "Jablu.in",
      "Vedant Bhavsar",
      "Exlaso",
      "Jablu tshirt",
    ],
    description: dir?.description,


    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
      title: dir?.name.toLowerCase() + " - Jablu.in",
      url: `https://jablu.exlaso.in/${dir?.name.replaceAll(" ", "-").toString().toLowerCase()}`,
      siteName: "Jablu.in",
      type: "website",
      images: "https://jablu.exlaso.in/icon.svg",
      description: dir?.description,
    },
    alternates: {
      canonical: `https://jablu.exlaso.in/${dir?.name.replaceAll(" ", "-").toString().toLowerCase()}`,
    },

  };
}

const Dir = async (
  props: {
    params: Promise<{ dir: string }>;
    searchParams: Promise<{ rate: string }>;
  }
) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const directory = decodeURIComponent(params.dir);
  const data = await getAllProducts();
  let filtereddata: Product[] | undefined;
  if (directory === "All") {
    filtereddata = data;
  } else {
    filtereddata = data?.filter(
      (product) =>
        product?.category.replaceAll(" ", "-").toLowerCase() ===
        directory.toLowerCase()
    );
  }

  if (filtereddata?.length === 0) {
    notFound();
  }

  switch (searchParams.rate) {
    case "relevant":
      filtereddata = data?.filter(
        (product) =>
          product.category.replaceAll(" ", "-").toLowerCase() ===
          directory.toLowerCase()
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
      <Items filtereddata={filtereddata}></Items>
      <div className="w-full max-md:row-start-2 ">
        <div className="w-full md:sticky top-[12vh]  ">
          <p className="text-sm text-gray-500 my-3 ">Sort by</p>
          <SortBy />
        </div>
      </div>
    </>
  );
};

export default Dir;
