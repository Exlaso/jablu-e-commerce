import {cn} from "@/utils/cn";
import React from "react";

export function LitUpButton({children, className}: { children: React.ReactNode, className?: string }) {
    return <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
        <div

            className={cn("px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent", className)}>
            {children}
        </div>
    </button>
}
