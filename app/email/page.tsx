import { EmailVerificationTemplate } from "@/components/Emailsend";
import React from "react";

const Page = () => {
  return (
    <div className="p-[15vh]">
      hlo
      <EmailVerificationTemplate Firstname={"Vedant"} verifyurl="https://jablu.vercel.app" />
    </div>
  );
};

export default Page;
