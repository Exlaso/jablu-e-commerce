import Categories from "@/components/Search/Categories";
import BackButton from "@/components/Utils/Backbtn";
import { Product } from "@/lib/Interfaces";
import getAllProducts from "@/utils/GetProduct";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const data: Product[] | undefined = await getAllProducts();

  const category: string[] = [];
  data?.map((product) => {
    if (!category.includes(product.category)) category.push(product.category);
  });

  return (
    <div>
      <main className="py-[12vh] max-lg:px-[3vh] px-[12vh] ">
        <BackButton />
        <div className="my-5 gap-5 grid grid-cols-[auto,3fr,auto] max-md:grid-cols-[1fr]">
            <div className="w-full ">
              <div className="w-full md:sticky top-[12vh] ">
                <p className="text-sm text-gray-500 my-3 ">Categories</p>
                <Categories category={category} />
              </div>
            </div>
            {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
