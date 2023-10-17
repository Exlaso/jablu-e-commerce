"use client";
import { dataforproduct, dataforproductwithmetadata } from "@/lib/Interfaces";
import { FunctionComponent, useEffect, useState } from "react";
import Colors from "./Colors";
import Size from "./Size";
import CartButton from "./CartButton";
import Heart from "../Utils/Heart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DislikeProduct from "@/utils/DisikeProduct";
import LikeProduct from "@/utils/LikeProduct";
import Image from "next/image";

interface SelectionSectionProps {
  data: dataforproduct[];
}

const SelectionSection: FunctionComponent<SelectionSectionProps> = ({
  data,
}) => {
  const router = useRouter();
  const { status } = useSession();
  const [liked, setLiked] = useState<boolean>(false);
  const colors: string[] | undefined = data
    .at(0)
    ?.available_color.map((e) => e.toUpperCase());
  // ["red", "white", "black", "cyan", "gray", "green"];
  const sizes: string[] | undefined = data
    .at(0)
    ?.available_size.map((e) => e.toUpperCase());
  // const sizes: string[] | undefined = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
  const [color, setColor] = useState<string>(colors?.at(0) as string);
  const [size, setsize] = useState<string>(sizes?.at(0) as string);
  const [count, setCount] = useState<number>(1);
  type varientsofsize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
  const islogin = useSession().status === "authenticated";
  const {
    title, 
    price, 
    rating,
    mrp,
    category,
    id, 
  }: dataforproduct = data?.at(0) as dataforproduct;
  const discount: string = (((mrp - price) / mrp) * 100 * -1).toFixed(0);
  const [HeartLoading, setHeartLoading] = useState<boolean>(false);
  useEffect(() => {
    if (status === "authenticated") {
      setHeartLoading(true);
      fetch(`/api/IsProductLiked?product_id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLiked(data.message);
          setHeartLoading(false);
        });
    }
  }, [id, status]);
  const Fetchcolor = (e: string) => {
    setColor(e);
  };
  const FetchSize = (e: varientsofsize) => {
    setsize(e);
  };

  const OnLikeHandler = () => {
    setHeartLoading(true);
    if (!HeartLoading) {
      if (status === "unauthenticated") {
        router.push("/Auth/Signin");
      } else if (status === "authenticated") {
        if (liked) {
          DislikeProduct(id).then((e) => {
            if (e) {
              setLiked(false);
              setHeartLoading(false);
            }
          });
        } else {
          LikeProduct(id).then((e) => {
            if (e) {
              setLiked(e);
              setHeartLoading(false);
            }
          });
        }
      }
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black capitalize">{title}</h1>
      <span className="capitalize ">
        category:
        <Link
          className="underline w-fit p-2 cursor-pointer capitalize underline-offset-2"
          href={"/Categories/Search/" + category}
        >
          {category}
        </Link>
      </span>
      <div className=" flex gap-3 items-center ">
      <div className="flex items-center  font-semibold gap-2">
                <span className=" rounded-full  text-xl  ">
                  Rs.
                  {price.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </span>
                 {discount !== "0.0" && <span className="text-red-600  text-lg">
                    <s>Rs. 100</s>
                  </span>}
              </div>
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 pb-[1px] text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          {rating.rate}
        </span>
        <span>·</span>
        <span className="underline cursor-pointer">{rating.count} reviews</span>
      </div>
      <span
        className="flex gap-1 underline cursor-pointer"
        onClick={OnLikeHandler}
      >
        {!HeartLoading ? (
          <Heart liked={liked}></Heart>
        ) : (
          <Image
            src={"/static/icons/loading.svg"}
            alt={"loading"}
            width={25}
            height={25}
          ></Image>
        )}
        {liked ? "Remove from Favourite" : "Add to Favourite"}
      </span>
      <Colors
        Colors={colors}
        FetchColor={Fetchcolor}
      ></Colors>
      <Size
        Size={sizes}
        FetchSize={FetchSize}
      ></Size>
      <div className="flex w-full gap-4 justify-evenly items-center">
        <div className=" px-4 py-2  text-xl bg-transparent text-cyan-600 border border-cyan-600 rounded-full w-28 flex justify-between items-center h-fit">
          <button
            type="button"
            onClick={() => setCount((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <CartButton
          islogin={islogin}
          data={data?.at(0) as dataforproductwithmetadata}
        ></CartButton>
      </div>
    </>
  );
};

export default SelectionSection;
