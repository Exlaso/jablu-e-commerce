"use client"
import {createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import React, {ReactNode} from "react";

export const MUIthemeprovider: React.FC<{ children: ReactNode }> = props => {
    const isdark = useMediaQuery('(prefers-color-scheme: dark)');
    const darkTheme = createTheme({
        palette: {
            mode: isdark ? 'dark' : "light",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            {props.children}
        </ThemeProvider>

    );
};