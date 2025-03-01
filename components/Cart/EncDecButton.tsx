import { Cartitems } from "@/lib/Interfaces";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { FiLoader } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { LuLoader } from "react-icons/lu";
import Image from "next/image";

interface IncDecButtonProps {
  data: Cartitems;

  setCarteditems: Dispatch<SetStateAction<Cartitems[]>>;
}

const IncDecButton: FunctionComponent<IncDecButtonProps> = ({
  setCarteditems,
  data,
}) => {
  const { mutate: handleUpdate, isPending } = useMutation({
    mutationFn: async ({
      productdata,
      inc,
    }: {
      productdata: Cartitems;
      inc: number;
    }) => {
      const res = await fetch("api/UpdateCount", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productdata.product_id,
          color: productdata.color,
          size: productdata.size,
          count: productdata.count,
          inc: inc,
        }),
      });
      const data = (await res.json()) as { message: string; error: string };
      if (data.error) {
        console.error(data.message);
        throw new Error(data.message);
      } else {
        if (inc > 0) {
          IncrementHandler(productdata);
        } else {
          DecrementHandler(productdata);
        }
        return true;
      }
    },
  });

  const IncrementHandler = (productdata: Cartitems) => {
    setCarteditems((prev) => {
      return [
        ...prev
          .filter(
            (e) =>
              e.product_id === productdata.product_id &&
              e.color === productdata.color &&
              e.size === productdata.size,
          )
          .map((e) => ({ ...e, count: e.count + 1 })),
        ...prev.filter(
          (e) =>
            !(
              e.product_id === productdata.product_id &&
              e.color === productdata.color &&
              e.size === productdata.size
            ),
        ),
      ];
    });
  };
  const DecrementHandler = (productdata: Cartitems) => {
    if (productdata.count === 1) {
      setCarteditems((prev) => {
        return [
          ...prev.filter(
            (e) =>
              !(
                e.product_id === productdata.product_id &&
                e.color === productdata.color &&
                e.size === productdata.size
              ),
          ),
        ];
      });
    } else {
      setCarteditems((prev) => {
        return [
          ...prev
            .filter(
              (e) =>
                e.product_id === productdata.product_id &&
                e.color === productdata.color &&
                e.size === productdata.size,
            )
            .map((e) => ({ ...e, count: e.count - 1 })),
          ...prev.filter(
            (e) =>
              !(
                e.product_id === productdata.product_id &&
                e.color === productdata.color &&
                e.size === productdata.size
              ),
          ),
        ];
      });
    }
  };

  return (
    <div className=" px-4 py-2 text-xl items-center bg-transparent text-highlight border border-[var(--secondary-color)] rounded-full w-28 flex justify-between">
      <button
        disabled={isPending}
        type="button"
        className="disabled:opacity-25"
        onClick={() => {
          handleUpdate({ productdata: data, inc: -1 });
        }}
      >
        -
      </button>
      <span>
        {isPending ? (
          <Image
            src={"/static/icons/loading.svg"}
            alt={"loading"}
            width={25}
            className="invertsvg"
            height={25}
          ></Image>
        ) : (
          data.count
        )}
      </span>
      <button
        disabled={isPending}
        type="button"
        className="disabled:opacity-25"
        onClick={() => {
          handleUpdate({ productdata: data, inc: +1 });
        }}
      >
        +
      </button>
    </div>
  );
};

export default IncDecButton;
