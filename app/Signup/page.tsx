import Signup from "./Signup";

interface Props {
  params: {};
  searchParams: {
    callbackUrl: string;
  };
}


const SignIn = async (props: Props) => {
 
  
  return (
    <div
      className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen  bg-no-repeat bg-cover  "
      style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
    >
      <Signup
        searchParams={props.searchParams}
        params={props.searchParams}
      />
    </div>
  );
};
export default SignIn;
