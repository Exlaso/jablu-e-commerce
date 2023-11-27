"use client"
import React, {FunctionComponent} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {CiHome, CiLogin} from "react-icons/ci";

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
        <Link href={`/Auth/Signin?callbackUrl=${path}`} className={"p-4 bg-secondary flex-center gap-2 text-primary rounded-lg w-max"}>
            <CiLogin className={"h-6 w-6"}/> Login
            here
        </Link>
        <p className={"border-y-2 border-gray-500 my-10 py-2 px-20"}>Just Exploring?</p>
        <Link href={"/Categories"}
              className={"p-4 flex gap-1 bg-secondary  flex-center text-primary rounded-lg w-max"}>
            <CiHome className={"h-6 w-6"}/> Back to Home Page
        </Link>

    </div>
}
export default NotLoggedin