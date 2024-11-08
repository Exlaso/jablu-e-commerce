"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import { gqlClient } from "@/lib/service/client";
import { UpdateSubscribedataDocument } from "@/lib/gql/graphql";
import { toast } from "sonner";
import { Button, Switch } from "@material-tailwind/react";
import { FaSave } from "react-icons/fa";

interface typesforSubscribeSwitchs {
  favr: boolean;
  cart: boolean;
  update: boolean;
  new: boolean;
  email: string;
  admintoken: string;
}

const SubscribeSwitches: FunctionComponent<typesforSubscribeSwitchs> = (
  props,
) => {
  const [isdarkmode, setisdarkmode] = useState<boolean>(true);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", changeHandler);

    setisdarkmode(darkModeMediaQuery.matches);

    return () =>
      darkModeMediaQuery.removeEventListener("change", changeHandler);
  }, [setisdarkmode]);
  const [favourite, setfavourite] = useState<boolean>(props.favr);
  const [cart, setcart] = useState<boolean>(props.cart);
  const [update, setupdate] = useState<boolean>(props.update);
  const [newrelease, setnewrelease] = useState<boolean>(props.new);

  const OnSave = () => {
    const updatesub = gqlClient.request(
      UpdateSubscribedataDocument,
      {
        email: props.email,
        updateobject: {
          update,
          cart,
          favourite,
          newreleases: newrelease,
        },
      },
      {
        "x-hasura-admin-secret": props.admintoken,
      },
    );
    toast.promise(updatesub, {
      loading: "Updating Subscribed Data",
      success: "Successfully Updated Subscribed Data",
      error: "Failed to Update Subscribed Data",
    });
  };
  return (
    <>
      <div className={"flex flex-col gap-5"}>
        <Switch
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color={"light-blue"}
          labelProps={{
            className: isdarkmode ? "text-white" : "text-dark",
          }}
          crossOrigin={update}
          label="Favourite Items Reminder"
          checked={favourite}
          onChange={(e) => {
            setfavourite(e.target.checked);
          }}
        />
        <Switch
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color={"light-blue"}
          labelProps={{
            className: isdarkmode ? "text-white" : "text-dark",
          }}
          crossOrigin={update}
          label="Cart Items Reminder"
          checked={cart}
          onChange={(e) => {
            setcart(e.target.checked);
          }}
        />
        <Switch
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color={"light-blue"}
          labelProps={{
            className: isdarkmode ? "text-white" : "text-dark",
          }}
          crossOrigin={update}
          label="New Update Alert"
          checked={update}
          onChange={(e) => {
            setupdate(e.target.checked);
          }}
        />
        <Switch
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color={"light-blue"}
          labelProps={{
            className: isdarkmode ? "text-white" : "text-dark",
          }}
          crossOrigin={update}
          label="New Product/Collection Release"
          checked={newrelease}
          onChange={(e) => {
            setnewrelease(e.target.checked);
          }}
        />
      </div>

      <Button
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        type={"button"}
        onClick={OnSave}
        className={
          "p-3 gap-1 bg-secondary text-primary flex-center rounded-lg w-max"
        }
      >
        <FaSave className={"h-6 w-6"} /> Save Changes
      </Button>
    </>
  );
};
export default SubscribeSwitches;
