export { default } from "next-auth/middleware";

export const config = { matcher: ["/ShoppingBag", "/Favourites","/Account/:path*"] };
