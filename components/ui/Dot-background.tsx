import React from "react";

export function DotBackground(
    {children}: { children: React.ReactNode }
) {
    return (
        <>
            <div
                className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div
            >
                {children}
            </div>
        </>
    );
}
