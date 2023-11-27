"use client";
import React, {FormEventHandler, useEffect, useState} from "react";
import {signIn} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {toast} from "sonner";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";
import {API_ERROR, API_signin, API_signinres} from "@/lib/Interfaces";

const Signin = ({callbackUrl}: { callbackUrl: string }) => {
    const [isdarkmode, setisdarkmode] = useState<boolean>(false);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        // Set the initial value
        setisdarkmode(darkModeMediaQuery.matches);

        // Cleanup function to remove the event listener when the component unmounts
        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setisdarkmode]);

    const [userInfo, setUserInfo] = useState<{ email: string; password: string }>(
        {email: "", password: ""}
    );
    const [isbtnloading, setIsbtnloading] = useState<boolean>(false);

    const Validateemail = (e: string) =>
        !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);
    const ValidatePassword = (e: string) => e.length < 8;
    const [ispassvisible, setIspassvisible] = useState<boolean>(false);
    const changeVisibility = () => {
        setIspassvisible((e) => !e);
    };
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (Validateemail(userInfo.email)) {
            toast.error("Email Address is Invalid");
        } else if (ValidatePassword(userInfo.password)) {
            toast.error("Password length Must be more than 8 characters")
        } else {
            try {
                setIsbtnloading(true)
                const apidata: API_signin = {
                    email: userInfo.email.toLowerCase(),
                    password: userInfo.password,
                }
                const data: API_signinres | API_ERROR = await (await fetch(`/api/Signin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(apidata),
                })).json();
                if (data.error) {
                    if (data.message === "Account Do Not Exists") {
                        setIsbtnloading(false);
                        toast.error(data.message as string);
                    } else {
                        setIsbtnloading(false);
                        toast.error(
                            data.message
                            , {
                                description: data.message === "Verify Your Account to Login" ?
                                    <button className={"underline underline-offset-4 "}
                                            onClick={sendverificationmail}
                                    >Resend Verification Mail
                                    </button> : null
                                ,
                                duration: 10000,
                            });
                    }
                } else {
                    const userinfor = data.message;
                    await signIn("credentials", {
                        email: userInfo.email.toLowerCase(),
                        password: userInfo.password,
                        redirect: true,
                        id: userinfor?.unique_id,
                        name: userinfor?.user_first_name,
                        callbackUrl,
                    });
                    setIsbtnloading(false);
                }
            } catch (error) {
                if (error instanceof Error) {


                }
                setIsbtnloading(false);
                console.error("Error at Signin Req", error);
            }
        }

    };

    const sendverificationmail = () => {
        const Res = new Promise(async (resolve, reject) => {
            const re = await fetch(`/api/ResendVerificationUrl?email=${userInfo.email}`)
            const r = await re.json();
            if (r.error) {
                reject(r.message)
            } else {
                resolve(r.message)

            }
        })
        toast.promise(Res,
            {
                loading: "Sending Email...",
                success: (e) => <>{e}</>,
                error: (e) => <>{e}</>
            })

    }


    const Googlelogin = async () => {
        await signIn("google", {
            callbackUrl,
            redirect: true,
        });
    };

    return (
        <>
            <Typography color={isdarkmode ? "white" : "black"}
                        variant={"h1"}
                        className="     dark:text-white">
                Sign in
            </Typography>
            <form
                onSubmit={handleSubmit}
                className={"flex flex-col  gap-10 w-full"}
            >
                <Input
                    crossOrigin={""}
                    label="Email"
                    variant={"static"}
                    color={isdarkmode ? "white" : "black"}
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(e) => {
                        setUserInfo({...userInfo, email: e.currentTarget.value});
                    }}
                    required={true}
                />

                <div className="relative">
                    <Input
                        crossOrigin={""}
                        label={"Password"}
                        variant={"static"}
                        color={isdarkmode ? "white" : "black"}
                        className={`w-full`}
                        type={ispassvisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={(e) => {

                            setUserInfo({...userInfo, password: e.currentTarget.value});
                        }}
                        required
                    />

                    <div className="absolute px-2 h-full top-0 right-0 flex justify-center items-center">
                        <Image
                            onClick={changeVisibility}
                            className="invertsvg"
                            src={
                                ispassvisible
                                    ? "/static/icons/Auth/eyeclose.svg"
                                    : "/static/icons/Auth/eyeopen.svg"
                            }
                            alt={"Visible"}
                            width={25}
                            height={25}
                        ></Image>
                    </div>
                </div>
                <div className={"w-full grid gap-4"}>
                    <Button type={"submit"}
                            className={"p-3 w-full flex gap-2 justify-center items-center rounded-xl text-sm"}>
                        {isbtnloading ? <Spinner className={"h-4 w-4"}/> : null}
                        Sign in
                    </Button>
                    <Typography variant={"paragraph"}>
                        Don&apos;t have an account? <Link href={`/Auth/Signup?callbackUrl=${callbackUrl}`}
                                                          className={"underline"}>Sign up here</Link>
                    </Typography>
                    <Typography variant={"paragraph"}>
                        Forgot Password? <Link className={"underline"} href={"./ResetPassword"}>
                        Reset Here
                    </Link>
                    </Typography>
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
    );
};

export default Signin;
