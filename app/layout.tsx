import ContextProvider from "@/Store/StoreContext";
import "./globals.css";
import "./output.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  session: any | null | undefined;
}) {
  return (
    <html lang="en">
      <ContextProvider>
          <body className={montserrat.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
      </ContextProvider>
    </html>
  );
}
