import React, {FunctionComponent, ReactNode} from "react";
import Navbar from "@/components/navbar";
import {Toaster} from "sonner";
import Footer from "@/components/Footer";
import {GetCategories} from "@/lib/db/hasura";

interface typesforlayout {
    children:ReactNode
}

const layout: FunctionComponent<typesforlayout> = async (props) => {
    const category = await GetCategories();
    return <>
        <Navbar category={category.map(e => (e.name))}/>
        <Toaster position="top-right" richColors/>
        {props.children}
        <Footer category={category.map(e => (e.name))}/>
    </>
}
export default layout