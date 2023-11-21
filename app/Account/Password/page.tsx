import { PasswordSection } from "@/components/Account/Password/PasswordSection";
import Link from "next/link";
import React from "react";
import {Metadata} from "next";

export const metadata:Metadata =  {
    title: "Account Password - Jablu.in",
    description:
        "Manage your account password at Jablu.in, your trusted E-commerce website. Update your password, preferences, and more. Explore unique clothing with premium designs.",
    keywords: "Jablu.in, E-commerce, Account Password, Account Details, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",
    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Account Password - Jablu.in",
        url: "https://jablu.exlaso.in/Account/Password",
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description:
        "Manage your account password at Jablu.in, your trusted E-commerce website. Update your password, preferences, and more. Explore unique clothing with premium designs.",
    }
}
const Page = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="header flex gap-1 flex-col">
        <h1 className="text-4xl text-highlight font-bold text-center">
          Account Password
        </h1>
        <p className="text-lg text-center">Change or reset your password</p>
      </div>
      <PasswordSection />
      <p className="flex justify-center items-center gap-1">
        Forgot Your Password?
        <Link
          href={"/Auth/ResetPassword"}
          className="underline cursor-pointer"
        >
          Reset Here
        </Link>
      </p>
    </section>
  );
};

export default Page;
