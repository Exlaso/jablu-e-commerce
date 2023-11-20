"use client"
import React, {FunctionComponent} from "react";
import Link from "next/link";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {usePathname} from "next/navigation";

interface typesforNotLoggedin {
    title: string,
}

const NotLoggedin: FunctionComponent<typesforNotLoggedin> = (props) => {
    const path = usePathname();
    return <div className={"flex flex-col justify-start w-full items-center gap-4"}>
        <h1 className={"text-4xl font-bold"}>
            You&apos;re Not Logged in
        </h1>
        <p>
            {props.title}
        </p>
        <Link href={`/Auth/Signin?callbackUrl=${path}`} className={"p-4 bg-secondary text-primary rounded-lg w-max"}>
            <LoginRoundedIcon/> Login
            here
        </Link>
        <p className={"border-y-2 border-gray-500 my-10 py-2 px-20"}>Just Exploring?</p>
        <Link href={"/Categories"}
              className={"p-4 flex gap-1 bg-secondary text-primary rounded-lg w-max"}>
            <HomeRoundedIcon/> Back to Home Page
        </Link>

    </div>
}
export default NotLoggedin