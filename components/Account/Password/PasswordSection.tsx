"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {API_Resetpassword} from "@/lib/Interfaces";
import {useSession} from "next-auth/react";
import {toast} from "sonner";
import {Button, Input} from "@material-tailwind/react";

export const PasswordSection = () => {
    const [isdarkmode, setisdarkmode] = useState<boolean>(true);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        setisdarkmode(darkModeMediaQuery.matches);

        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setisdarkmode]);
    const defpassworderror = {
        confirmnewpassword: false,
        newpassword: false,
        oldpassword: false,
    };
    const [oldpassword, setoldpassword] = useState<string>("");
    const [newpassword, setnewpassword] = useState<string>("");
    const [confirmnewpassword, setconfirmnewpassword] = useState<string>("");
    const [passworderror, setpassworderror] = useState<{
        oldpassword: boolean;
        newpassword: boolean;
        confirmnewpassword: boolean;
    }>(defpassworderror);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const sessiondata = useSession();

    const handleoldpassword = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setpassworderror(defpassworderror);
        setoldpassword(e.target.value);
    };
    const handlenewpassword = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setpassworderror(defpassworderror);
        setnewpassword(e.target.value);
    };
    const handleconfirmnewpassword = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setpassworderror(defpassworderror);
        setconfirmnewpassword(e.target.value);
    };
    const ispasswordvalid = (e: string) => e.length >= 8;
    const handleformsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ispasswordvalid(oldpassword)) {
            setpassworderror((e) => ({...e, oldpassword: true}));
            toast.error("Password length Must be more than 8 characters");
        } else if (!ispasswordvalid(newpassword)) {
            toast.error("Password length Must be more than 8 characters")
            setpassworderror((e) => ({...e, newpassword: true}));
        } else if (!ispasswordvalid(confirmnewpassword)) {
            toast.error("Password length Must be more than 8 characters")
            setpassworderror((e) => ({...e, confirmnewpassword: true}));
        } else if (newpassword !== confirmnewpassword) {
            toast.error("Password and Confirm Password does not match");
            setpassworderror((e) => ({...e, confirmnewpassword: true}));
        } else {
            const data: API_Resetpassword = {
                email: sessiondata.data?.user?.email as string,
                newpassword: newpassword,
                oldpassword: oldpassword,
            };

            const FetchAPIResetPassword = new Promise((resolve, reject) => {
                fetch("/api/ResetPassword", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((e) => e.json())
                    .then((e) => {
                        if (e.error) {
                            reject(e.message);
                        } else {
                            setoldpassword("");
                            setnewpassword("");
                            setconfirmnewpassword("");

                            resolve(e.message);
                        }
                    });
            });

            toast.promise(FetchAPIResetPassword, {
                loading: "Updating...",
                error: (d) => {
                    return <>{d}</>;
                },
                success(data) {
                    return <>{data}</>;
                },
            });
        }
    };

    return (
        <form
            className="flex flex-col gap-8 justify-center items-center"
            onSubmit={handleformsubmit}
        >
            <div className="relative w-1/2 max-md:w-full">
                <Input
                    crossOrigin={""}
                    size={"lg"}
                    value={oldpassword}
                    color={isdarkmode ? "white" : "black"}
                    type={showPassword ? "text" : "password"}
                    className="w-full"
                    error={passworderror.oldpassword}
                    onChange={(e) => {
                        handleoldpassword(e);
                    }}
                    label="Old Password"
                ></Input>
                <div className="absolute px-2  h-full top-[20%] right-0 ">
                    <Image
                        onClick={handleClickShowPassword}
                        className="invertsvg"
                        src={
                            showPassword
                                ? "/static/icons/Auth/eyeclose.svg"
                                : "/static/icons/Auth/eyeopen.svg"
                        }
                        alt={"Visible"}
                        width={25}
                        height={25}
                    ></Image>
                </div>
            </div>
            <div className={"flex flex-col gap-8 justify-center items-center w-1/2 max-md:w-full"}>
                <Input
                    crossOrigin={""}
                    size={"lg"}
                    color={isdarkmode ? "white" : "black"}
                    type="password"
                    value={newpassword}
                    error={passworderror.newpassword}
                    onChange={(e) => {
                        handlenewpassword(e);
                    }}
                    label="New Password"
                    className="w-1/2 max-md:w-full"
                />
                <Input
                    crossOrigin={""}
                    size={"lg"}
                    type="password"
                    value={confirmnewpassword}
                    error={passworderror.confirmnewpassword}
                    color={isdarkmode ? "white" : "black"}
                    onChange={(e) => {
                        handleconfirmnewpassword(e);
                    }}
                    label="Confirm Password"
                    className="w-1/2 max-md:w-full"
                />
            </div>
            <Button
                type="submit"
                className="bg-blue-500/50 w-1/2 max-md:w-full p-2 rounded-md"
            >
                Submit
            </Button>
        </form>
    );
};
