"use client"
import {createTheme, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export const MUIthemeprovider: React.FC<{ children:ReactNode }> = props => {
    return (
        <ThemeProvider theme={darkTheme}>
            {props.children}
        </ThemeProvider>

    );
};