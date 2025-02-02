import { Categories, Product } from "../Interfaces";
let CryptoJS = require("crypto-js");

export const GetProducts = async (): Promise<Product[] | undefined> => {
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
  },
) => {
  return await fetchGraphQL("SignupUser", token, {
    user_email,
    unique_id,
    user_first_name,
    user_last_name,
    user_password,
    isverified,
  });
};
export const IsPasswordMatched = async (
  token: string,
  { password }: { password: string },
) => {
  const response = await fetchGraphQL("IsPasswordMatched", token);

  const bytes = CryptoJS.AES.decrypt(
    response.data.users.at(0).user_password,
    process.env.JWT_KEY as string,
  );
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext === password;
};

export const IsEmailExists = async (token: string) => {
  const response = await fetchGraphQL("IsEmailExists", token);

  return !(response.data.users.length === 0);
};

export const GetUserImage = async (token: string) => {
  const response = await fetchGraphQL("GetUserImage", token, {
    mynum: Date.now().toString(),
  });

  return response.data.users.at(0).user_pfp;
};
export const isProductLiked = async (
  token: string,
  data: { product_id: string },
) => {
  const response = await fetchGraphQL("isProductLiked", token, data);

  return response?.data.wishlist_items?.length !== 0;
};
export const Retriveuserdata = async (
  token: string,
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
  },
): Promise<boolean | undefined> => {
  const response = await fetchGraphQL("InsertWishlist", token, data);

  return response.data.insert_wishlist_items_one;
};

export const GetFavouritedItems = async (token: string) => {
  const response = await fetchGraphQL("GetFavouritedItems", token, {
    mynum: Date.now().toString(),
  });
  if (response?.data?.wishlist_items) {
    return response?.data?.wishlist_items;
  } else {
    return [];
  }
};

export const GetCategories = async (): Promise<Categories[]> => {
  const response = await fetchGraphQLUsingAdmin("GetLandingCategories");
  return response.data.categories as {
    name: string;
    image: string;
    description: string;
  }[];
};

export const InsertintoCart = async (
  token: string,
  vars: {
    color: string;
    count: number;
    size: string;
    product_id: string;
    user_id: string;
  },
) => {
  const response = await fetchGraphQL("InsertintoCart", token, vars);

  return response?.data?.insert_cart_one;
};

export const DeletefromWishlist = async (
  token: string,
  data: {
    product_id: string;
  },
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
  },
) => {
  const response = await fetchGraphQL("GetCartItems", token, vars);
  return response?.data?.cart;
};
export const UpdateCart = async (
  token: string,
  vars: { color: string; count: number; size: string; product_id: string },
) => {
  const response = await fetchGraphQL("UpdateCart", token, vars);
  return response.data;
};

export const DeleteCartItem = async (
  token: string,
  vars: { color: string; size: string; product_id: string },
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
export const GetnoofitemsinCart = async (token: string) => {
  const response = await fetchGraphQL("GetnoofitemsinCart", token);
  return response.data.cart.length;
};

export const GetUserDetails = async (token: string) => {
  const response = await fetchGraphQL("GetUserDetails", token);
  return response.data.users;
};
export const UploadImage = async (
  token: string,
  {
    user_pfp,
    unique_id,
  }: {
    user_pfp: string;
    unique_id: string;
  },
) => {
  const response = await fetchGraphQL("UploadImage", token, {
    user_pfp,
    unique_id,
  });

  return response?.data?.update_users?.affected_rows === 1;
};
export const Updateinfo = async (
  token: string,
  data: {
    user_phone_number: string;
    user_last_name: string;
    user_first_name: string;
    unique_id: string;
  },
) => {
  const response = await fetchGraphQL("Updateinfo", token, data);

  return response?.data?.update_users?.affected_rows === 1;
};

export const InsertVerifyUrl = async (
  token: string,
  data: {
    UUID: string;
    verifyurl: string;
  },
) => {
  try {
    const response = await fetchGraphQL("InsertVerifyUrl", token, data);

    return response?.data?.insert_verificationurls?.affected_rows === 1;
  } catch (error) {
    return "Error in InsertVerifyUrl " + error;
  }
};

export const IsvalidUrl = async (verifyurl: string) => {
  try {
    const res = await fetchGraphQLUsingAdmin("InsertVerificationurls", {
      verifyurl,
    });

    return res?.data?.update_users?.affected_rows === 1;
  } catch (error) {
    return "Something went Wrong";
  }
};
export const UpdateMainverification = async (unique_id: string) => {
  try {
    const res = await fetchGraphQLUsingAdmin("UpdateMainverification", {
      unique_id,
    });

    return res?.data?.update_users?.affected_rows === 1;
  } catch (error) {
    return "Something went Wrong";
  }
};

const doperationsDoc = `



mutation InsertVerificationurls($verifyurl:String!){
  update_users(where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}, _set: {isverified: true}) {
    affected_rows
  }
}



mutation UpdateMainverification($verifyurl: String!) {
  update_users(where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}, _set: {isverified: true}) {
    affected_rows
  }
}




query GetUserDetails {
  users {
    user_email
    unique_id
    user_first_name
    user_last_name
    user_pfp
    user_phone_number
  }
}

    query IsEmailExists {
  users {
    user_email
    isverified
  }
}

mutation InsertVerifyUrl($UUID: String!, $verifyurl: String!) {
  insert_verificationurls(objects: {UUID: $UUID, verifyurl: $verifyurl}) {
    affected_rows 
  }
}
    
    

mutation Updateinfo($user_phone_number: String!, $user_last_name: String!,$user_first_name:String!,$unique_id: String!) {
  update_users(_set: {user_phone_number: $user_phone_number, user_last_name:$user_last_name, user_first_name: $user_first_name}, where: {unique_id: {_eq: $unique_id}}) {
    affected_rows
  }
}


query GetFavouritedItems($mynum: String!) {
  wishlist_items(where: {_not: {product_id: {_eq: $mynum}}}) {
    product {
      available_color
      available_size
      category
      mrp
      description
      id
      images
      price
      rating
      title
    }
  }
}


mutation UploadImage($user_pfp: String!,$unique_id:String!) {
  update_users(_set: {user_pfp: $user_pfp}, where: {unique_id: {_eq:$unique_id}}) {
    affected_rows
  }
}

query GetnoofitemsinCart {
  cart {
    product_id
  }
}



query GetUserImage($mynum: String!) @cached(ttl: 1)  {
  users(where: {_not: {user_pfp : {_eq: $mynum}}}) {
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

query GetLandingCategories @cached(refresh: true) {
categories(order_by: {name: asc}) {
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
  query GetProducts @cached(ttl: 1){
    products {
      available_color
      available_size
      category
      description
      id
      images
      mrp
      price
      rating
      title
      wishlist_items {
        product_id
      }
    }
  }




  `;

export default async function fetchGraphQL(
  operationName: string,
  token: string,
  variables: object = {},
  operationsDoc: string = doperationsDoc,
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

export async function fetchGraphQLUsingDocs(
  operationsDoc: string,
  operationName: string,
  token: string,
  variables: object,
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

export async function fetchGraphQLUsingAdmin(
  operationName: string,
  variables: object = {},
  operationsDoc: string = doperationsDoc,
) {
  const result = await fetch(process.env.Hasura_URL as string, {
    method: "POST",
    next: {
      revalidate: 1,
    },
    headers: {
      "x-hasura-admin-secret": process.env.Hasura_Secret as string,
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}
