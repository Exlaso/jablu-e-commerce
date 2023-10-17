import React from "react";
import Logout from "../logout";
import Input from "../Input";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";
import Button from "@/components/Utils/Button";
import ProfilePhoto from "@/components/Account/Information/ProfilePhoto";
import InputSection from "@/components/Account/Information/InputSection";

const Page = async () => {
  const token: RequestCookie | undefined = cookies().get("jablu_jwt_token");
  if (!token?.value) {
    signOut();
  }
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/FetchUserDetails?jablu_jwt_token=${token?.value}`
  );
  const data: {
    message: {
      unique_id:string;
      user_email: string;
      user_first_name: string;
      user_last_name: string;
      user_pfp: string;
      user_phone_number: string;
    }[];
    error: boolean;
  } = await res.json();
  const userinfo = data.message.at(0);

  return (
    <div>
      <div className="flex flex-col gap-1 header " >

        <h1 className="text-4xl font-bold text-center text-black">
          Personal Information
        </h1>
        <p className="text-lg text-center">
          Set your name, email and phone number
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 max-md:grid-cols-1">
       <ProfilePhoto imageurl={userinfo?.user_pfp as string} unique_id={userinfo?.unique_id as string}/>
        <div className="flex flex-col gap-5 p-2 ">
          <h2>Personal Information</h2>
       <InputSection userinfo={userinfo as  {
        unique_id: string;
        user_email: string;
        user_first_name: string;
        user_last_name: string;
        user_pfp: string;
        user_phone_number: string;
      }} />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Page;
