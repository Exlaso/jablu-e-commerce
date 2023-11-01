import {Cartitems} from "@/lib/Interfaces";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface IncDecButtonProps {
  data: Cartitems;
  setCarteditems: Dispatch<SetStateAction<Cartitems[]>>;
}

const IncDecButton: FunctionComponent<IncDecButtonProps> = ({
  setCarteditems,
  data,
}) => {
  const [decloading, setDecloading] = useState<boolean>(false);
  const [incloading, setIncloading] = useState<boolean>(false);

  const UpdateHandler = (
    productdata: Cartitems,
    inc: number
  ) => {
    toast.promise(
      fetch("api/UpdateCount", {
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
      })
        .then((res) => res.json())
        .then((data) => {
          setIncloading(false);
          setDecloading(false);
          if (data.error) {
            console.error(data.message);
          } else {
            if (inc > 0) {
              IncrementHandler(productdata);
            } else {
              DecrementHandler(productdata);
            }
          }
        }),
      {
        loading: "Updating...",
        success: () => {
          return `Information Was Successfully updated.`;
        },
        error: "Error",
      }
    );
  };
  const IncrementHandler = (productdata: Cartitems) => {
    setCarteditems((prev) => {
      return [
        ...prev
          .filter(
            (e) =>
              e.product_id === productdata.product_id &&
              e.color === productdata.color &&
              e.size === productdata.size
          )
          .map((e) => ({ ...e, count: e.count + 1 })),
        ...prev.filter(
          (e) =>
            !(
              e.product_id === productdata.product_id &&
              e.color === productdata.color &&
              e.size === productdata.size
            )
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
              )
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
                e.size === productdata.size
            )
            .map((e) => ({ ...e, count: e.count - 1 })),
          ...prev.filter(
            (e) =>
              !(
                e.product_id === productdata.product_id &&
                e.color === productdata.color &&
                e.size === productdata.size
              )
          ),
        ];
      });
    }
  };

  return (
    <div className=" px-4 py-2 text-xl bg-transparent text-highlight border border-[var(--secondary-color)] rounded-full w-28 flex justify-between">
      <button
        disabled={decloading || incloading}
        type="button"
        className="disabled:opacity-25"
        onClick={() => {
          UpdateHandler(data, -1);
          setDecloading(true);
        }}
      >
        -
      </button>
      <span>{data.count}</span>
      <button
        disabled={decloading || incloading}
        type="button"
        className="disabled:opacity-25"
        onClick={() => {
          UpdateHandler(data, +1);
          setIncloading(true);
        }}
      >
        +
      </button>
    </div>
  );
};

export default IncDecButton;
