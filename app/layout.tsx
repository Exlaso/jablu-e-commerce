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
  metadataBase: new URL("https://jabluu.vercel.app"),

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
  authors: { name: "Vedant bhavsar", url: "https://exlaso.vercel.app" },
  description:
    "Welcome to Jablu.in, your premier destination for one-of-a-kind fashion. Discover a world of style at Jablu.in, where we curate a collection of unique clothing with premium designs. From trendy apparel to timeless classics, our E-commerce website offers a diverse range of fashion options to suit your individual taste. Explore the latest in fashion trends and elevate your wardrobe with exclusive pieces. Shop at Jablu.in and redefine your style with every click.",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    description:
      "Welcome to Jablu.in, your premier destination for one-of-a-kind fashion. Discover a world of style at Jablu.in, where we curate a collection of unique clothing with premium designs. From trendy apparel to timeless classics, our E-commerce website offers a diverse range of fashion options to suit your individual taste. Explore the latest in fashion trends and elevate your wardrobe with exclusive pieces. Shop at Jablu.in and redefine your style with every click.",
    title: "Jabluu.in",
    url: "https://jabluu.vercel.app",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jabluu.vercel.app/icon.svg",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
