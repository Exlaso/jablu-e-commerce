import CardSection from "@/components/CardSection";
import ImageGallery from "@/components/Products/ImageGallery";
import SelectionSection from "@/components/Products/SelectionSection";
import BackButton from "@/components/Utils/Backbtn";
import { dataforproduct } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import React from "react";
const Page = async (props: any) => {
  const data = await getAllProducts();
  const newdata = data?.filter(
    (e) => e.id.toString() === props.params.products.toString()
  );

  const { images, id, title, description, category }: dataforproduct =
    newdata?.at(0) as dataforproduct;

  return (
    <>
      <div className="py-[13vh] px-[10%] flex flex-col gap-4">
        <BackButton></BackButton>
        <span>Product ID: {id}</span>
        <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-10">
          <ImageGallery
            images={images}
            title={title}
          />
          <div className="flex flex-col gap-10 ">
            <SelectionSection data={newdata as dataforproduct[]} />
          </div>
          <div className="col-span-full">
            <details>
              <p className="ml-5 my-5 text-[#717171]">{description}</p>
              <summary className="bg-slate-100/80 p-2 rounded-lg cursor-pointer">
                <span className=" w-full">Description</span>
              </summary>
            </details>
          </div>
        </div>
        <div className="py-10">
          <CardSection
            data={data?.filter((e) => e.category === category && e.id !== id)}
          >
            Related Products
          </CardSection>
        </div>
      </div>
    </>
  );
};

export default Page;
