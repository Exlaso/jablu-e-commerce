// app/sitemap.js

import getAllProducts from "@/utils/GetProduct";
import {GetCategories} from "@/lib/db/hasura";

import {globby} from "globby";

const homepage = "https://jablu.exlaso.in";

async function getAllRoutes() {
    const files = await globby([
        "app/**/*.tsx",
        "!app/_*.tsx", "!app/api",
    ], {cwd: process.cwd()});
    const unique: string[] = [];
    files.map((file) => {
            if (file.includes("page")) {

                const splited = file.split("/");
                const removed = splited.filter(e => !(e.includes(".tsx") || e.includes("[") || e.includes("app")));
                if (!unique.includes(removed.join("/"))) {
                    unique.push(removed.join("/"))

                }
            }
        }
    )
    return unique;

}

export default async function sitemap() {
    const pages = await getAllRoutes();
    const products = await getAllProducts();
    const categories = await GetCategories();

    const productmaps = products?.map((product) => ({
        url: `${homepage}/Products/${product.title.replaceAll(" ", "-").toString().toLowerCase()}`,
        lastModified: new Date().toISOString(),
    }));
    const categoriesmap = categories?.map((category) => ({
        url: `${homepage}/Categories/Search/${category?.name.replaceAll(" ", "-").toString().toLowerCase()}`,
        lastModified: new Date().toISOString(),
    }));


    const routes = pages.map((route) => ({
        url: `${homepage}/${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...productmaps!, ...categoriesmap!];
}