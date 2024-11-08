import React, { JSX } from "react";

export interface Address {
  name: string;
  address1: string;
  address2: string;
  phoneno: string;
  city: string;
  regionstate: string;
  pincode: string;
  region: string;
}

export const ShippingAddressDisplay = ({
  address,
}: {
  address: Address;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 capitalize">
      <h2 className="text-2xl font-bold">Shipping Address</h2>
      <p className={"text-xl font-semibold"}>{address.name}</p>
      <p>{address.phoneno}</p>
      <p>
        {address.address1} {address.address2}
      </p>
      <p>
        {`${address.city}, ${address.regionstate} ${address.pincode} ${address.region}`}{" "}
      </p>
    </div>
  );
};
