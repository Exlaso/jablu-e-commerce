import React from "react";
import CategoriesCardContainer from "@/components/Categories/CategoriesCardContainer";
import { GetCategories } from "@/lib/db/hasura";

export const CategoriesSection = async () => {
  const data = await GetCategories();

  const sortFunction = (a: { name: string }, b: { name: string }) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };
  return (
    <CategoriesCardContainer
      className="py-20"
      data={data.sort(sortFunction).slice(0, 3)}
    />
  );
};
