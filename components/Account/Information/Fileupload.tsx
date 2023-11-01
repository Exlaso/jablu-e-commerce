// components/FileUpload.tsx
"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

const FileUpload = ({
  unique_id,
  defaulturl,
  setimageurll,
}: {
  unique_id: string;
  defaulturl: string;
  setimageurll: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [DisplayError, setDisplayError] = useState<string>("");

  return (
    <>
      <UploadButton
        endpoint="imageUploader"
        className="w-full"
        onClientUploadComplete={(res) => {
          // Do something with the response
          const imageurl =
            res?.at(0)?.url === undefined ? defaulturl : res?.at(0)?.url;
          setimageurll(imageurl as string);
          

          fetch("/api/UploadImage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: imageurl,
              unique_id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                setDisplayError(`Something went wrong while Uploading!!`);
              }
            });
        }}
        onUploadError={() => {
          // Do something with the error.
          setDisplayError(`Something went wrong while Uploading!!`);
        }}
      />
      <p className="text-red-600">{DisplayError}</p>
    </>
  );
};

export default FileUpload;
