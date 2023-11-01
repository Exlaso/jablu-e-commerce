import { Product } from "./../Interfaces";
/*
This is an example snippet - you should consider tailoring it
to your service.
*/

const operationsDoc = `
    mutation insertproduct(
        $id: String,
        $title: String,
        $price: numeric,
        $description: String!,
        $category: String!,
        $images: [String!],
        $rating: jsonb!,
        $available_color: [String!],
        $available_size: [String!] ) {
      insert_products_one(object: {
        
        available_color: $available_color,
         available_size: $available_size,
          category: $category,
          description:$description,
          id:$id,
          images:$images,
          price:$price,
          rating: $rating,
          title:$title
        })
          
          
          {
        available_color
        available_size
        category
        description
        id
        images
        price
        rating
        title
      }
    }
  `;

async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Product
) {
  const result = await fetch(process.env.Hasura_URL as string, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": process.env.Hasura_Secret as string,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

export function InsertProduct(data: Product) {
  return fetchGraphQL(operationsDoc, "insertproduct", data);
}
