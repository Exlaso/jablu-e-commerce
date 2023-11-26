"use client";
import React, {useState} from "react";
import Link from "next/link";
import {MyAlert} from "../Utils/Myalert";
import {AnimatePresence, motion} from "framer-motion";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";
import {useMediaQuery} from "@mui/material";
import {toast} from "sonner";

const ResetPassword = ({uperror}: { uperror: string }) => {
    const [Email, setEmail] = useState<string>("");
    const [MainError, setMainError] = useState(uperror);
    const [open, setOpen] = useState<boolean>(!!uperror);
    const [buttonloading, setButtonloading] = useState<boolean>(false);
    const [Success, setSuccess] = useState<boolean>(false);
    const isdarkmode = useMediaQuery('(prefers-color-scheme: dark)');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const Validateemail = (e: string) =>
        !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);

    const handleEmailsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setButtonloading(true);
        e.preventDefault();

        if (Validateemail(Email)) {
            toast.error("Invalid Email Address");
            setButtonloading(false);
        } else {
            fetch(`/api/SendResetMail?email=${Email.toLowerCase()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
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
    };

    return (
        <>
            <MyAlert
                open={open}
                setOpen={setOpen}
                message={MainError}
            />
            <>
                <Typography variant={"h1"}
                            color={isdarkmode ? "white" : "black"}
                >
                    Reset Password
                </Typography>
                <AnimatePresence>
                    {!Success ? (
                        <motion.form
                            animate={{x: 0}}
                            exit={{x: "-100%"}}
                            className={"flex flex-col  gap-10 w-full"}
                            onSubmit={handleEmailsubmit}
                        >
                            <Input
                                label="Email"
                                crossOrigin={""}
                                variant={"static"}
                                color={isdarkmode ? "white" : "black"}
                                type="email"
                                id="email"
                                name="email"
                                value={Email}
                                onChange={handleEmailChange}
                                required={true}
                            />


                            <div className={"w-full grid gap-4"}>
                                <Button type={"submit"}
                                        className={"p-3 w-full flex gap-2 justify-center items-center rounded-xl text-sm"}>
                                    {buttonloading ? <Spinner className={"h-4 w-4"}/> : null}
                                    Reset Password
                                </Button>


                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            animate={{x: 0}}
                            initial={{x: "100%"}}
                            transition={{
                                damping: 0,
                            }}
                            className=" shrink-0  w-full"
                        >
                <span className="flex justify-center">
                <MarkChatReadIcon fontSize="large" className="text-green-600"/>
                </span>
                            <p>
                                Great news! Your request for a password reset on Jablu.in has
                                been successfully processed, and an email has been sent to
                                your registered address.
                            </p>
                            <p>Please check your inbox for further instructions.</p>
                            <p>
                                If you don&apos;t see the email, don&apos;t forget to also check your
                                spam folder.
                            </p>
                            <p>
                                We&apos;re here to assist you in getting back to a seamless
                                shopping experience at Jablu.in, so feel free to reach out if
                                you encounter any issues.
                            </p>
                        </motion.div>
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

export default ResetPassword;
