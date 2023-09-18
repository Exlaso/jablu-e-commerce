import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react'
import Accountmenu from './Accountmenu';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Accounticon = () => {
    const [accountmenu, setAccountmenu] = useState<boolean>(false);
    const router = useRouter();
  
  return (
  <>
    <Image
                  className="rounded-full "
                  onClick={() => {
                    if (status === "unauthenticated") {
                      router.push("/Signin");
                    } else if (status === "authenticated") {
                      setAccountmenu((e) => !e);
                    }
                  }}
                  src={"/static/icons/navbar/face.svg"}
                  width={30}
                  height={30}
                  alt="search"
                ></Image>
                <AnimatePresence>
                {accountmenu && (
                  <Accountmenu setAccountmenu={setAccountmenu} />
                )}
              </AnimatePresence></>
  )
}

export default Accounticon