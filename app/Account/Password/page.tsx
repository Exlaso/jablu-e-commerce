import { PasswordSection } from "@/components/Account/Password/PasswordSection";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="header flex gap-1 flex-col">
        <h1 className="text-4xl text-highlight font-bold text-center">
          Account Password
        </h1>
        <p className="text-lg text-center">Change or reset your password</p>
      </div>
      <PasswordSection />
      <p className="flex justify-center items-center gap-1">
        Forgot Your Password?
        <Link
          href={"/Auth/ResetPassword"}
          className="underline cursor-pointer"
        >
          Reset Here
        </Link>
      </p>
    </section>
  );
};

export default Page;
