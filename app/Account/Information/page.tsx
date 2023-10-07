import Image from "next/image";
import React from "react";
import Logout from "../logout";
import Input from "../Input";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";
import Button from "@/components/Utils/Button";
import ProfilePhoto from "@/components/Account/Information/ProfilePhoto";

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
      user_email: string;
      user_first_name: string;
      user_last_name: string;
      user_pfp: string;
      user_phone_number: string;
    }[];
    error: boolean;
  } = await res.json();
  const userinfo = data.message.at(0);
  // const userinfo = {
  //   user_email: "ujasshekhat1@gmail.com",
  //   user_first_name: "Ujas",
  //   user_last_name: "shekhat",
  //   user_pfp: "/static/maitray.png",
  //   user_phone_number: "null",
  // };

  return (
    <div>
      <div className="header flex gap-1 flex-col " >

        <h1 className="text-4xl text-black font-bold text-center">
          Personal Information
        </h1>
        <p className="text-lg text-center">
          Set your name, email and phone number
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 max-md:grid-cols-1">
       <ProfilePhoto imageurl={userinfo?.user_pfp as string}/>
        <div className=" p-2 gap-5 flex flex-col">
          <h2>Personal Information</h2>
          <div className="flex flex-col gap-2">
            <Input
              DefaultValue={userinfo?.user_first_name as string}
              id="FirstName"
            >
              First Name
            </Input>
            <Input
              DefaultValue={userinfo?.user_last_name as string}
              id="LastName"
            >
              Last Name
            </Input>
            <Input
              DefaultValue={userinfo?.user_email as string}
              id="Email"
              disabled={true}
            >
              Email Address
            </Input>
            <Input
              DefaultValue={userinfo?.user_phone_number as string}
              id="Phone Number"
            >
              Phone Number
            </Input>
            <div className="flex gap-4 my-5 text-lg ">
              <Button
                color="primary"
                label="Save"
                // onClick={(e) => {
                //   return;
                // }}
              />
              <Button
                color="any"
                label="Reset"
                // onClick={(e) => {
                //   return;
                // }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Page;
