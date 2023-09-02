"use client";
import getAllProducts from "@/utils/GetProduct";
import React, { ReactNode, useState } from "react";
import Cardforproduct from "./Cardforproduct";
import Filter from "./Filter";
import { dataforproduct } from "@/lib/Interfaces";

const CardSection =  ({ data,children }: { data: dataforproduct[] | undefined,children:ReactNode }) => {
  const [filtereditems, setFiltereditems] = useState<dataforproduct[] | undefined>(data);
  
  return (
    <div>
      <h1 className="text-4xl font-bold px-4 whitespace-nowrap capitalize">{children}</h1>
      {/* <Filter data={data} filteritem={filteritem}/> */}
      <div className="p-4 flex gap-4 overflow-x-auto snap-mandatory snap-x">
        {filtereditems?.map((item) => (
          <Cardforproduct
            id={item.id}
            category={item.category}
            image={item.image}
            price={item.price}
            key={item.id}
            description={item.description}
            rating={item.rating}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
