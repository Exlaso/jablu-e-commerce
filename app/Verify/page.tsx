import { IsvalidUrl } from "@/lib/db/hasura";
import Link from "next/link";










const SuccessVerificationPage = async ({
  searchParams,
}: {
  searchParams: { verifyurl: string };
}) => {
  const verifyurl = searchParams?.verifyurl;
  let isSuccess: boolean = false;
  
  if (verifyurl) {
    const res = await IsvalidUrl(verifyurl);
    if (res === true) {
      isSuccess = true;
    } else {
      isSuccess = false;
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 min-h-screen flex items-center justify-center py-[13vh]">
      {isSuccess ? <Success /> : <Failure />}
    </div>
  );
};
const Success = () => (
  <div className="backdrop-blur-md p-8 rounded-lg w-10/12 flex flex-col gap-4">
    <div>
      <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold text-6xl">
        <div className="jablutext ">Jablu </div>
        <div className="jablutext ">.</div>
        <div className="jablutext ">in</div>
      </div>
    </div>
    <h1 className="text-3xl font-bold text-blue-600 mb-4">
      Email Verified Successfully
    </h1>
    <p className="text-gray-700">
      Congratulations! Your email address has been successfully verified on
      Jablu.in.
    </p>
    <p className="text-gray-700">
      We want to extend our heartfelt gratitude to you for taking the time to
      verify your email on Jablu.in. Your commitment to this important step has
      not only contributed to enhancing the security of your account but also
      unlocked a world of possibilities on our app. With your email now
      verified, you can enjoy seamless access to all the features and services
      that Jablu.in has to offer. Your trust and support mean the world to us,
      and we&rsquo;re excited to have you as a part of our vibrant community. Should
      you ever need any assistance or have questions, please don&rsquo;t hesitate to
      reach out. Thank you once again for choosing Jablu.in, and we look forward
      to providing you with an exceptional user experience.
    </p>
    <Link href="/">
      <p className="mt-4 text-red-500 hover:underline block text-center">
        Return to Home
      </p>
    </Link>
  </div>
);
const Failure = () => (
  <div className="backdrop-blur-md p-8 rounded-lg  w-10/12 flex flex-col gap-4">
    <div>
      <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold text-6xl">
        <div className="jablutext ">Jablu </div>
        <div className="jablutext ">.</div>
        <div className="jablutext ">in</div>
      </div>
    </div>
    <h1 className="text-3xl font-bold text-red-600 mb-4">
      Something Went Wrong!
    </h1>
    <p className="text-gray-700">
      Try again By Login to your account -&gt; Account Settings -&gt; Personal
      -&gt; Resent Verification Code Information
    </p>
    <Link href="/">
      <p className="mt-4 text-blue-500 hover:underline block text-center">
        Return to Home
      </p>
    </Link>
  </div>
);
export default SuccessVerificationPage;
