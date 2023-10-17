"use client";
import React, { ReactNode } from "react";

const Input = ({
  children,
  id,
  disabled = false,
  DefaultValue,
  value,
  onChange,
}: {
  children: ReactNode;
  id: string;
  value:string,
  disabled?: boolean;
  DefaultValue: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <label
      htmlFor={id}
      className="font-semibold"
    >
      {children}
    </label>
    {/* <div className="border p-2 h-10 border-gray-500 bg-gray-500 animate-pulse"></div> */}
    <input
    value={value}
      onChange={onChange}
      disabled={disabled}
      defaultValue={DefaultValue}
      type="text"
      className="border p-2 border-gray-500"
    />
  </>
);
export default Input;
