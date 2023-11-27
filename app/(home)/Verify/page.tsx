import { IsvalidUrl } from "@/lib/db/hasura";
import Link from "next/link";
import Button from "@/components/Utils/Button";
import Authdiv from "@/components/Authdiv";










const SuccessVerificationPage = async ({
  searchParams,
}: {
  searchParams: { verifyurl: string };
}) => {
  const verifyurl = searchParams?.verifyurl;
  let isSuccess: boolean = false;
  
  if (verifyurl) {
    const res = await IsvalidUrl(verifyurl);
    isSuccess = res === true;
  }

  return (
    <div  className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen bg-primary text-secondary    bg-no-repeat bg-cover  ">
      {isSuccess ? <Success /> : <Failure />}
    </div>
  );
};
const Success = () => (
  <Authdiv>
    <div>
      <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold text-6xl">
        <div className="jablutext ">Jablu </div>
        <div className="jablutext ">.</div>
        <div className="jablutext ">in</div>
      </div>
    </div>
    <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
      Email Verified Successfully
    </h1>
    <p >
      Congratulations! Your email address has been successfully verified on
      Jablu.in.
    </p>
    <p >
      We want to extend our heartfelt gratitude to you for taking the time to
      verify your email on Jablu.in. Your commitment to this important step has
      not only contributed to enhancing the security of your account but also
      unlocked a world of possibilities on our app. With your email now
      verified, Thank you once again for choosing Jablu.in, and we look forward
      to providing you with an exceptional user experience.
    </p>
    <Link href="/" className={"flex justify-center items-center"}>
      <Button color={"primary"} className="mt-4  text-red-500 hover:underline block text-center">
        Return to Home
      </Button>
    </Link>
  </Authdiv>
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
