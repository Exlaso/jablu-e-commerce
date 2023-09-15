// components/Footer.js

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <Link href="/" className="flex justify-center items-center flex-col  w-full">
          <Image
            src={"/static/logo/jablu4.svg"}
            alt={"jablulogo"}
            width={200}
            height={200}
          ></Image>
          <p className="mt-2">Jablesh</p>
        </Link>

        <div className="grid grid-cols-3 w-full max-md:grid-cols-2 gap-5 mt-4 lg:mt-0">
          <div className="w-full md:flex flex-col items-center gap-5 justify-start">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>Men&apos;s Fashion</li>
              <li>Women&apos;s Fashion</li>
              <li>Electronics</li>
              <li>Home &amp; Garden</li>
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

          <div className="w-full md:flex flex-col items-center gap-5 justify-start col-start-2 col-span-1 max-md:col-span-full ">
            <h3 className="text-lg font-semibold ">Newsletter</h3>
            <p className="mt-2">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:flex flex-col items-center gap-5 justify-start bg-gray-700 py-2 px-3 rounded-md text-gray-200"
              />
              <button
                type="submit"
                className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
