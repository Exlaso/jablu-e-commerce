// components/Navbar.js

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="px-2 h-[8vh] w-full absolute flex justify-center items-center top-0 border-b border-b-slate-500">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/"><Image src={'/static/icons/navbar/menu.svg'} alt="menu" width={30} height={30}></Image></Link>
            </div>
            <div className=" font-bold text-xl">
            <span className="font-bold text-center  flex shadowhand justify-evenly flex-wrap">
              <h1 className="text-blue-600">Jabluuu</h1>
              <h1 className="text-red-600">.</h1>
              <h1 className="text-yellow-400">com</h1>
            </span>
            </div>
            <ul className="flex space-x-4 items-center justify-evenly">
              <li>
                <Image
                  src={"/static/icons/navbar/search.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
              </li>
              <li>
                <Image
                  src={"/static/icons/navbar/cart.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
              </li>
              <li>
                <Image
                  src={"/static/icons/navbar/buy.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[8vh]"></div>
    </>
  );
};

export default Navbar;
