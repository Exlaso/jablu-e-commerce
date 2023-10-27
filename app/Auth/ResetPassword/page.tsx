// pages/reset-password.tsx

import ResetPassword from "@/components/Resetpassword/ResetPassword";




const Page = () => {

  return (
    <div
    className="py-[15vh] flex items-start justify-center min-h-[120vh] sm:min-h-screen  bg-no-repeat bg-cover  "
    style={{ backgroundImage: "url('/static/hero/background.jpg')" }}
  >
     <ResetPassword/> 
    </div>
  );
};

export default Page;
