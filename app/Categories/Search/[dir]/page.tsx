import Items from "@/components/Search/Items";
import SortBy from "@/components/Search/SortBy";
import { dataforproduct } from "@/lib/Interfaces";
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
  const data = await getAllProducts();
  let filtereddata: dataforproduct[] | undefined;
  if (directory === "All") {
    filtereddata = data;
  } else {
    filtereddata = data?.filter(
      (product) =>
        product.category.replaceAll(" ", "-").toLowerCase() ===
        directory.toLowerCase()
    );
  }
  if (filtereddata?.length === 0) {
    notFound();
  }
  const { category }: dataforproduct = filtereddata?.at(0) as dataforproduct;

  return {
    title: category.toLowerCase() + " - Jablu.in",
    keywords: [
      category.toLowerCase() + " - Jablu.in",
      category,
      "Jabluu.in",
      "Jabluu",
      "Jablu",
      "Jablu.in",
      "Vedant Bhavsar",
      "Exlaso",
      "Jablu tshirt",
    ],
    description: category,

    metadataBase: new URL("https://jabluu.vercel.app"),
    openGraph: {
      title: category.toLowerCase() + " - Jablu.in",
      url: `https://jabluu.vercel.app/${category
        .replaceAll(" ", "-")
        .toString()
        .toLowerCase()}`,
      siteName: "Jablu.in",
      type: "website",
      images: "https://jabluu.vercel.app/icon.svg",
      description: category,
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
  let filtereddata: dataforproduct[] | undefined;
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
