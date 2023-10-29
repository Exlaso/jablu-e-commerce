import { AlertRegardingUpdatedPassword, EmailVerificationTemplate, ResetPassword } from "@/components/Emailsend";
import React from "react";

const Page = () => {
  return (
    <div className="p-[15vh] flex flex-col gap-10">
      <EmailVerificationTemplate Firstname={"Vedant"} verifyurl="https://jablu.vercel.app" />
      <hr />
      <ResetPassword name={"Vedant"} url="https://jablu.vercel.app" />
      <hr />
      <AlertRegardingUpdatedPassword name={"Vedant"}/>
    </div>
  );
};

export default Page;
