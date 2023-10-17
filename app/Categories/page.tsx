import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";
import { GetCategories } from "@/lib/db/hasura";
import React from "react";

const Page = async () => {
  const data: { name: string; image: string; description: string }[] =
    await GetCategories();
  return (
    <div className="px-[15vh] py-[15vh] max-md:px-[1vh]">
      <h1 className="text-4xl font-bold">Categories</h1>
      <CategoriesDisplay
        cats={data.map((e) => ({
          title: e.name,
          src: e.image,
          description: e.description,
        }))} 
        innerClassName="rounded-3xl "
        className="my-20 w-full grid-cols-1 gap-2  grid min-h-screen   "
      />
    </div>
  );
};

export default Page;
