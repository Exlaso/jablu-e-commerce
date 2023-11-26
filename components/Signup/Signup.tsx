"use client"
import React, {FormEventHandler, FunctionComponent, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Emailsendinterface} from "@/lib/Interfaces";
import {TokengenBase32} from "@/utils/RandStringGen";
import {signIn} from "next-auth/react";
import {toast} from "sonner";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";
import {useMediaQuery} from "@mui/material";

interface typesforSignup {
    callbackUrl: string
}

const Signup: FunctionComponent<typesforSignup> = ({callbackUrl}) => {
    const isdarkmode = useMediaQuery('(prefers-color-scheme: dark)');
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<{
        email: string;
        password: string;
        firstname: string;
        lastname: string;
    }>({email: "", password: "", firstname: "", lastname: ""});
    const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
    useState<boolean>(false);
    // const [ispassvisible, setIspassvisible] = useState<boolean>(false);
    // const changeVisibility = () => {
    //     setIspassvisible((e) => !e);
    // };
    const Validateemail = (e: string) =>
        !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);
    const ValidateName = (e: string) => e.length <= 2;
    const ValidatePassword = (e: string) => e.length < 8;

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();
        if (ValidateName(userInfo.firstname)) {
            toast.error("First Name length Must be more than 2 characters");
        } else if (ValidateName(userInfo.lastname)) {
            toast.error("Last Name length Must be more than 2 characters");
        } else if (Validateemail(userInfo.email)) {
            toast.error("Email Address is Invalid");
        } else if (ValidatePassword(userInfo.password)) {
            toast.error("Password length Must be more than 8 characters");
        } else {
            try {
                setIsbtnloading(true);
                const res = await fetch("/api/Signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...userInfo,
                        email: userInfo.email.toLowerCase(),
                    }),
                });
                const data: {
                    message: string;
                    data: string;
                    error: boolean;
                } = await res.json();

                if (data.error) {
                    setIsbtnloading(false);

                    if (data.message === "Email Address Already Exist") {
                        toast.error(data.message as string);
                    } else {

                        toast.error(data.message as string);
                    }
                } else {
                    const VerifyUrl = TokengenBase32();

                    await fetch("/api/Insertverifyurl", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify({UUID: data.message, URL: VerifyUrl}),
                    });

                    const emailsenddata: Emailsendinterface = {
                        Body: {
                            Firstname: userInfo.firstname,
                            verifyurl: VerifyUrl,
                        },
                        Subject: "Verify Your Email Address on Jablu.in",
                        to: userInfo.email,
                    };
                    await fetch("/api/emailsend", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(emailsenddata),
                    });
                    setIsbtnloading(false);

                    router.replace("/Auth/Signin");
                }
            } catch (error: any) {
                setIsbtnloading(false);
                console.error({error});
            }
        }
    };
    const Googlelogin = async () => {
        await signIn("google", {
            callbackUrl,
            redirect: true,
        });
    };

    return <>
        <Typography color={isdarkmode ? "white" : "black"}
                    variant={"h1"}
                    className="     dark:text-white">
            Create Account
        </Typography>
        <form onSubmit={handleSubmit} className={"flex flex-col  gap-10 w-full"}>
            <div className={"grid grid-cols-2 w-full gap-5"}>
                <Input
                    onChange={(e) => setUserInfo({...userInfo, firstname: e.target.value})}
                    variant={"static"}
                    color={isdarkmode ? "white" : "black"}
                    crossOrigin={""}
                    label={"First Name"}
                    value={userInfo.firstname}
                /><Input
                onChange={(e) => setUserInfo({...userInfo, lastname: e.target.value})}
                variant={"static"}
                color={isdarkmode ? "white" : "black"}
                crossOrigin={""}
                label={"Last Name"}
                value={userInfo.lastname}
            /></div>
            <Input
                onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                variant={"static"}
                color={isdarkmode ? "white" : "black"}
                crossOrigin={""}
                label={"Email"}
                value={userInfo.email}
            />
            <Input
                onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                variant={"static"}
                color={isdarkmode ? "white" : "black"}
                crossOrigin={""}
                label={"Password"}
                value={userInfo.password}
                type={"password"}
            />
            <div className={"w-full grid gap-4"}>

                <Button type={"submit"}
                        className={"p-3 w-full flex gap-2 justify-center items-center rounded-xl text-sm"}>
                    {isbtnloading ? <Spinner className={"h-4 w-4"}/> : null}
                    Create Account
                </Button>
                <p>
                    Already have an account? <Link className={"underline"} href={`/Auth/Signin?callbackUrl=${callbackUrl}`}>Login here</Link>
                </p>
            </div>
            <div className={"flex gap-3 justify-center items-center"}>
                <span className={"h-[.5px] w-full bg-[var(--secondary-color)]"}></span>
                <p>OR</p>
                <span className={"h-[.5px] w-full bg-[var(--secondary-color)]"}></span>
            </div>
            <div className={"flex justify-evenly gap-5"}>
                <button
                    type={"button"}
                    className={"p-2 border rounded-xl w-full flex justify-center items-center gap-3"}
                    onClick={Googlelogin}
                >
                    <Image
                        src={"/figma/google.svg"}
                        alt={"google"}
                        width={25}
                        height={25}
                    />
                    Signin with Google
                </button>

            </div>

        </form>
    </>
}
export default Signup