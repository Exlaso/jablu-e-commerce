"use client";
import { gqlClient } from "@/lib/service/client";
import { AddtoPromotionalDocument } from "@/lib/gql/graphql";
import React, { useState } from "react";
import { toast } from "sonner";

export function SubscribeByEmail({ token }: { token: string }) {
  const [email, setemail] = useState<string>("");
  return (
    <div className="w-full md:flex flex-col items-center gap-5 justify-start col-start-2 col-span-1 max-md:col-span-full ">
      <h3 className="text-lg font-semibold ">Newsletter</h3>
      <p className="mt-2">
        Subscribe to our newsletter for updates and promotions.
      </p>
      <form
        className="mt-4"
        onSubmit={async (e) => {
          e.preventDefault();
          toast.promise(
            gqlClient.request(
              AddtoPromotionalDocument,
              {
                email: email,
              },
              {
                "x-hasura-admin-secret": token,
              },
            ),
            {
              loading: "Loading...",
              success: () => {
                return "You've been subscribed";
              },
              error: (e) => {
                console.log(
                  "=================SubscribeByEmail========================",
                );
                console.log(e);
                console.log(
                  "======================================================",
                );
                return "Something went wrong";
              },
            },
          );
        }}
      >
        <input
          onChange={(e) => {
            setemail(e.currentTarget.value);
          }}
          value={email}
          type="email"
          placeholder="Your email"
          className="w-full md:flex flex-col items-center gap-5 justify-start bg-gray-700 py-2 px-3 rounded-md text-gray-200"
        />
        <button
          type="submit"
          className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
