"use client";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/utils/StoreContext";
import Link from "next/link";
import { typeofshippingmethods } from "@/lib/Interfaces";
import { motion } from "framer-motion";

interface DeliverySelectionProps {}

const DeliverySelection: FunctionComponent<DeliverySelectionProps> = () => {
  const router = useRouter();

  const {
    progress,
    phoneno,
    address1,
    setProgress,
    address2,
    region,
    regionstate,
    city,
    pincode,
    shippingmethod,
    setShippingmethod,
  } = useCartContext();
  if (progress < 2) {
    router.push("./Address");
  }
  const handleformsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgress(3);
    router.push("./Payment");
  };
  const Shippingmethods: typeofshippingmethods[] = [
    {
      description: "5 to 8 business days",
      price: 349,
      title: "Economy",
    },
    {
      description: "3 to 4 business days",
      price: 259,
      title: "Standard",
    },
  ];
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // @ts-ignore
      className={"flex gap-4 flex-col"}
      // @ts-ignore
      onSubmit={(e) => handleformsubmit(e)}
    >
      <div
        className={
          "w-full rounded-lg border border-gray-500/50 p-3 flex flex-col gap-3"
        }
      >
        <div className={"w-full grid grid-cols-[.8fr,2fr,.5fr] gap-3"}>
          <span className={"grow-0 shrink-0"}>Contact</span>
          <span
            className={
              "grow-0 shrink-0 text-highlight  flex justify-center items-center"
            }
          >
            {phoneno}
          </span>
          <Link
            href={"./Address"}
            className={"grow-0 shrink-0 text-sm text-blue-500 underline"}
          >
            Change
          </Link>
        </div>
        <hr className={"border border-gray-500/50"} />
        <div className={"w-full grid grid-cols-[.8fr,2fr,.5fr] gap-3"}>
          <span className={"grow-0 shrink-0"}>Shipping Address</span>
          <span
            className={
              "grow-0 shrink-0 text-highlight  flex justify-center items-center"
            }
          >
            {address1 +
              ", " +
              address2 +
              ", " +
              city +
              " - " +
              pincode +
              ", " +
              regionstate +
              ", " +
              region}
          </span>
          <Link
            href={"./Address"}
            className={"grow-0  shrink-0 text-sm text-blue-500 underline"}
          >
            Change
          </Link>
        </div>
      </div>
      <div className={"flex flex-col gap-2"}>
        <h2 className={"text-xl text-highlight "}>Shipping Method</h2>
        <fieldset className={"first:rounded-t-2xl last:rounded-b-2xl"}>
          {Shippingmethods.map((e) => {
            return (
              <label
                key={e.title}
                htmlFor={e.title}
                className={` flex-col  w-full flex p-4 gap-3 ${e.title === shippingmethod.title ? "border-blue-600" : "border-gray-500/50"}  border first:rounded-t-2xl last:rounded-b-2xl `}
              >
                <div className={"flex gap-2"}>
                  <input
                    required={true}
                    checked={e.title === shippingmethod.title}
                    type="radio"
                    id={e.title}
                    onChange={() => {
                      setShippingmethod(e);
                    }}
                    name={"shippingmethods"}
                  />
                  <h3 className={"text-lg font-semibold  text-highlight"}>
                    {e.title}
                  </h3>
                </div>
                <div className={"flex justify-between "}>
                  <p>{e.description}</p>
                  <span className={"text-highlight font-bold"}>
                    Rs. {e.price}
                  </span>
                </div>
              </label>
            );
          })}
        </fieldset>
      </div>
      <div className={"flex justify-between gap-4"}>
        <Link
          href={"./Address"}
          className={"text-blue-400 shrink-0 underline underline-offset-2"}
        >
          {" "}
          &lt; Return to information
        </Link>
        <button
          className={" p-3 rounded-lg bg-secondary grow-0 text-primary"}
          type={"submit"}
        >
          Continue to Payment
        </button>
      </div>
    </motion.form>
  );
};

export default DeliverySelection;
