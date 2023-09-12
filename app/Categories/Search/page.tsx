import Cardforproduct from "@/components/Cardforproduct";
import SortBy from "@/components/Search/SortBy";
import getAllProducts from "@/utils/GetProduct";
import React from "react";

const Page = async ({ searchParams }: { searchParams: { q: string,rate:string } }) => {
  const Query: string | undefined = (searchParams.q)?decodeURIComponent(searchParams?.q):undefined;

  const data = await getAllProducts();
  let filtereddata = data?.filter((product) =>
    product.title.toLowerCase().includes((Query?(Query?.toLowerCase()):""))
  );
  switch (searchParams.rate) {
    case "relevant":
       filtereddata = data?.filter((product) =>
      product.title.toLowerCase().includes((Query?(Query?.toLowerCase()):""))
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
      <div>
        {Query !== undefined ? (
          <h1>
            Showing {filtereddata?.length} results for{" "}
            <span className="font-bold uppercase text-black">{Query}</span>
          </h1>
        ) : null}
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
      </div>
      <div className="w-full max-md:row-start-2 ">
        <div className="w-full md:sticky top-[12vh]  ">
          <p className="text-sm text-gray-500 my-3 ">Sort by</p>
          <SortBy Query={Query}/>
        </div>
      </div>
    </>
  );
};

export default Page;
