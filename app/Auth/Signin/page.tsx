import { getServerSession } from "next-auth";
import Signin from "./Signin";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in - Jablu.in",
  description:
    "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
  keywords: "Jablu.in, E-commerce, Signin, Jablu, Exlaso, Vedant Bhavsar",
  icons: {
    icon: "https://jablu.exlaso.in/icon.svg",
  },
 
    metadataBase: new URL("https://jablu.exlaso.in"),
 openGraph: {
    title: "Sign in - Jablu.in",
    url: "https://jablu.exlaso.in/Auth/Signin",
    siteName: "Jablu.in",
    type: "website",
    images: "https://jablu.exlaso.in/icon.svg",
    description:
      "Jablu.in is your E-commerce destination. Sign in to explore a wide range of products.",
  },
};

const SignIn = async (e: { searchParams: { callbackUrl: string } }) => {
  const callbackUrl = e?.searchParams?.callbackUrl;
  const user = await getServerSession();
  if (!!user?.user?.email) {
    redirect(`${process.env.NEXTAUTH_URL}/Account/Information`)
  }
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen bg-primary  bg-no-repeat bg-cover  "
      // style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
        <Signin callbackUrl={callbackUrl} />
    </div>
  );
};
export default SignIn;
