import { signOut } from "next-auth/react";
import { cookies } from "next/headers";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/ShoppingBag", "/Favourites","/Account/:path*"] };
