// components/Navbar.js

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-4 w-full absolute top-0 border-b">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" font-bold text-xl">
            <Link href="/">Jablu</Link>
          </div>
          <ul className="flex space-x-4 items-center justify-evenly">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li><Image src={'/static/icons/navbar/search.svg'} width={30} height={30} alt="search"></Image></li>
            <li><Image src={'/static/icons/navbar/cart.svg'} width={30} height={30} alt="search"></Image></li>
            <li><Image src={'/static/icons/navbar/buy.svg'} width={30} height={30} alt="search"></Image></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
