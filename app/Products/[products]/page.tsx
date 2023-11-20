import CardSection from "@/components/CardSection";
import ImageGallery from "@/components/Products/ImageGallery";
import SelectionSection from "@/components/Products/SelectionSection";
import BackButton from "@/components/Utils/Backbtn";
import {Product} from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React from "react";

type Props = {
    params: { products: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    {params}: Props,
): Promise<Metadata> {
    // read route params
    const data = await getAllProducts();
    const newdata = data?.filter(
        (e) =>
            e.title.replaceAll(" ", "-").toString().toLowerCase() ===
            params.products.toString().toLowerCase()
    );
    if (newdata?.length === 0) {
        notFound();
    }
    const {title, description}: Product = newdata?.at(
        0
    ) as Product;

    return {
        title: title.toLowerCase() + " - Jablu.in",
        keywords: [
            title.toLowerCase() + " - Jablu.in",
            description,
            "Jablu.in",
            "Jabluu",
            "Jablu",
            "Jablu.in",
            "Vedant Bhavsar",
            "Exlaso",
            "Jablu tshirt",
        ],
        description: description,

        metadataBase: new URL("https://jabluu.vercel.app"),
        openGraph: {
            title: title.toLowerCase() + " - Jablu.in",
            url: `https://jabluu.vercel.app/${title
                .replaceAll(" ", "-")
                .toString()
                .toLowerCase()}`,
            siteName: "Jablu.in",
            type: "website",
            images: "https://jabluu.vercel.app/icon.svg",
            description: description,
        },
    };
}

const Page = async (props: { params: { products: string } }) => {
    const data = await getAllProducts();
    const newdata = data?.filter(
        (e) =>
            e.title.replaceAll(" ", "-").toString().toLowerCase() ===
            props.params.products.toString().toLowerCase()
    );
    if (newdata?.length === 0) {
        notFound();
    }

    const {product_image_urls, images, id, title, description, category}: Product =
        newdata?.at(0) as Product;

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
                        images={[{image_url:images},...product_image_urls]}
                        title={title}
                    />
                    <div className="flex flex-col gap-10 ">
                        <SelectionSection data={newdata as Product[]}/>
                    </div>
                    <div className="col-span-full">
                        <details>
                            <p className="ml-5 my-5 ">{description}</p>
                            <summary className="bg-[var(--tertiary-color)] p-2 rounded-lg cursor-pointer">
                                <span className=" w-full">Description</span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>
            <div className="py-10 max-sm:px-4 px-[10%]">
                <CardSection
                    data={data?.filter((e) => e.category === category && e.id !== id)}
                >
                    Related Products
                </CardSection>
            </div>
        </>
    );
};

export default Page;
