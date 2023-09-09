import SelectionSection from "@/components/Products/SelectionSection";
import Navbar from "@/components/navbar";
import { dataforproduct } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import Image from "next/image";
import React from "react";
const Page = async (props: any) => {
  const data = await getAllProducts();
  const newdata = data?.filter(
    (e) => e.id.toString() === props.params.products.toString()
  );

  const { image, id }: dataforproduct = newdata?.at(0) as dataforproduct;
  return (
    <>
      <Navbar />
      <div className="py-[13vh] px-[10%] flex flex-col gap-4">
        <span>Product ID: {id}</span>
        <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-10">
          <div>
            <Image
              src={image}
              alt={"alt"}
              width={500}
              height={500}
              className="rounded-3xl"
            ></Image>
          </div>
          <div className="flex flex-col gap-10 ">

            <SelectionSection data={newdata as dataforproduct[]}/>
          </div>
          <div className="col-span-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            molestias, quos nesciunt architecto odio nemo commodi totam
            obcaecati ullam eum, quo magni eveniet dolor placeat facilis. Non
            incidunt minima dignissimos sapiente quis. Nisi impedit distinctio
            ab officiis deserunt nihil eius, odit, totam voluptate sunt quidem.
            Quia quo eos reprehenderit dignissimos?
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
