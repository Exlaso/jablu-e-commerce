import {Product} from "@/lib/Interfaces";
import {
    GetProductsDocument, GetProductsQuery,
} from "@/lib/gql/graphql";
import {gqlClient} from "@/lib/service/client";

export default async function getAllProducts(): Promise<
    Product[] | undefined
> {
    try {
        const data:GetProductsQuery = await gqlClient.request(GetProductsDocument,{},{
            "x-hasura-admin-secret":process.env.Hasura_Secret!
        });


        return data.products
        // return await testdata;
    } catch (error) {
        console.error("Product Fetch Error: ", error);
    }
}

// interface tempforProduct extends Product {
//   thumbnail: string;
// }
// export default async function getAllProducts(): Promise<
//   Product[] | undefined
// > {
//   try {
//     const Response: Response = await fetch("https://dummyjson.com/products");
//     const data: { products: tempforProduct[] } = await Response.json();
//     return data.products.map((e) => ({
//       ...e,
//       image: e.thumbnail,
//       rating: {
//         rate: e.rating as unknown as number,
//         count: parseInt((Math.random() * 1000).toFixed(0)),
//       },
//     }));
//   } catch (error) {
//     console.error("Product Fetch Error: ", error);
//   }
// }
