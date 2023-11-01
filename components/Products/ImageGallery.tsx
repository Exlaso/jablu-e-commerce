"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = ({
  images,
  title,
}: {
  images: { image_url:string }[];
  title: string;
}) => {
  const [mainimage, setMainimage] = useState<string | undefined>(images.at(0)?.image_url);

  return (
    <div className=" flex flex-col justify-center items-center  p-3 ">
      <Image
        src={mainimage as string}
        alt={title + "main image"}
        width={500}
        height={500}
        className="rounded-3xl object-contain aspect-square p-4"
      ></Image>
      <div className="flex gap-2 shrink-0  top-full flex-wrap justify-between ">
        {images.length > 1 &&
          images.map((e, i) => {
            let css: string = "";
            if (e.image_url === mainimage) {
              css = "border-2 border-cyan-500";
            } else {
              css = "border-2 border-gray-300";
            }
            return (
              <Image
                key={e.image_url}
                src={e.image_url}
                id={e.image_url}
                onClick={(e) => setMainimage(e.currentTarget.id)}
                alt={title + "image" + i}
                width={75}
                height={75}
                className={` aspect-square object-contain shrink-0 bg-white p-1 shadow-xl rounded-2xl ${css}`}
              ></Image>
            );
          })}
      </div>
    </div>
  );
};

export default ImageGallery;
