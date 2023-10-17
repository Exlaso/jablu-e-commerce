import ContextProvider from "@/Store/StoreContext";
import "./globals.css";
// import "./output.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { Session } from "next-auth";
import { SessionProvider } from "@/components/Utils/SessionProvider";
import getAllProducts from "@/utils/GetProduct";
import { dataforproduct } from "@/lib/Interfaces";
import { Suspense } from "react";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "icon.svg",
  },
  title: "Jabluu.in",
  keywords: [
    "Jabluu.in",
    "Jabluu",
    "Jablu",
    "Jablu.in",
    "Vedant Bhavsar",
    "Exlaso",
    "Jablu tshirt",
  ],
  description: "Jabluu.in",
};

export default async function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const category: string[] = [];
  const products: dataforproduct[] | undefined = await getAllProducts();
  products?.map((product) => {
    if (!category.includes(product.category)) category.push(product.category);
  });
  return (
    <html lang="en">
      <ContextProvider>
        <SessionProvider session={session}>
          <body className="darkxmode">
            <Suspense fallback={<></>}>
              <Navbar category={category} />
            </Suspense>
            {children}
            <Footer category={category} />
          </body>
        </SessionProvider>
      </ContextProvider>
    </html>
  );
}
