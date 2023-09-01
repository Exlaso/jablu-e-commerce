import Image from "next/image";
import { JSX } from "react";
import Navbar from "@/components/navbar";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar></Navbar>
      Exlaso exlaos
      <div className="w-full h-32 bg-blue-500 transform skew-x-12"></div>
    </main>
  );
}
