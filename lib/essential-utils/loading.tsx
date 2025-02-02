"use client";
import { RemoveScroll } from "react-remove-scroll";
import { PropsWithChildren, useEffect } from "react";
import { useLoader } from "@/lib/essential-utils/useLoader";
import { PiSpinner } from "react-icons/pi";

export const APILoader = ({ children }: PropsWithChildren) => {
  const { loading } = useLoader();

  useEffect(() => {
    const timeout = setTimeout(() => {
      useLoader.setState({ loading: false });
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);
  const canScroll = !loading;
  return (
    <RemoveScroll enabled={!canScroll} removeScrollBar={!canScroll}>
      {loading && (
        <div
          className={
            " fixed flex justify-center items-center top-0 left-0  w-screen h-screen bg-black/80 z-[500]"
          }
        >
          <PiSpinner className={"animate-spin"} size={50} color={"white"} />
        </div>
      )}

      {children}
    </RemoveScroll>
  );
};
