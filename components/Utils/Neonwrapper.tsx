import React, {ReactNode} from "react";

export const Neonwrapper = ({children}: { children: ReactNode }) => {
    return <div className={"bg-white/10 rounded-[40px]  backdrop-opacity-10 "}>
        <div className={"w-full h-full  rounded-[40px] shadow-[inset_0_1px_40px_0_#E3DEFF40]"}>
            <div className={"w-full h-full  rounded-[40px] shadow-[inset_0_4px_18px_0_#9a92d260]"}>
                <div
                    className={"w-full h-full  rounded-[40px] shadow-[inset_0_98px_100px_-48px_#CAACFF60]"}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}