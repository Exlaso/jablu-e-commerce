"use client";
import Input from "@/components/Account/Password/Input";
import { toast } from "sonner";
import React, { useState } from "react";

const InputSection = ({
  userinfo,
}: {
  userinfo: {
    unique_id: string;
    user_email: string;
    user_first_name: string;
    user_last_name: string;
    user_pfp: string;
    user_phone_number: string;
  };
}) => {
  const [isbtnloading, setIsbtnloading] = useState(false);
  const [mainuserinfo, setMainuserinfo] = useState<{
    unique_id: string;
    user_email: string;
    user_first_name: string;
    user_last_name: string;
    user_pfp: string;
    user_phone_number: string;
  }>(userinfo);

  const Updateinfo = () => {
    const data: {
      user_phone_number: string;
      user_last_name: string;
      user_first_name: string;
      unique_id: string;
    } = {
      unique_id: mainuserinfo.unique_id,
      user_first_name: mainuserinfo.user_first_name,
      user_last_name: mainuserinfo.user_last_name,
  user_phone_number: mainuserinfo.user_phone_number.replaceAll(" ",""),
    };
  if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g.test(mainuserinfo.user_phone_number.replaceAll(" ",""))){
    setIsbtnloading(true)

    toast.promise(
      fetch("/api/UpdateInfo", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      {
        loading: "Updating...",
        success: () => {
          userinfo = mainuserinfo
          setIsbtnloading(false)
          return `Information Was Successfully updated.`;
        },
        error: "Error",
      }
    );
      }else{
          toast.error("Phone Number is Invalid")
      }
  };

  return (
    <fieldset className="flex flex-col gap-2">
      <Input
        value={mainuserinfo?.user_first_name as string}
        id="FirstName"
        onChange={(e) => {
          setMainuserinfo((prev) => ({
            ...prev,
            user_first_name: e.target.value,
          }));
        }}
      >
        First Name
      </Input>
      <Input
        value={mainuserinfo?.user_last_name as string}
        id="LastName"
        onChange={(e) => {
          setMainuserinfo((prev) => ({
            ...prev,
            user_last_name: e.target.value,
          }));
        }}
      >
        Last Name
      </Input>
      <Input
        value={mainuserinfo?.user_email as string}
        id="Email"
        disabled={true}
        onChange={(e) => {
          setMainuserinfo((prev) => ({
            ...prev,
            user_email: e.target.value,
          }));
        }}
      >
        Email Address
      </Input>
      <Input
        value={mainuserinfo?.user_phone_number as string}
        id="Phone Number"
        onChange={(e) => {
          setMainuserinfo((prev) => ({
            ...prev,
            user_phone_number: e.target.value,
          }));
        }}
      >
        Phone Number
      </Input> 
      
      <div className="flex gap-4 my-5 text-lg ">
        <button
          disabled={userinfo === mainuserinfo || isbtnloading}
          color="custom"
          onClick={Updateinfo}
          className="flex gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg disabled:brightness-50"
        >
        Update
        </button>
        <button
          color="any"
          disabled={userinfo === mainuserinfo}
          className="px-3 py-2 rounded-lg disabled:brightness-50 bg-gray-700 text-white"
          onClick={() => {
            setMainuserinfo(userinfo);
          }}
        >
          Discard
        </button>
      </div>
    </fieldset>
  );
};

export default InputSection;
