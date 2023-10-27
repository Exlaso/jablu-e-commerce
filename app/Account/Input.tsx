"use client";
import React, { ReactNode } from "react";

const Input = ({
  children,
  id,
  disabled = false,
  value,
  onChange,
}: {
  children: ReactNode;
  id: string;
  value:string,
  disabled?: boolean;
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
      type="text"
      className="border p-4 rounded-xl border-gray-500 bg-transparent"
    />
  </>
);
export default Input;
