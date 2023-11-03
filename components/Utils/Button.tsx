'use client'
import {motion} from "framer-motion";
import React, {ReactNode} from "react";
import {Neonwrapper} from "@/components/Utils/Neonwrapper";

const Button = ({
                    children,
                    onClick,
                    color,
                    className
                }: {
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    color: "primary" | "secondary" | "danger" | "any" | "custom";
    className?: string;
}) => {
    // Define color classes based on the 'color' prop
    let colorClasses = "";
    if (color === "primary") {
        colorClasses = "bg-blue-500 hover:bg-blue-600 text-white";
    } else if (color === "secondary") {
        colorClasses = "bg-gray-400 hover:bg-gray-500 text-gray-800";
    } else if (color === "danger") {
        colorClasses = "bg-red-500 hover:bg-red-600 text-white";
    } else if (color === "any") {
        colorClasses = "bg-gray-700 hover:bg-gray-800 text-white";
    } else {
        colorClasses = className as string;

    }

    return (

            <motion.button
                onClick={onClick}
                className={`px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-opacity-50    ${colorClasses}  `}
            >
                {children}
            </motion.button>
    );
};

export default Button;
