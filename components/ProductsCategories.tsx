import { Product } from "@/lib/Interfaces";
import React from "react";
import CardSection from "./CardSection";
import getAllProducts from "@/utils/GetProduct";

const ProductsCategories = async () => {
  const data = await getAllProducts();
  const category: string[] = [];
  data?.map((product) => {
    if (!category.includes(product.category)) category.push(product.category);
  });

  const categorizeddata: (Product[] | undefined)[] = [];
  category?.map((category) => {
    return categorizeddata?.push(
      data?.filter((product) => product.category === category),
    );
  });

  return (
    <section className="flex flex-col gap-14 shrink-0">
      {categorizeddata.map((e, i) => (
        <CardSection
          href={"/Categories/Search/" + category?.at(i)?.replaceAll(" ", "-")}
          data={e}
          key={i}
        >{`${category.at(i)}`}</CardSection>
      ))}
    </section>
  );
};

export default ProductsCategories;
