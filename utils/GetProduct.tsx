import { dataforproduct } from "@/lib/Interfaces";

export default async function getAllProducts(): Promise<
  dataforproduct[] | undefined
> {
  try {
    const Response: Response = await fetch("https://fakestoreapi.com/products");
    const data: dataforproduct[] = await Response.json();
    return data.map((e) => ({ ...e, images: [e.image,] }));
  } catch (error) {
    console.log("Product Fetch Error: ", error);
  }
}


// interface tempfordataforproduct extends dataforproduct {
//   thumbnail: string;
// }
// export default async function getAllProducts(): Promise<
//   dataforproduct[] | undefined
// > {
//   try {
//     const Response: Response = await fetch("https://dummyjson.com/products");
//     const data: { products: tempfordataforproduct[] } = await Response.json();
//     return data.products.map((e) => ({
//       ...e,
//       image: e.thumbnail,
//       rating: {
//         rate: e.rating as unknown as number,
//         count: parseInt((Math.random() * 1000).toFixed(0)),
//       },
//     }));
//   } catch (error) {
//     console.log("Product Fetch Error: ", error);
//   }
// }
