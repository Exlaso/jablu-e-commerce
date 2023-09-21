import { Suspense } from "react";
import Signup from "./Signup";

interface Props {}

const SignIn = async (props: Props) => {
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen  bg-no-repeat bg-cover  "
      style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Suspense fallback={<></>}>
        <Signup />
      </Suspense>
    </div>
  );
};
export default SignIn;
