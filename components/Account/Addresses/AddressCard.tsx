"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  DeleteAddressDocument,
  UpdateAddressDocument,
} from "@/lib/gql/graphql";
import { gqlClient } from "@/lib/service/client";
import { toast } from "sonner";
import { Input } from "@material-tailwind/react";

interface address {
  active: boolean;
  address1: string;
  address2: string;
  address_id: string;
  city: string;
  firstname: string;
  lastname: string;
  userid: string;
  regionstate: string;
  region: string;
  pincode: string;
  phoneno: string;
}

interface typesforAddressCard {
  deleteaddress: (addressid: string) => void;
  address: address;
  token: string;
}

export const AddressSection: FunctionComponent<{
  addresses: address[];
  token: string;
}> = ({ addresses, token }) => {
  const [address, setAddress] = useState<address[]>(addresses);
  const deleteaddress = async (addressid: string) => {
    const deleteaddress = gqlClient.request(
      DeleteAddressDocument,
      {
        id: addressid,
      },
      {
        Authorization: `Bearer ${token}`,
      },
    );
    toast.promise(deleteaddress, {
      loading: "Deleting Address",
      success: () => {
        setAddress((e) => e.filter((e) => e.address_id !== addressid));
        return "Address Deleted";
      },
      error: (err) => {
        console.log(err);
        return "Error Deleting Address";
      },
    });
  };
  return (
    <section className={"flex flex-col gap-4"}>
      {address.length === 0 && (
        <>
          <hr />
          <h2 className="text-2xl my-10 font-bold text-center text-highlight">
            No Addresses Saved
          </h2>
        </>
      )}

      <ul className={"grid grid-cols-2 gap-2 max-md:grid-cols-1"}>
        {address.map((e) => {
          return (
            <AddressCard
              token={token}
              address={e}
              key={e.address_id + Math.random()}
              deleteaddress={deleteaddress}
            />
          );
        })}
      </ul>
      <p className={"text-center"}>
        You can save your address while checking out
      </p>
    </section>
  );
};
const AddressCard: FunctionComponent<typesforAddressCard> = (props) => {
  const [isediting, setIsediting] = useState<boolean>(false);

  return (
    <section
      className={
        "border border-gray-500 p-4 flex flex-col justify-between gap-4 rounded-xl"
      }
    >
      <div className="flex flex-col gap-2">
        {!isediting ? (
          <DefaultAddressCard
            address={props.address}
            setIsediting={setIsediting}
            deleteaddress={props.deleteaddress}
          />
        ) : (
          <EditAddressCard
            address={props.address}
            setIsediting={setIsediting}
            token={props.token}
          />
        )}
      </div>
    </section>
  );
};
const DefaultAddressCard: FunctionComponent<{
  address: address;
  deleteaddress: (addressid: string) => void;
  setIsediting: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <section className={"flex flex-col gap-2"}>
      <h4 className="text-2xl font-bold text-highlight">
        {props.address.firstname + " " + props.address.lastname}
      </h4>
      <p className="text-lg">{props.address.address1}</p>
      <p className="text-lg">{props.address.address2}</p>
      <p className="text-lg">{props.address.city}</p>
      <p className="text-lg">{props.address.regionstate}</p>
      <p className="text-lg">{props.address.region}</p>
      <p className="text-lg">{props.address.pincode}</p>
      <p className="text-lg">{props.address.phoneno}</p>
      <div className="grid grid-cols-2 gap-4 h-min">
        <button
          type={"button"}
          onClick={() => {
            props.deleteaddress(props.address.address_id);
          }}
          className={
            "p-3 bg-secondary disabled:brightness-50 text-primary rounded-lg"
          }
        >
          Delete Address
        </button>
        <button
          type={"button"}
          className={
            "p-3 bg-secondary disabled:brightness-50 text-primary rounded-lg"
          }
          onClick={() => {
            props.setIsediting((e) => !e);
          }}
        >
          {"Edit Address"}
        </button>
      </div>
    </section>
  );
};

const EditAddressCard: FunctionComponent<{
  address: address;
  token: string;
  setIsediting: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const [localaddress, setlocaladdress] = useState<address>(props.address);
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
  const HandleAddressUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateaddress = gqlClient.request(
      UpdateAddressDocument,
      {
        id: props.address.address_id,
        updateobject: localaddress,
      },
      {
        Authorization: `Bearer ${props.token}`,
      },
    );
    toast.promise(updateaddress, {
      loading: "Updating Address",
      success: () => {
        props.setIsediting(false);
        return "Address Updated";
      },
      error: (err) => {
        console.log(err);
        return "Error Updating Address";
      },
    });
  };
  return (
    <form
      className={"flex flex-col gap-5 capitalize"}
      onSubmit={HandleAddressUpdate}
    >
      <div className={"grid grid-cols-2 gap-2"}>
        <Input
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={""}
          color={isdarkmode ? "white" : "black"}
          style={{
            fontSize: "1em",
          }}
          variant={"outlined"}
          size={"lg"}
          value={localaddress.firstname}
          onChange={(e) => {
            setlocaladdress((x) => ({ ...x, firstname: e.target.value }));
          }}
          label={"First Name"}
        />{" "}
        <Input
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={""}
          color={isdarkmode ? "white" : "black"}
          style={{
            fontSize: "1em",
          }}
          variant={"outlined"}
          size={"lg"}
          value={localaddress.lastname}
          onChange={(e) => {
            setlocaladdress((x) => ({ ...x, lastname: e.target.value }));
          }}
          label={"last Name"}
        />
      </div>

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.address1}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, address1: e.target.value }));
        }}
        label={"Address1"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.address2}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, address2: e.target.value }));
        }}
        label={"Address2"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.city}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, city: e.target.value }));
        }}
        label={"city"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.regionstate}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, regionstate: e.target.value }));
        }}
        label={"regionstate"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.region}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, region: e.target.value }));
        }}
        label={"region"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.pincode}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, pincode: e.target.value }));
        }}
        label={"pincode"}
      />

      <Input
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={""}
        color={isdarkmode ? "white" : "black"}
        style={{
          fontSize: "1em",
        }}
        variant={"outlined"}
        size={"lg"}
        value={localaddress.phoneno}
        onChange={(e) => {
          setlocaladdress((x) => ({ ...x, phoneno: e.target.value }));
        }}
        label={"phoneno"}
      />
      <div className="grid grid-cols-2 gap-4 h-min">
        <button
          type={"submit"}
          disabled={localaddress === props.address}
          className={
            "p-3 bg-secondary disabled:brightness-50 duration-300 text-primary rounded-lg"
          }
        >
          Save New Address
        </button>
        <button
          type={"button"}
          className={
            "p-3 bg-secondary disabled:brightness-50 duration-300 text-primary rounded-lg"
          }
          onClick={() => {
            props.setIsediting(false);
            setlocaladdress(props.address);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddressCard;
