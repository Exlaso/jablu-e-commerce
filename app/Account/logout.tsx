"use client";
import Button from "@/components/Utils/Button";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  const Signout = () => {
    fetch("/api/DeleteCookie", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
      {
        if (!res.error){
          signOut();
        }
      });
  };

  return (
    <Button
      color="danger"
      onClick={() => {
        Signout();
        return;
      }}
    >
      Logout!
    </Button>
  );
};

export default Logout;
