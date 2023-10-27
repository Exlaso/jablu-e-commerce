
import ContextProvider from "@/Store/StoreContext";
import "./output.css";
import "./globals.css";

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { Session } from "next-auth";
import { SessionProvider } from "@/components/Utils/SessionProvider";
import getAllProducts from "@/utils/GetProduct";
import { dataforproduct } from "@/lib/Interfaces";
import { Suspense } from "react";


export const metadata: Metadata = {
  icons: {
    icon: "icon.svg",
  },
  title: "Jabluu.in",
  keywords: [
    "Jablu.in",
    "Jablu",
    "Vedant Bhavsar",
    "Exlaso",
    "Jablu.in tshirt",
  ],
  description: "Jablu.in",
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
          <body>
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
