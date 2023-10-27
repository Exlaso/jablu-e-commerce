"use client";
import Image from "next/image";
import React, { useState } from "react";
import FileUpload from "./Fileupload";

const ProfilePhoto = ({
  imageurl,
  unique_id,
}: {
  imageurl: string;
  unique_id: string;
}) => {
  const [imageurll, setimageurll] = useState(imageurl);
  return (
    <div className=" p-2 gap-2 flex flex-col">
      <h2>Profile Photo</h2>
      <div className="bg-tertiary h-[300px] w-full relative flex justify-center items-center ">
        <Image
          src={imageurll}
          className="rounded-full aspect-square object-cover w-[250px]"
          alt="Profile Photo"
          width={500}
          quality={100}
          height={500}
        ></Image>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-center w-full">
          <FileUpload
            unique_id={unique_id}
            defaulturl={imageurl}
            setimageurll={setimageurll}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
