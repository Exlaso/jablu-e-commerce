import React, {FunctionComponent, ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";

interface typesforpage {
    children:ReactNode
}

const Layout: FunctionComponent<typesforpage> = ({children}) => {
    return <main className={"grid h-screen bg-[var(--highlight-color)]  relative grid-cols-[1fr,3fr] max-md:grid-cols-1"}>

        <div className={"h-full w-full max-md:hidden relative z-10"}>
            <Image src={"/static/logo/jablu4.svg"} alt={"Jablulogo"} width={100} height={100} className={"dark:invert-0 invert"}/>
            <Image src={"/figma/vector1.svg"} alt={"Vector"}
                   className={"absolute z-0 top-0 -right-[50%] w-[500px] h-[500px] "} width={600} height={600}/>
            <Image src={"/figma/vector2.svg"} alt={"Vector"} className={"absolute z-0 bottom-0 w-max h-max -right-[50%]"}
                   width={600} height={600}/>
            <Image src={"/figma/vector3.svg"} alt={"Vector"} className={"absolute z-10 bottom-0 w-max h-max left-0"}
                   width={600} height={600}/>


        </div>
        <div className={" z-20 h-full absolute max-md:hidden flex flex-col justify-start py-[10vh] left-0 top-0 bottom-0 w-[25%]  items-center"}>
            <Link href={"/"} className="flex items-center text-6xl mb-5 justify-center flex-wrap tracking-widest jablutext font-bold">
                <div className="jablutext ">Jablu</div>
                <div className="jablutext ">.</div>
                <div className="jablutext ">in</div>
            </Link>
            <p className={"text-gray-500"}>
                Embrace your inner fashion
            </p>
            <Image src={"/figma/tshirt.png"} alt={"tshirt"} className={"z-30 min-w-[800px] right-[-80%] top-[20%] absolute h-auto"} width={1000} height={1000}
            />
        </div>
        <div
            className={"bg-[var(--primary-color)] relative z-10 h-full w-full md:rounded-s-[2.5em] flex justify-center items-center"}>
            <div
                className={" flex flex-col w-full     gap-20  justify-center  items-start px-[20vw] max-md:px-[5vh] max-lg:px-[10vh] py-[10vh]"}>
                {children}
            </div>
        </div>
    </main>
}
export default Layout