"use client";
import React, {FormEvent, FunctionComponent, useState} from "react";
import {useMediaQuery} from "@mui/material";
import {API_UpdatePassword_Body} from "@/lib/Interfaces";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {MyAlert} from "../Utils/Myalert";
import PasswordIcon from "@mui/icons-material/Password";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";
import {toast} from "sonner";

interface NewPasswordProps {
    email: string;
    token: string;
}

const NewPassword: FunctionComponent<NewPasswordProps> = ({email, token}) => {
    const [Password, setPassword] = useState<string>("");
    const [ConfirmPassword, setConfirmPassword] = useState<string>("");
    const [Error, setError] = useState<boolean>(false);
    const [Passwordmatcherror, setPasswordmatcherror] = useState<boolean>(false);
    const [buttonloading, setButtonloading] = useState<boolean>(false);
    const [Success, setSuccess] = useState<boolean>(false);
    const [MainError, setMainError] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const isdarkmode = useMediaQuery('(prefers-color-scheme: dark)');

    const ValidatePassword = (e: string) => e.length < 8;
    const handlePasswordupdateForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonloading(true);
        if (ValidatePassword(Password)) {
            setError(true);
            toast.error("Password length Must be more than 8 characters")
            setButtonloading(false);
        } else {
            if (Password !== ConfirmPassword) {
                toast.error("Password and Confirm Password does not match");
                setPasswordmatcherror(true);
                setButtonloading(false);
            } else {
                const data: API_UpdatePassword_Body = {
                    user_password: Password,
                    user_email: email,
                    token: token,
                };
                fetch("/api/UpdatePassword", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.error) {
                            setMainError(data.message);
                            setOpen(true);
                        } else {
                            setSuccess(true);
                        }
                        setButtonloading(false);
                    });
            }
        }
    };

    return (
        <>
            {MainError && (
                <MyAlert
                    open={open}
                    setOpen={setOpen}
                    message={MainError}
                />
            )}
            <>
                <Typography variant={"h1"}
                            color={isdarkmode ? "white" : "black"}
                > Update Password on
                </Typography>
                    <AnimatePresence>
                        {Success ? (
                            <motion.div
                                animate={{x: 0}}
                                initial={{x: "100%"}}
                                exit={{x: "0%"}}
                                transition={{
                                    damping: 0,
                                }}
                            >
                <span className="flex justify-center text-green-500">
                  {" "}
                    <PasswordIcon fontSize="large"></PasswordIcon>
                </span>
                                <p>
                                    <strong>Congratulations</strong>, your password on Jablu.in has been
                                    successfully updated.
                                </p>
                                <p>
                                    Your account is now more secure than ever. If you didn&apos;t make
                                    this change, please contact our support team immediately for
                                    assistance.
                                </p>
                                <p>
                                    Thank you for choosing Jablu.in for your online shopping
                                    needs.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                animate={{x: "0%"}}
                                exit={{x: "-110%"}}
                                initial={{x: "0%"}}
                                onSubmit={handlePasswordupdateForm}
                                className={"flex flex-col  gap-10 w-full"}
                            >
                                <Input
                                    label="New Password"
                                    type="password"
                                    crossOrigin={""}
                                    variant={"static"}
                                    color={isdarkmode ? "white" : "black"}
                                    value={Password}
                                    error={Error}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(false);
                                    }}
                                />
                                <Input
                                    label="Confirm Password"
                                    crossOrigin={""}
                                    variant={"static"}
                                    color={isdarkmode ? "white" : "black"}
                                    value={ConfirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setPasswordmatcherror(false);
                                    }}
                                    type="password"
                                    error={Passwordmatcherror}
                                />
                                <Button
                                    disabled={buttonloading}
                                    type="submit"
                                    className={"p-3 w-full flex gap-2 justify-center items-center rounded-xl text-sm"}
                                >
                                    {buttonloading ? <Spinner className={"h-4 w-4"}/> : null}

                                    {buttonloading ? "Loading..." : "Update"}
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                <Typography variant={"paragraph"} >
                    Changed Password?{"  "}
                    <Link href={`/Auth/Signin?callbackUrl=/}`}
                          className={"underline"}>Sign in here</Link>
                </Typography>
            </>
        </>
    );
};

export default NewPassword;
