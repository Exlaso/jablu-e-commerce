'use client'
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface BackButtonProps {
    
}
 
const BackButton: FunctionComponent<BackButtonProps> = () => {
    const router = useRouter();
    return (  <span
        className="hover:underline w-fit p-2 cursor-pointer capitalize text-[#3B82F7]"
        onClick={() => {
          router.back();
        }}
      >
        {"<"} Back
      </span> );
}
 
export default BackButton;