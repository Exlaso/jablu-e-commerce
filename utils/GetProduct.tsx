import { dataforproduct } from "@/lib/Interfaces";

export default async function getAllProducts() {
    try {
        const Response:Response = await fetch('https://fakestoreapi.com/products');
        const data:dataforproduct[] = await Response.json();
        return data;
    } catch (error) {
        console.log("err", error);
    }

}