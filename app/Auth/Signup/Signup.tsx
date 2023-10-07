"use client";
import React from "react";
import { FormEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import InputField from "@/components/Signup/InputField";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<{
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }>({ email: "", password: "", firstname: "", lastname: "" });
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
  const [myerror, seterror] = useState<errorform>(reseterror);
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
      seterror(() => ({
        ...reseterror,
        fname: true,
        error: "First Name length Must be more than 2 characters",
      }));
    } else if (ValidateName(userInfo.lastname)) {
      seterror(() => ({
        ...reseterror,
        lname: true,
        error: "Last Name length Must be more than 2 characters",
      }));
    } else if (Validateemail(userInfo.email)) {
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
        const data = await res.json();

        if (data.error) {
          seterror((ex) => ({ ...reseterror, error: data.message as string }));
        } else {
          router.replace("/Auth/Signin");
        }
      } catch (error: any) {
        console.error({ error });
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
      <h2 className="text-2xl font-semibold mb-4">Sign up to Jablu.in</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-2 gap-2">
          <InputField
            haveerror={myerror.fname}
            placeholder="John"
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstname}
            onChange={(e) => {
              seterror((e) => ({ ...reseterror }));
              setUserInfo({ ...userInfo, firstname: e.currentTarget.value });
            }}
            required={true}
            className="mb-4 w-full"
            label="First Name"
          />
          <InputField
            haveerror={myerror.lname}
            className="mb-4 w-full"
            id="Lastname"
            label="Last Name"
            name="Lastname"
            onChange={(e) => {
              seterror((e) => ({ ...reseterror }));

              setUserInfo({ ...userInfo, lastname: e.currentTarget.value });
            }}
            placeholder="Doe"
            required={true}
            type="text"
            value={userInfo.lastname}
          />
        </div>

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
          {isbtnloading ? "Loading..." : "Sign up"}
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
        Already a member?
        <Link
          href={"/Auth/Signin"}
          className="underline cursor-pointer"
        >
          Login Now
        </Link>
      </div>
    </motion.div>
  );
};

export default Signup;
