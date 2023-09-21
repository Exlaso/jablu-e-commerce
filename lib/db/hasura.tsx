import { dataforproduct } from "../Interfaces";

const CryptoJS = require("crypto-js");

export const GetProducts = async (): Promise<dataforproduct[] | undefined> => {
  const response = await fetchGraphQLUsingAdmin("GetProducts");

  return response.data.products;
};

export const SignupUser = async (
  token: string,
  {
    user_first_name,
    user_last_name,
    user_email,
    user_password,
    isverified,
    unique_id,
  }: {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_password: string;
    isverified: boolean;
    unique_id: string;
  }
) => {
  const response = await fetchGraphQL("SignupUser", token, {
    user_email,
    unique_id,
    user_first_name,
    user_last_name,
    user_password,
    isverified,
  });

  return response;
};
export const IsPasswordMatched = async (
  token: string,
  { password }: { password: string }
) => {
  const response = await fetchGraphQL("IsPasswordMatched", token);
  const bytes = CryptoJS.AES.decrypt(
    response.data.users.at(0).user_password,
    process.env.JWT_KEY as string
  );
  let plaintext = bytes.toString(CryptoJS.enc.Utf8);

  return plaintext === password;
};

export const IsEmailExists = async (token: string) => {
  const response = await fetchGraphQL("IsEmailExists", token);

  return !(response.data.users.length === 0);
};

export const GetUserImage = async (token: string) => {
  const response = await fetchGraphQL("GetUserImage", token);

  return response.data.users.at(0).user_pfp;
};
export const isProductLiked = async (
  token: string,
  data: { product_id: string }
) => {
  const response = await fetchGraphQL("isProductLiked", token, data);

  return response.data.wishlist_items.length !== 0;
};
export const Retriveuserdata = async (
  token: string
): Promise<
  | {
      user_first_name: string;
      user_phone_number: string;
      user_email: string;
      unique_id: string;
    }
  | undefined
> => {
  const response = await fetchGraphQL("Retriveuserdata", token);

  return response.data.users.at(0);
};

export const InsertWishlist = async (
  token: string,
  data: {
    product_id: string;
    user_id: string;
  }
): Promise<boolean | undefined> => {
  const response = await fetchGraphQL("InsertWishlist", token, data);

  return response.data.insert_wishlist_items_one;
};

export const GetFavouritedItems = async (token: string) => {
  const response = await fetchGraphQL("GetFavouritedItems", token, {
    mynum: Date.now().toString(),
  });
  return response.data.wishlist_items;
};

export const GetCategories = async () => {
  const response = await fetchGraphQLUsingAdmin("GetCategories");
  return response.data.categories;
};

export const InsertintoCart = async (
  token: string,
  vars: {
    color: string;
    count: number;
    size: string;
    product_id: string;
    user_id: string;
  }
) => {
  const response = await fetchGraphQL("InsertintoCart", token, vars);
  return response.data.insert_cart_one;
};

export const DeletefromWishlist = async (
  token: string,
  data: {
    product_id: string;
  }
): Promise<boolean | undefined> => {
  const response = await fetchGraphQL("DeletefromWishlist", token, data);

  return response.data.delete_wishlist_items.affected_rows !== 0;
};

export const GetCartItems = async (
  token: string,
  vars: {
    color: string;
    size: string;
    product_id: string;
  }
) => {
  const response = await fetchGraphQL("GetCartItems", token, vars);
  return response.data.cart;
};
export const UpdateCart = async (
  token: string,
  vars: { color: string; count: number; size: string; product_id: string }
) => {
  const response = await fetchGraphQL("UpdateCart", token, vars);
  return response.data;
};

export const DeleteCartItem = async (
  token: string,
  vars: { color: string; size: string; product_id: string }
) => {
  const response = await fetchGraphQL("DeleteCartItem", token, vars);
  return response.data.delete_cart.affected_rows;
};

export const GetallCartItems = async (token: string) => {
  const response = await fetchGraphQL("GetallCartItems", token, {
    mynum: (Math.random() * 10).toString(),
  });
  return response.data.cart;
};
const doperationsDoc = `

query IsEmailExists {
  users {
    user_email
  }
}

query GetFavouritedItems($mynum:String!) {
  wishlist_items(where: {_not: {product_id: {_eq: $mynum}}}) {
    product {
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
}




query GetUserImage {
  users {
    user_pfp
  }
}
query Retriveuserdata {
  users {
    user_first_name
    user_phone_number
    user_email
    unique_id
  }
}

  query GetallCartItems($mynum: String!) {
    cart(where: {_not: {product_id: {_eq: $mynum}}}) {
      color
    count
    size
    product {
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
      
  }


  mutation DeleteCartItem($color:String!,$size:String!,$product_id:String!) {
    delete_cart(where: {product_id: {_eq: $product_id}, size: {_eq: $size}, color: {_eq: $color}}) {
      affected_rows
    }
  }
  

query GetCartItems($color:String!,$size:String!,$product_id:String!) {
  cart(where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}) {
    count
    product_id
    size
    color
  }
}

mutation UpdateCart($color:String!,$count:Int!,$size:String!,$product_id:String!) {
  update_cart(where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}, _set: {count: $count}) {
    affected_rows
  }
}



mutation InsertintoCart($color:String!,$count:Int!,$size:String!,$user_id:String!,$product_id:String!) {
  insert_cart_one(object: {color: $color, count: $count, product_id: $product_id, size: $size, user_id: $user_id}) {
    color
    count
    product_id
    size
    user_id
  }
}


query IsPasswordMatched {
  users {
    user_password
  }
}

query GetCategories {
  categories {
    description
    image
    name
  }
}


query isProductLiked($product_id:String!) { 
  wishlist_items(where: {product_id: {_eq: $product_id}}) {
    product_id
    sortid
    user_id
  }
}
 
mutation InsertWishlist($product_id:String!,$user_id:String!) {
  insert_wishlist_items_one(object: {product_id: $product_id, user_id: $user_id}) {
    sortid
    user_id
    product_id
  }
}
mutation DeletefromWishlist($product_id:String!) {
  delete_wishlist_items(where: {product_id: {_eq: $product_id}}) {
    affected_rows
  } 
}

mutation SignupUser($unique_id: String!,$user_email:String!,$user_first_name:String!,$user_last_name:String!,$user_password:String!,$isverified: Boolean!) {
    insert_users_one(object: {user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password,isverified: $isverified,unique_id: $unique_id}) {
      unique_id
      user_email
      user_first_name
      user_last_name
      isverified
    }
  }
  query GetProducts {
    products {
      title
      rating
      price
      images
      id
      description
      category
      available_size
      available_color
    }
  }




  `;

export default async function fetchGraphQL(
  operationName: string,
  token: string,
  variables: object = {},
  operationsDoc: string = doperationsDoc
) {
  const result = await fetch(process.env.Hasura_URL as string, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

async function fetchGraphQLUsingAdmin(
  operationName: string,
  variables: object = {},
  operationsDoc: string = doperationsDoc
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
