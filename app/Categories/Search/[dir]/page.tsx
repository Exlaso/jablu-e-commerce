import Items from "@/components/Search/Items";
import SortBy from "@/components/Search/SortBy";
import { Categories, Product } from "@/lib/Interfaces";
import { GetCategories } from "@/lib/db/hasura";
import getAllProducts from "@/utils/GetProduct";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { dir: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
      "Jabluu",
      "Jablu",
      "Jablu.in",
      "Vedant Bhavsar",
      "Exlaso",
      "Jablu tshirt",
    ],
    description: dir?.description,

    metadataBase: new URL("https://jabluu.vercel.app"),
    openGraph: {
      title: dir?.name.toLowerCase() + " - Jablu.in",
      url: `https://jabluu.vercel.app/${dir?.name.replaceAll(" ", "-").toString().toLowerCase()}`,
      siteName: "Jablu.in",
      type: "website",
      images: "https://jabluu.vercel.app/icon.svg",
      description: dir?.description,
    },
  };
}

const Dir = async ({
  params,
  searchParams,
}: {
  params: { dir: string };
  searchParams: { rate: string };
}) => {
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
