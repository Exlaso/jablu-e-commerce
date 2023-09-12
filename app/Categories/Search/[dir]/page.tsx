import Cardforproduct from "@/components/Cardforproduct";
import SortBy from "@/components/Search/SortBy";
import { dataforproduct } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import React from "react";

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
      (product) => product.category.toLowerCase() === directory.toLowerCase()
    );
  }
  console.log(searchParams);

  switch (searchParams.rate) {
    case "relevant":
      filtereddata = data?.filter(
        (product) => product.category.toLowerCase() === directory.toLowerCase()
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
      <div className="grid grid-cols-2  max-lg:grid-cols-1 gap-5 ">
        {filtereddata?.map((e) => (
          <Cardforproduct
            category={e.category}
            title={e.title}
            key={e.id}
            description={e.description}
            id={e.id}
            image={e.image}
            images={e.images}
            price={e.price}
            rating={e.rating}
          />
        ))}
      </div>
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
