import { Suspense } from "react";
import Signin from "./Signin";

const SignIn = () => {
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen  bg-no-repeat bg-cover  "
      style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Suspense fallback={<></>}>
        <Signin />
      </Suspense>
    </div>
  );
};
export default SignIn;
