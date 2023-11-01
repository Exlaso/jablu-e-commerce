"use client";
import React from "react";
import { FormEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Emailsendinterface, errortype } from "@/lib/Interfaces";
import { TokengenBase32 } from "@/utils/RandStringGen";
import { TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import Authdiv from "@/components/Authdiv";
import JabluTextLogo from "@/components/Utils/Jablulogo";

const Signup = ({ callbackUrl }: { callbackUrl: string }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<{
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }>({ email: "", password: "", firstname: "", lastname: "" });
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const [MainError, setMainError] = useState("");
  const defaulterror: errortype = { error: false, message: "" };
  const [Errorforfirstname, setErrorforfirstname] =
    useState<errortype>(defaulterror);
  const [Errorforlastname, setErrorforlastname] =
    useState<errortype>(defaulterror);
  const [Errorforemail, setErrorforemail] = useState<errortype>(defaulterror);
  const [Errorforpassword, setErrorforpassword] =
    useState<errortype>(defaulterror);
  const [ispassvisible, setIspassvisible] = useState<boolean>(false);
  const changeVisibility = () => {
    setIspassvisible((e) => !e);
  };
  const Validateemail = (e: string) =>
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);
  const ValidateName = (e: string) => e.length <= 2;
  const ValidatePassword = (e: string) => e.length < 8;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setIsbtnloading(true);
    e.preventDefault();
    if (ValidateName(userInfo.firstname)) {
      setErrorforfirstname({
        error: true,
        message: "First Name length Must be more than 2 characters",
      });
    } else if (ValidateName(userInfo.lastname)) {
      setErrorforlastname({
        error: true,
        message: "Last Name length Must be more than 2 characters",
      });
    } else if (Validateemail(userInfo.email)) {
      setErrorforemail({ error: true, message: "Email Address is Invalid" });
    } else if (ValidatePassword(userInfo.password)) {
      setErrorforpassword({
        error: true,
        message: "Password length Must be more than 8 characters",
      });
    } else {
      try {
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
          if (data.message === "Email Address Already Exist") {
            setErrorforemail({ error: true, message: data.message as string });
          } else {
            setMainError(data.message as string);
          }
        } else {
          const VerifyUrl = TokengenBase32();

          fetch("/api/Insertverifyurl", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ UUID: data.message, URL: VerifyUrl }),
          });

          const emailsenddata: Emailsendinterface = {
            Body: {
              Firstname: userInfo.firstname,
              verifyurl: VerifyUrl,
            },
            Subject: "Verify Your Email Address on Jablu.in",
            to: userInfo.email,
          };
          fetch("/api/emailsend", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailsenddata),
          });
          router.replace("/Auth/Signin");
        }
      } catch (error: any) {
        console.error({ error });
      }
    }
    setIsbtnloading(false);
  };
  const Googlelogin = async () => {
    await signIn("google", {
      callbackUrl,
      redirect: true,
    });
  };

  return (
    <Authdiv>
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Sign up to <JabluTextLogo className="text-[2em] ml-3" />
        </h2>
        <p className=" mb-4">
          Join the Jablu.in shopping experience! Sign up now and unlock
          exclusive offers and deals.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-2 gap-2">
          <TextField
            helperText={Errorforfirstname.message}
            error={Errorforfirstname.error}
            placeholder="John"
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstname}
            onChange={(e) => {
              setErrorforfirstname(defaulterror);
              setUserInfo({ ...userInfo, firstname: e.currentTarget.value });
            }}
            required={true}
            className="mb-4 w-full"
            label="First Name"
          />
          <TextField
            helperText={Errorforlastname.message}
            error={Errorforlastname.error}
            className="mb-4 w-full"
            id="Lastname"
            label="Last Name"
            name="Lastname"
            onChange={(e) => {
              setErrorforlastname(defaulterror);

              setUserInfo({ ...userInfo, lastname: e.currentTarget.value });
            }}
            placeholder="Doe"
            required={true}
            type="text"
            value={userInfo.lastname}
          />
        </div>
        <TextField
          helperText={Errorforemail.message}
          error={Errorforemail.error}
          label="Email"
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
            className={`w-full border rounded-lg focus:outline-none focus:border-blue-400 `}
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
          {isbtnloading ? "Loading..." : "Sign up"}
        </motion.button>
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
          Signup With Google
        </button>
        <AnimatePresence>
          {MainError && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className=" left-0 p-3 rounded-lg top-0 w-full  text-red-600 bg-red-100 capitalize">
                {MainError}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <div className="flex justify-center items-center gap-1">
        Already a member?
        <Link
          href={"/Auth/Signin"}
          className="underline cursor-pointer"
        >
          Login Now
        </Link>
      </div>
    </Authdiv>
  );
};

export default Signup;
