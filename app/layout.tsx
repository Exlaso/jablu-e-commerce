import  ContextProvider  from "@/Store/StoreContext";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jabluuu.com",
  description: "Jabluuu.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={manrope.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
