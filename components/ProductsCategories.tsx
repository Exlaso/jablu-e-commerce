import {Product} from "@/lib/Interfaces";
import React from "react";
import CardSection from "./CardSection";

type undef = Product[] | undefined;
const ProductsCategories = ({
                                data,
                            }: {
    data: Product[] | undefined;
}) => {


    const category: string[] = [];
    data?.map((product) => {
        if (!category.includes(product.category)) category.push(product.category);
    });

    const categorizeddata: undef[] = [];
    category?.map((category) => {
        return categorizeddata?.push(
            data?.filter((product) => product.category === category)
        );
    });

    return (
        <section className="flex flex-col gap-14">
            {categorizeddata.map((e, i) => (
                <CardSection
                    data={e}
                    key={i}
                >{`${category[i]}`}</CardSection>
            ))}
        </section>
    );
};

export default ProductsCategories;