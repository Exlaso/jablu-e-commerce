"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FormEventHandler, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import InputField from "@/components/Signup/InputField";
import Image from "next/image";
const Signin = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const callbackurl = searchParams.get("callbackUrl");
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
  const { update } = useSession();
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const [myerror, seterror] = useState<errorform>(reseterror);
  const router = useRouter();
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
      seterror(() => ({
        ...reseterror,
        email: true,
        error: "Email Address is Invalid",
      }));
    } else if (ValidatePassword(userInfo.password)) {
      seterror(() => ({
        ...reseterror,
        password: true,
        error: "Password length Must be more than 8 characters",
      }));
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
        });
        seterror({ ...myerror, error: res?.error as string });
      } catch (error: any) {
        seterror({ ...myerror, error: error?.message as string });
        console.error("Error at Signin Req", error);
      }
    }
    setIsbtnloading(false);
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
        <InputField
          haveerror={myerror.email}
          label=" Email"
          placeholder="example@email.com"
          className="mb-4 w-full"
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={(e) => {
            seterror((e) => ({ ...reseterror }));

            setUserInfo({ ...userInfo, email: e.currentTarget.value });
          }}
          required={true}
        />

        <div
          className={`mb-4  duration-100 ${
            myerror.password && " text-red-500"
          }`}
        >
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>

          <div className="relative">
            <input
              placeholder="*********"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 ${
                myerror.password && "border-red-600"
              } `}
              type={ispassvisible ? "text" : "password"}
              id="password"
              name="password"
              value={userInfo.password}
              onChange={(e) => {
                seterror((e) => ({ ...reseterror }));

                setUserInfo({ ...userInfo, password: e.currentTarget.value });
              }}
              required
            />
            <Image
              onClick={changeVisibility}
              className="absolute right-2.5 top-2.5"
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
        <AnimatePresence>
          {myerror.error && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className=" left-0 p-3 rounded-lg top-0 w-full  text-red-600 bg-red-100 capitalize">
                {myerror.error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <div className="flex justify-center items-center gap-1">
        Not a member?{" "}
        <Link
          href={"/Auth/Signup"}
          className="underline cursor-pointer"
        >
          Join Now
        </Link>
      </div>
    </motion.div>
  );
};

export default Signin;
