// pages/reset-password.tsx

import NewPassword from "@/components/Resetpassword/NewPassword";
import ResetPassword from "@/components/Resetpassword/ResetPassword";
import { Metadata } from "next";
const jwt = require("jsonwebtoken");

export const metadata: Metadata = {
  title: "Reset Password - Jablu.in",
  description:
    "Reset your password at Jablu.in, your trusted E-commerce website. Experience a wide range of unique clothing with premium designs.",
  keywords:
    "Jablu.in, E-commerce, Reset Password, Unique clothing, Premium designs, Exlaso, Vedant Bhavsar",

  metadataBase: new URL("https://jabluu.vercel.app"),
  openGraph: {
    title: "Reset Password - Jablu.in",
    url: "https://jabluu.vercel.app/Auth/Signin",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jabluu.vercel.app/icon.svg",
    description:
      "Reset your password at Jablu.in, your trusted E-commerce website. Experience a wide range of unique clothing with premium designs.",
  },
};

const Page = ({
  searchParams: { token },
}: {
  searchParams: { token: string };
}) => {
  let error = "";
  let email: string = "";
  if (token) {
    try {
      const Decoded_token: {
        exp: number;
        email: string;
      } = jwt.verify(token, process.env.JWT_KEY);
      email = Decoded_token.email;
      if (!email) {
        throw new Error("Invalid Token");
      }
    } catch (errorr) {
      if (errorr instanceof Error) {
        error = "Invalid Token";
      }
    }
  }
  return (
    <div className="py-[15vh]  flex items-start justify-center min-h-[120vh] sm:min-h-screen  bg-no-repeat bg-cover  bg-primary ">
      {error ? (
        <ResetPassword uperror={error} />
      ) : !token ? (
        <ResetPassword uperror={error} />
      ) : (
        <NewPassword
          email={email}
          token={token}
        />
      )}
    </div>
  );
};

export default Page;
