"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PathRoute = () => {
  const path: string[] = usePathname().split("/").splice(1);
  return (
    <span className="flex gap-4">
      {path.map((e, i) => (
        <Link
          href={e}
          className="underline text-slate-600"
          key={i}
        >
          /{e}
        </Link>
      ))}
    </span>
  );
};

export default PathRoute;
