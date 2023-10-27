import { Suspense } from "react";
import Signup from "./Signup";

interface Props {}

const SignIn = async (e:{searchParams:{callbackUrl:string}}) => {
  const callbackUrl = e?.searchParams?.callbackUrl;
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh]  bg-primary sm:min-h-screen  bg-no-repeat bg-cover  "
      // style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Suspense fallback={<></>}>
        <Signup callbackUrl={callbackUrl}/>
      </Suspense>
    </div>
  );
};
export default SignIn;
