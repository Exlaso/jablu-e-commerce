"use client";
import Input from "@/app/Account/Input";
import Button from "@/components/Utils/Button";
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
  const [messageupdate, setMessageupdate] = useState<string>("Save");
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
      user_phone_number: mainuserinfo.user_phone_number,
    };
    setIsbtnloading(true);
    setMessageupdate("Saving...");
    fetch("/api/UpdateInfo", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsbtnloading(false);
        setMessageupdate("Saving...");
        if (!data.error) {
          setMessageupdate("Saved");
          setTimeout(() => {
            setMessageupdate("Save");
          }, 3000);
        }
        console.log(data);
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        DefaultValue={userinfo?.user_first_name as string}
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
        DefaultValue={userinfo?.user_last_name as string}
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
        DefaultValue={userinfo?.user_email as string}
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
        DefaultValue={userinfo?.user_phone_number as string}
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
          {isbtnloading && (
            <div className="border-4 border-blue-600 border-l-4 border-l-red-600 p-2 rounded-full animate-spin aspect-square h-1"></div>
          )}
          {messageupdate}
        </button>
        <button
          color="any"
          disabled={userinfo === mainuserinfo}
          className="px-3 py-2 rounded-lg disabled:brightness-50 bg-gray-700 text-white"
          onClick={() => {
            console.log(userinfo);

            setMainuserinfo(userinfo as any);
          }}
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default InputSection;
