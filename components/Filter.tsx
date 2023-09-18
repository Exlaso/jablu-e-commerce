import { dataforproduct } from "@/lib/Interfaces";
import React from "react";

const Filter = ({
  data,
  filteritem,
}: {
  data: dataforproduct[] | undefined;
  filteritem: (e:string)=> void
}) => {
  const category: string[] = [];
  data?.map((product) => {
    if (!category.includes(product.category)) category.push(product.category);
  });
  return (
    <div className="flex justify-evenly items-center">
      <h1 className="text-4xl font-bold px-4 whitespace-nowrap">T-shirts</h1>
      <span className="font-bold">
        Filter:{" "}
        <select
        onChange={(e) => {
            filteritem(e.currentTarget.value);
          }}
          name="data filter"
          id="data filter"
          className="bg-transparent capitalize border border-black py-2 px-3"
        >
          {category.map((category, i) => (
            <option
              value={category}
              key={i}
            >
              {category}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default Filter;
