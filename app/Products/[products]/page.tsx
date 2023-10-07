import CardSection from "@/components/CardSection";
import ImageGallery from "@/components/Products/ImageGallery";
import SelectionSection from "@/components/Products/SelectionSection";
import BackButton from "@/components/Utils/Backbtn";
import { dataforproduct } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { products: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const data = await getAllProducts();
  const newdata = data?.filter(
    (e) => e.id.toString() === params.products.toString()
  );

  const { title, description }: dataforproduct = newdata?.at(
    0
  ) as dataforproduct;

  return {
    title: title.toUpperCase(),
    keywords: [
      title,
      description,
      "Jabluu.in",
      "Jabluu",
      "Jablu",
      "Jablu.in",
      "Vedant Bhavsar",
      "Exlaso",
      "Jablu tshirt",
    ],
    description: "Jabluu.in",
  };
}

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
        <span className="flex items-center justify-start">
          <BackButton></BackButton>
          {/* <PathRoute /> */}
        </span>
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
              <summary className="bg-[var(--tertiary-color)] p-2 rounded-lg cursor-pointer">
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
