"use client";
import Navforlg from "@/components/Account/Navforlg";
import Navformd from "@/components/Account/Navformd";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

const navigation: { title: string; href: string }[] = [
  { title: "Personal Information", href: "Information" },
  { title: "Account Password", href: "Password" },
  { title: "Payment Methods", href: "Payment-Methods" },
  { title: "Preferences", href: "Preferences" },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <main className="grid grid-cols-[1fr,3fr] gap-4 px-[15vh] py-[15vh] max-lg:px-[1vh] max-lg:grid-cols-1 ">
        <Navforlg navigation={navigation} path={path} />
        <Navformd path={path} navigation={navigation}/>
      {children}
    </main>
  );
};

export default Layout;
