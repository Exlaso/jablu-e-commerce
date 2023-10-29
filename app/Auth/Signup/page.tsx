import { Suspense } from "react";
import Signup from "./Signup";
import { Metadata } from "next";

interface Props {}
export const metadata: Metadata = {
  title: "Sign up - Jablu.in",
  description:
    " Welcome to Jablu.in, your go-to E-commerce destination. Sign up now to access a world of unique clothing with premium designs.",
  keywords: "Jablu.in, E-commerce, Signin, Jablu, Exlaso, Vedant Bhavsar",
  icons: {
    icon: "https://jabluu.vercel.app/icon.svg",
  },
 
    metadataBase: new URL("https://jabluu.vercel.app"),
 openGraph: {
    title: "Sign up - Jablu.in",
    url: "https://jabluu.vercel.app/Auth/Signup",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jabluu.vercel.app/icon.svg",
    description:
      "Welcome to Jablu.in, your go-to E-commerce destination. Sign up now to access a world of unique clothing with premium designs.",
  },
};



const SignIn = async (e:{searchParams:{callbackUrl:string}}) => {
  const callbackUrl = e?.searchParams?.callbackUrl;
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh]  bg-primary sm:min-h-screen  bg-no-repeat bg-cover  "
      // style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
        <Signup callbackUrl={callbackUrl}/>
    </div>
  );
};
export default SignIn;
