"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "@material-tailwind/react";

const ImageGallery = ({
  images,
  title,
}: {
  images: { image_url: string }[];
  title: string;
}) => {
  return (
    <Carousel className="rounded-xl  max-md:h-[45vh] z-0   ">
      {images.map((image) => (
        <Image
          key={image.image_url}
          src={image.image_url}
          alt={title + "main image"}
          width={500}
          height={500}
          className="rounded-3xl  w-full object-contain aspect-1 p-4"
        ></Image>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
