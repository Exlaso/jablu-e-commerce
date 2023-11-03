/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation InsertVerificationurls($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UpdateMainverification($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetUserDetails {\n  users {\n    user_email\n    unique_id\n    user_first_name\n    user_last_name\n    user_pfp\n    user_phone_number\n  }\n}\n\nmutation InsertVerifyUrl($UUID: String!, $verifyurl: String!) {\n  insert_verificationurls(objects: {UUID: $UUID, verifyurl: $verifyurl}) {\n    affected_rows\n  }\n}\n\nmutation Updateinfo($user_phone_number: String!, $user_last_name: String!, $user_first_name: String!, $unique_id: String!) {\n  update_users(\n    _set: {user_phone_number: $user_phone_number, user_last_name: $user_last_name, user_first_name: $user_first_name}\n    where: {unique_id: {_eq: $unique_id}}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UploadImage($user_pfp: String!, $unique_id: String!) {\n  update_users(_set: {user_pfp: $user_pfp}, where: {unique_id: {_eq: $unique_id}}) {\n    affected_rows\n  }\n}\n\nquery GetnoofitemsinCart {\n  cart {\n    product_id\n  }\n}\n\nquery GetUserImage($mynum: String!) @cached(ttl: 1) {\n  users(where: {_not: {user_pfp: {_eq: $mynum}}}) {\n    user_pfp\n  }\n}\n\nquery Retriveuserdata {\n  users {\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nmutation DeleteCartItem($color: String!, $size: String!, $product_id: String!) {\n  delete_cart(\n    where: {product_id: {_eq: $product_id}, size: {_eq: $size}, color: {_eq: $color}}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetCartItems($color: String!, $size: String!, $product_id: String!) {\n  cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n  ) {\n    count\n    product_id\n    size\n    color\n  }\n}\n\nmutation UpdateCart($color: String!, $count: Int!, $size: String!, $product_id: String!) {\n  update_cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n    _set: {count: $count}\n  ) {\n    affected_rows\n  }\n}\n\nmutation InsertintoCart($color: String!, $count: Int!, $size: String!, $user_id: String!, $product_id: String!) {\n  insert_cart_one(\n    object: {color: $color, count: $count, product_id: $product_id, size: $size, user_id: $user_id}\n  ) {\n    color\n    count\n    product_id\n    size\n    user_id\n  }\n}\n\nquery GetCategories @cached(ttl: 2) {\n  categories {\n    description\n    image\n    name\n  }\n}\n\nquery isProductLiked($product_id: String!) {\n  wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    product_id\n    sortid\n    user_id\n  }\n}\n\nmutation InsertWishlist($product_id: String!, $user_id: String!) {\n  insert_wishlist_items_one(object: {product_id: $product_id, user_id: $user_id}) {\n    sortid\n    user_id\n    product_id\n  }\n}\n\nmutation DeletefromWishlist($product_id: String!) {\n  delete_wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    affected_rows\n  }\n}\n\nmutation SignupUser($unique_id: String!, $user_email: String!, $user_first_name: String!, $user_last_name: String!, $user_password: String!, $isverified: Boolean!) {\n  insert_users_one(\n    object: {user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password, isverified: $isverified, unique_id: $unique_id}\n  ) {\n    unique_id\n    user_email\n    user_first_name\n    user_last_name\n    isverified\n  }\n}\n\nquery GetProducts @cached(ttl: 599) {\n  products {\n    id\n    title\n    price\n    description\n    category\n    mrp\n    images\n    product_colors {\n      hexcode\n      color\n    }\n    product_image_urls {\n      image_url\n    }\n    product_sizes {\n      size\n    }\n    product_rating {\n      no_of_rated\n      avg_ratings\n    }\n  }\n}\n\nquery Ispasswordvalid($user_password: String!) {\n  users(where: {user_password: {_eq: $user_password}}) {\n    unique_id\n  }\n}\n\nquery GetMyCartitems @cached(refresh: true) {\n  cart {\n    color\n    count\n    size\n    product_id\n    product {\n      images\n      price\n      title\n    }\n  }\n}\n\nmutation UpdatePassword($user_password: String = \"\", $user_email: String = \"\") {\n  update_users(\n    where: {user_email: {_eq: $user_email}}\n    _set: {user_password: $user_password}\n  ) {\n    affected_rows\n    returning {\n      user_first_name\n    }\n  }\n}\n\nsubscription Getuserprofilephoto {\n  users {\n    user_pfp\n  }\n}\n\nmutation insertimage($image_url: String = \"\", $product_id: String = \"\") {\n  insert_product_image_urls_one(\n    object: {image_url: $image_url, product_id: $product_id}\n  ) {\n    product_id\n    image_url\n  }\n}\n\nquery GetMyCart @cached(refresh: true) {\n  cart {\n    color\n    count\n    product_id\n    size\n    product {\n      images\n      title\n      price\n    }\n  }\n}\n\nquery GetMyFavourite @cached(refresh: true) {\n  wishlist_items {\n    product_id\n    product {\n      description\n      images\n      title\n    }\n  }\n}\n\nquery IsEmailExists {\n  users {\n    user_email\n    isverified\n  }\n}\n\nquery UserDetailswithpassword {\n  users {\n    user_password\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nquery GetVerificationUrl {\n  verificationurls {\n    verifyurl\n    user_verify {\n      user_first_name\n    }\n  }\n}": types.InsertVerificationurlsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation InsertVerificationurls($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UpdateMainverification($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetUserDetails {\n  users {\n    user_email\n    unique_id\n    user_first_name\n    user_last_name\n    user_pfp\n    user_phone_number\n  }\n}\n\nmutation InsertVerifyUrl($UUID: String!, $verifyurl: String!) {\n  insert_verificationurls(objects: {UUID: $UUID, verifyurl: $verifyurl}) {\n    affected_rows\n  }\n}\n\nmutation Updateinfo($user_phone_number: String!, $user_last_name: String!, $user_first_name: String!, $unique_id: String!) {\n  update_users(\n    _set: {user_phone_number: $user_phone_number, user_last_name: $user_last_name, user_first_name: $user_first_name}\n    where: {unique_id: {_eq: $unique_id}}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UploadImage($user_pfp: String!, $unique_id: String!) {\n  update_users(_set: {user_pfp: $user_pfp}, where: {unique_id: {_eq: $unique_id}}) {\n    affected_rows\n  }\n}\n\nquery GetnoofitemsinCart {\n  cart {\n    product_id\n  }\n}\n\nquery GetUserImage($mynum: String!) @cached(ttl: 1) {\n  users(where: {_not: {user_pfp: {_eq: $mynum}}}) {\n    user_pfp\n  }\n}\n\nquery Retriveuserdata {\n  users {\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nmutation DeleteCartItem($color: String!, $size: String!, $product_id: String!) {\n  delete_cart(\n    where: {product_id: {_eq: $product_id}, size: {_eq: $size}, color: {_eq: $color}}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetCartItems($color: String!, $size: String!, $product_id: String!) {\n  cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n  ) {\n    count\n    product_id\n    size\n    color\n  }\n}\n\nmutation UpdateCart($color: String!, $count: Int!, $size: String!, $product_id: String!) {\n  update_cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n    _set: {count: $count}\n  ) {\n    affected_rows\n  }\n}\n\nmutation InsertintoCart($color: String!, $count: Int!, $size: String!, $user_id: String!, $product_id: String!) {\n  insert_cart_one(\n    object: {color: $color, count: $count, product_id: $product_id, size: $size, user_id: $user_id}\n  ) {\n    color\n    count\n    product_id\n    size\n    user_id\n  }\n}\n\nquery GetCategories @cached(ttl: 2) {\n  categories {\n    description\n    image\n    name\n  }\n}\n\nquery isProductLiked($product_id: String!) {\n  wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    product_id\n    sortid\n    user_id\n  }\n}\n\nmutation InsertWishlist($product_id: String!, $user_id: String!) {\n  insert_wishlist_items_one(object: {product_id: $product_id, user_id: $user_id}) {\n    sortid\n    user_id\n    product_id\n  }\n}\n\nmutation DeletefromWishlist($product_id: String!) {\n  delete_wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    affected_rows\n  }\n}\n\nmutation SignupUser($unique_id: String!, $user_email: String!, $user_first_name: String!, $user_last_name: String!, $user_password: String!, $isverified: Boolean!) {\n  insert_users_one(\n    object: {user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password, isverified: $isverified, unique_id: $unique_id}\n  ) {\n    unique_id\n    user_email\n    user_first_name\n    user_last_name\n    isverified\n  }\n}\n\nquery GetProducts @cached(ttl: 599) {\n  products {\n    id\n    title\n    price\n    description\n    category\n    mrp\n    images\n    product_colors {\n      hexcode\n      color\n    }\n    product_image_urls {\n      image_url\n    }\n    product_sizes {\n      size\n    }\n    product_rating {\n      no_of_rated\n      avg_ratings\n    }\n  }\n}\n\nquery Ispasswordvalid($user_password: String!) {\n  users(where: {user_password: {_eq: $user_password}}) {\n    unique_id\n  }\n}\n\nquery GetMyCartitems @cached(refresh: true) {\n  cart {\n    color\n    count\n    size\n    product_id\n    product {\n      images\n      price\n      title\n    }\n  }\n}\n\nmutation UpdatePassword($user_password: String = \"\", $user_email: String = \"\") {\n  update_users(\n    where: {user_email: {_eq: $user_email}}\n    _set: {user_password: $user_password}\n  ) {\n    affected_rows\n    returning {\n      user_first_name\n    }\n  }\n}\n\nsubscription Getuserprofilephoto {\n  users {\n    user_pfp\n  }\n}\n\nmutation insertimage($image_url: String = \"\", $product_id: String = \"\") {\n  insert_product_image_urls_one(\n    object: {image_url: $image_url, product_id: $product_id}\n  ) {\n    product_id\n    image_url\n  }\n}\n\nquery GetMyCart @cached(refresh: true) {\n  cart {\n    color\n    count\n    product_id\n    size\n    product {\n      images\n      title\n      price\n    }\n  }\n}\n\nquery GetMyFavourite @cached(refresh: true) {\n  wishlist_items {\n    product_id\n    product {\n      description\n      images\n      title\n    }\n  }\n}\n\nquery IsEmailExists {\n  users {\n    user_email\n    isverified\n  }\n}\n\nquery UserDetailswithpassword {\n  users {\n    user_password\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nquery GetVerificationUrl {\n  verificationurls {\n    verifyurl\n    user_verify {\n      user_first_name\n    }\n  }\n}"): (typeof documents)["mutation InsertVerificationurls($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UpdateMainverification($verifyurl: String!) {\n  update_users(\n    where: {verificationurls: {verifyurl: {_eq: $verifyurl}}}\n    _set: {isverified: true}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetUserDetails {\n  users {\n    user_email\n    unique_id\n    user_first_name\n    user_last_name\n    user_pfp\n    user_phone_number\n  }\n}\n\nmutation InsertVerifyUrl($UUID: String!, $verifyurl: String!) {\n  insert_verificationurls(objects: {UUID: $UUID, verifyurl: $verifyurl}) {\n    affected_rows\n  }\n}\n\nmutation Updateinfo($user_phone_number: String!, $user_last_name: String!, $user_first_name: String!, $unique_id: String!) {\n  update_users(\n    _set: {user_phone_number: $user_phone_number, user_last_name: $user_last_name, user_first_name: $user_first_name}\n    where: {unique_id: {_eq: $unique_id}}\n  ) {\n    affected_rows\n  }\n}\n\nmutation UploadImage($user_pfp: String!, $unique_id: String!) {\n  update_users(_set: {user_pfp: $user_pfp}, where: {unique_id: {_eq: $unique_id}}) {\n    affected_rows\n  }\n}\n\nquery GetnoofitemsinCart {\n  cart {\n    product_id\n  }\n}\n\nquery GetUserImage($mynum: String!) @cached(ttl: 1) {\n  users(where: {_not: {user_pfp: {_eq: $mynum}}}) {\n    user_pfp\n  }\n}\n\nquery Retriveuserdata {\n  users {\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nmutation DeleteCartItem($color: String!, $size: String!, $product_id: String!) {\n  delete_cart(\n    where: {product_id: {_eq: $product_id}, size: {_eq: $size}, color: {_eq: $color}}\n  ) {\n    affected_rows\n  }\n}\n\nquery GetCartItems($color: String!, $size: String!, $product_id: String!) {\n  cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n  ) {\n    count\n    product_id\n    size\n    color\n  }\n}\n\nmutation UpdateCart($color: String!, $count: Int!, $size: String!, $product_id: String!) {\n  update_cart(\n    where: {product_id: {_eq: $product_id}, color: {_eq: $color}, size: {_eq: $size}}\n    _set: {count: $count}\n  ) {\n    affected_rows\n  }\n}\n\nmutation InsertintoCart($color: String!, $count: Int!, $size: String!, $user_id: String!, $product_id: String!) {\n  insert_cart_one(\n    object: {color: $color, count: $count, product_id: $product_id, size: $size, user_id: $user_id}\n  ) {\n    color\n    count\n    product_id\n    size\n    user_id\n  }\n}\n\nquery GetCategories @cached(ttl: 2) {\n  categories {\n    description\n    image\n    name\n  }\n}\n\nquery isProductLiked($product_id: String!) {\n  wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    product_id\n    sortid\n    user_id\n  }\n}\n\nmutation InsertWishlist($product_id: String!, $user_id: String!) {\n  insert_wishlist_items_one(object: {product_id: $product_id, user_id: $user_id}) {\n    sortid\n    user_id\n    product_id\n  }\n}\n\nmutation DeletefromWishlist($product_id: String!) {\n  delete_wishlist_items(where: {product_id: {_eq: $product_id}}) {\n    affected_rows\n  }\n}\n\nmutation SignupUser($unique_id: String!, $user_email: String!, $user_first_name: String!, $user_last_name: String!, $user_password: String!, $isverified: Boolean!) {\n  insert_users_one(\n    object: {user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password, isverified: $isverified, unique_id: $unique_id}\n  ) {\n    unique_id\n    user_email\n    user_first_name\n    user_last_name\n    isverified\n  }\n}\n\nquery GetProducts @cached(ttl: 599) {\n  products {\n    id\n    title\n    price\n    description\n    category\n    mrp\n    images\n    product_colors {\n      hexcode\n      color\n    }\n    product_image_urls {\n      image_url\n    }\n    product_sizes {\n      size\n    }\n    product_rating {\n      no_of_rated\n      avg_ratings\n    }\n  }\n}\n\nquery Ispasswordvalid($user_password: String!) {\n  users(where: {user_password: {_eq: $user_password}}) {\n    unique_id\n  }\n}\n\nquery GetMyCartitems @cached(refresh: true) {\n  cart {\n    color\n    count\n    size\n    product_id\n    product {\n      images\n      price\n      title\n    }\n  }\n}\n\nmutation UpdatePassword($user_password: String = \"\", $user_email: String = \"\") {\n  update_users(\n    where: {user_email: {_eq: $user_email}}\n    _set: {user_password: $user_password}\n  ) {\n    affected_rows\n    returning {\n      user_first_name\n    }\n  }\n}\n\nsubscription Getuserprofilephoto {\n  users {\n    user_pfp\n  }\n}\n\nmutation insertimage($image_url: String = \"\", $product_id: String = \"\") {\n  insert_product_image_urls_one(\n    object: {image_url: $image_url, product_id: $product_id}\n  ) {\n    product_id\n    image_url\n  }\n}\n\nquery GetMyCart @cached(refresh: true) {\n  cart {\n    color\n    count\n    product_id\n    size\n    product {\n      images\n      title\n      price\n    }\n  }\n}\n\nquery GetMyFavourite @cached(refresh: true) {\n  wishlist_items {\n    product_id\n    product {\n      description\n      images\n      title\n    }\n  }\n}\n\nquery IsEmailExists {\n  users {\n    user_email\n    isverified\n  }\n}\n\nquery UserDetailswithpassword {\n  users {\n    user_password\n    user_first_name\n    user_phone_number\n    user_email\n    unique_id\n  }\n}\n\nquery GetVerificationUrl {\n  verificationurls {\n    verifyurl\n    user_verify {\n      user_first_name\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;