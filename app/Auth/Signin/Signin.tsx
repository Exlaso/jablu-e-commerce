"use client";
import React from "react";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TextField } from "@mui/material";
import { errortype } from "@/lib/Interfaces";
const Signin = ({ callbackUrl }: { callbackUrl: string }) => {
  const [userInfo, setUserInfo] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  type errorform = {
    error: string;
    fname: boolean;
    lname: boolean;
    email: boolean;
    password: boolean;
  };
  const reseterror: errorform = {
    error: "",
    fname: false,
    lname: false,
    email: false,
    password: false,
  };
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const defaulterror: errortype = { error: false, message: "" };
  const [Errorforemail, setErrorforemail] = useState<errortype>(defaulterror);
  const [Errorforpassword, setErrorforpassword] =
    useState<errortype>(defaulterror);
  const Validateemail = (e: string) =>
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);
  const ValidatePassword = (e: string) => e.length < 8;
  const [ispassvisible, setIspassvisible] = useState<boolean>(false);
  const changeVisibility = () => {
    setIspassvisible((e) => !e);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setIsbtnloading(true);
    e.preventDefault();
    if (Validateemail(userInfo.email)) {
      setErrorforemail({
        error: true,
        message: "Email Address is Invalid",
      });
    } else if (ValidatePassword(userInfo.password)) {
      setErrorforpassword({
        error: true,
        message: "Password length Must be more than 8 characters",
      });
    } else {
      try {
        const apires = await fetch(`/api/Signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email.toLowerCase(),
            password: userInfo.password,
          }),
        });
        const data = await apires.json();

        if (data.error) {
          throw new Error(data.message);
        }
        const res = await signIn("credentials", {
          email: userInfo.email.toLowerCase(),
          password: userInfo.password,
          redirect: true,
          callbackUrl,
        });
        setErrorforemail({ error: true, message: res?.error as string });
      } catch (error: any) {
        if (error?.message === "Account Do Not Exists") {
          setErrorforemail({ error: true, message: error?.message as string });
        } else {
          setErrorforpassword({
            error: true,
            message: error?.message as string,
          });
        }
        console.error("Error at Signin Req", error);
      }
    }
    setIsbtnloading(false);
  };

  const Googlelogin = async () => {
    const res = await signIn("google", {
      callbackUrl,
      redirect: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
      }}
      className=" p-8 rounded w-[70vw] max-md:w-full relative flex flex-col gap-6 "
    >
      <h2 className="text-2xl font-semibold mb-4">Log In to Jablu.in</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <TextField
          error={Errorforemail.error}
          helperText={Errorforemail.message}
          label=" Email"
          placeholder="example@email.com"
          className="mb-4 w-full"
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={(e) => {
            setErrorforemail(defaulterror);
            setUserInfo({ ...userInfo, email: e.currentTarget.value });
          }}
          required={true}
        />

        <div className="relative">
          <TextField
            helperText={Errorforpassword.message}
            error={Errorforpassword.error}
            label={"Password"}
            placeholder="*********"
            className={`w-full border rounded-lg focus:outline-none focus:border-blue-400`}
            type={ispassvisible ? "text" : "password"}
            id="password"
            name="password"
            value={userInfo.password}
            onChange={(e) => {
              setErrorforpassword(defaulterror);

              setUserInfo({ ...userInfo, password: e.currentTarget.value });
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

        <motion.button
          disabled={isbtnloading}
          initial={{ scale: 1 }}
          {...(!isbtnloading && { whileTap: { scale: 0.95 } })}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue flex justify-center items-center gap-2"
          type="submit"
        >
          {isbtnloading && (
            <div className="border-4 border-blue-600 border-l-4 border-l-red-600 p-2 rounded-full animate-spin"></div>
          )}
          {isbtnloading ? "Loading..." : "Log in"}
        </motion.button>
      </form>

      <button
        className="px-3 py-3 border rounded-md bg-tertiary flex justify-center items-center gap-3 text-highlight font-bold"
        onClick={Googlelogin}
      >
        <Image
          src={"/static/logo/google-icon.svg"}
          alt={"Google Svg"}
          width={25}
          height={25}
        ></Image>{" "}
        Signin With Google
      </button>
      <div className="flex justify-center items-center gap-1">
        Not a member?{" "}
        <Link
          href={"/Auth/Signup"}
          className="underline cursor-pointer"
        >
          Join Now
        </Link>
      </div>
      <div className="flex justify-center items-center gap-1">
        Forgot Your Password?
        <Link
          href={"/Auth/ResetPassword"}
          className="underline cursor-pointer"
        >
          Reset Here
        </Link>
      </div>
    </motion.div>
  );
};

export default Signin;
