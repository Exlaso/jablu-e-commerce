"use server";
import { Product } from "@/lib/Interfaces";
import { GetProductsDocument, GetProductsQuery } from "@/lib/gql/graphql";
import { gqlClient } from "@/lib/service/client";

export default async function getAllProducts(): Promise<Product[] | undefined> {
  try {
    const data = await gqlClient.request(
      GetProductsDocument,
      {},
      {
        "x-hasura-admin-secret": process.env.Hasura_Secret!,
      },
    );
    return data.products;
  } catch (error) {
    console.error("Product Fetch Error: ", error);
  }
}
