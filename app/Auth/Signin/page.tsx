import { Suspense } from "react";
import Signin from "./Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in - Jablu.in",
  description:
    "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
  keywords: "Jablu.in, E-commerce, Signin, Jablu, Exlaso, Vedant Bhavsar",
  icons: {
    icon: "https://jabluu.vercel.app/icon.svg",
  },
  robots: "index, follow",
  openGraph: {
    title: "Sign in - Jablu.in",
    url: "https://jabluu.vercel.app/Auth/Signin",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jabluu.vercel.app/icon.svg",
    description:
      "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
  },
};

const SignIn = (e: { searchParams: { callbackUrl: string } }) => {
  const callbackUrl = e?.searchParams?.callbackUrl;

  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen bg-primary  bg-no-repeat bg-cover  "
      // style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Suspense fallback={<></>}>
        <Signin callbackUrl={callbackUrl} />
      </Suspense>
    </div>
  );
};
export default SignIn;
