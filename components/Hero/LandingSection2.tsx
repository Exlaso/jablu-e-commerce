import React, {FunctionComponent} from "react";
import Image from "next/image";
import {MdOutlineTravelExplore} from "react-icons/md";

interface typesforLandingSection2 {

}

const LandingSection2: FunctionComponent<typesforLandingSection2> = (props) => {
    return <section
        className={"min-h-screen h-screen from-70% to-100% from-black to-neutral-900 bg-gradient-to-b flex max-lg:flex-col"}>
        <div className={"flex "}>
            <div className={"h-full flex justify-start items-center flex-col bg-secondary w-max pt-[9vh] max-lg:hidden"}>
                <Image
                    className="invert dark:invert-0"
                    src={"/static/logo/jablu4.svg"}
                    alt={"jablulogo"}
                    width={80}
                    height={80}
                ></Image>
                <p className={"text-primary uppercase text-2xl font-normal my-auto tracking-[.3em] [word-spacing:.5em]"}
                   style={{
                       writingMode: "vertical-rl",
                   }}>
                    Embrace your inner fashion
                </p>
            </div>
            <div className={" w-[40%] h-screen max-lg:w-full py-[10vh] mx-10 flex flex-col justify-evenly"}>
                <div
                    className="text-[6rem]  max-md:text-6xl shadowhand  flex flex-col items-start justify-start flex-wrap">
                    <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold">
                        <div className="jablutext ">Jablu</div>
                        <div className="jablutext ">.</div>
                        <div className="jablutext ">in</div>
                    </div>
                </div>
                <h1 className={"capitalize text-5xl font-semibold tracking-wide"}>
                    Roronoa zoro oversize t-shirt
                </h1>
                <p className={"text-4xl "}>
                    Rs. 1200
                </p>
                <p className={"text-left leading-8 italic"}>
                    &quot;Discover your inner swordsman style with our collection of Roronoa Zoro oversized T-shirts.
                    Inspired by the iconic One Piece character, these shirts feature his signature three-sword emblem,
                    adding a touch of casual coolness to your wardrobe. Show your love for Zoro and the Straw Hat Pirates
                    with these stylish and comfortable tees. Perfect for anime enthusiasts and fans of the series. Get yours
                    now!&quot;
                </p>
                <button
                    className={"bg-secondary flex gap-1 justify-center items-center text-primary w-max py-2 px-5 rounded-full"}>
                    <MdOutlineTravelExplore className={"h-6 w-6"} /> See More
                </button>
            </div>
        </div>
        <div className={"flex justify-center items-center -rotate-6 mx-auto"}>
            <Image src={"/static/tshirt.png"} alt={" Roronoa zoro oversize t-shirt"} width={500} height={500}
                   className={"object-cover"}></Image>

        </div>
    </section>
}
export default LandingSection2