import { Suspense } from "react";
import Signin from "./Signin";

const SignIn = (e:{searchParams:{callbackUrl:string}}) => {
const callbackUrl = e?.searchParams?.callbackUrl;
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen bg-primary  bg-no-repeat bg-cover  "
      // style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Suspense fallback={<></>}>
        <Signin callbackUrl={callbackUrl}/>
      </Suspense>
    </div>
  );
};
export default SignIn;
