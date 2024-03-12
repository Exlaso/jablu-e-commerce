// components/Footer.js

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SubscribeByEmail } from "@/components/SubscribeByEmail";

const Footer = ({ category }: { category: string[] }) => {
  const token = process.env.Hasura_Secret!;

  return (
    <footer className="bg-gray-500/20 py-12  px-6">
      <div className="container mx-auto flex flex-col  items-center justify-between gap-10">
        <Link
          href="/"
          className="flex justify-center items-center flex-col  w-full"
        >
          <Image
            src={"/icon.svg"}
            priority
            alt={"jablulogo"}
            width={200}
            height={200}
          ></Image>
          <p className="mt-2">Jablu.in</p>
        </Link>

        <div className="grid grid-cols-3 w-full max-md:grid-cols-2 gap-5 mt-4 lg:mt-0">
          <div className="w-full md:flex flex-col items-center gap-5 justify-start">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2 flex flex-col gap-1 capitalize">
              {category.map((e, i) => (
                <Link
                  href={"/Categories/Search/" + e}
                  key={i}
                  className="cursor-pointer"
                >
                  {e}
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full md:flex flex-col items-center gap-5 justify-start">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>Contact Us</li>
              <li>Shipping Information</li>
              <li>Returns &amp; Exchanges</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="w-full md:flex flex-col items-center gap-5 justify-start">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <SubscribeByEmail token={token} />
        </div>
        <div className={"flex gap-1"}>
          Developed by -
          <Link
            href={"https://exlaso.in"}
            className={"flex gap-1 text-red-500"}
          >
            Vedant Bhavsar
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
