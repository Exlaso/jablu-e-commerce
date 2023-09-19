import { InsertProduct } from "@/lib/db/ProductInsert";
import React from "react";
import products from "@/Data/product.json";
import { dataforproduct } from "@/lib/Interfaces";

const page = async () => {
  return (
    <div className="p-[13vh]">
      <ul>
        {products.map(async (e) => {
          const res = await InsertProduct(e as dataforproduct);
          console.log(await res);
          return (
            <li key={e.id}>{await res?.data?.insert_products_one?.title}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
