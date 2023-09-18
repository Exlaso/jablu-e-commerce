"use client";
import { dataforproduct } from "@/lib/Interfaces";
import { FunctionComponent, useEffect, useState } from "react";
import Colors from "./Colors";
import Size from "./Size";
import CartButton from "./CartButton";
import { useCartContext } from "@/Store/StoreContext";
import Heart from "../Utils/Heart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SelectionSectionProps {
  data: dataforproduct[];
}

const SelectionSection: FunctionComponent<SelectionSectionProps> = ({
  data,
}) => {
  const router = useRouter();
  const { status } = useSession();
  const { setCarted, favourited, setFavourited } = useCartContext();
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
    available_color,
    available_size,
    price,
    images,
    description,
    rating,
    category,
    id,
  }: dataforproduct = data?.at(0) as dataforproduct;

  useEffect(() => {
    const data: dataforproduct | undefined = favourited.find(
      (e) => e.id === id
    );

    if (data !== undefined) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    return () => {};
  }, [favourited, id]);
  const Fetchcolor = (e: string) => {
    setColor(e);
  };
  const FetchSize = (e: varientsofsize) => {
    setsize(e);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-black capitalize">{title}</h1>
      <span className="capitalize ">
        category:<Link
          className="underline w-fit p-2 cursor-pointer capitalize underline-offset-2"
          href={"/Categories/Search/"+category}
        >
          {category}
        </Link>
      </span>
      <div className=" flex gap-3 items-center ">
        <span className="border border-green-500 text-xl  font-bold text-green-500 rounded-md py-2 px-4">
          ₹
          {price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </span>
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
        onClick={() => {
          setFavourited((prev) => {
            if (status === "unauthenticated") {
              router.push("/Signin");
              return prev;
            } else if (status === "authenticated") {
              if (!liked) {
                return [
                  ...prev,
                  {
                    id,
                    title,
                    price,
                    available_color,
                    available_size,
                    category,
                    description,
                    images,
                    rating,
                  },
                ];
              } else {
                return [...prev.filter((e) => e.id !== id)];
              }
            } else {
              return prev;
            }
          });
        }}
      >
        <Heart liked={liked} />
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
          data={{
            id,
            title,
            available_color,
            available_size,
            images,
            category,
            description,
            price,
            rating,
            color,
            size,
            count,
          }}
          setCarted={setCarted}
        ></CartButton>
      </div>
    </>
  );
};

export default SelectionSection;
