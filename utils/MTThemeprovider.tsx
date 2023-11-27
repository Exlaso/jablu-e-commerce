"use client"
import React, {ReactNode} from "react";
import {ThemeProvider} from "@material-tailwind/react";

export const MTThemeprovider: React.FC<{ children: ReactNode }> = props => {
    return (
        <ThemeProvider value={{}}>
            {props.children}
        </ThemeProvider>

    );
};
