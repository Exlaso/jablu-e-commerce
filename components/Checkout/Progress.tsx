"use client"
import {usePathname} from "next/navigation";
import React, {FunctionComponent, useEffect, useState} from "react";
import {useCartContext} from "@/utils/StoreContext";
import {Step, Stepper, Typography} from "@material-tailwind/react";
import {FaAddressCard} from "react-icons/fa6";
import {TbTruckDelivery} from "react-icons/tb";
import {MdOutlinePayments} from "react-icons/md";
import Link from "next/link";

interface CheckOutProgressProps {
}

const CheckOutProgress: FunctionComponent<CheckOutProgressProps> = () => {
    const [ProgressCount, setProgressCount] = useState(0);
    const {progress} = useCartContext()
    const [isdarkmode, setisdarkmode] = useState<boolean>(true);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        setisdarkmode(darkModeMediaQuery.matches);

        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setisdarkmode]);
    const path: string = usePathname();
    useEffect(() => {
        switch (true) {
            case path.includes("Address"):
                setProgressCount(0);
                break;
            case path.includes("Delivery"):
                setProgressCount(1);
                break;
            case path.includes("Payment"):
                setProgressCount(2);
                break;
            case path.includes("Success"):
                setProgressCount(-1);
                break;

            default:
                break;
        }

        return () => {
        };
    }, [path]);

    const breadcrumbs: {
        title: string,
        description?: string,
        icon?: JSX.Element,
        onclick: (e?: React.MouseEvent<HTMLAnchorElement>) => void
    }[] = [
        {
            icon: <FaAddressCard className={`h-5 w-5 ${isdarkmode?"text-black":"text-white"}`}/>,
            description: "Details About Your Address",
            title: "Address", onclick: () => {
            }
        },
        {

            icon: <TbTruckDelivery className={`h-5 w-5 ${isdarkmode?"text-black":"text-white"}`}/>,
            description: "Details About Your Delivery Method",
            title: "Delivery", onclick: (e) => {
                if (progress < 2) {
                    e?.preventDefault();
                }
            }
        },
        {
            icon: <MdOutlinePayments className={`h-5 w-5 ${isdarkmode?"text-black":"text-white"}`}/>,
            description: "Details About Your Payment Method",
            title: "Payment", onclick: (e) => {
                if (progress < 3) {
                    e?.preventDefault();
                }
            }
        },
    ];
    return (
        <div className="w-full h-[6rem] border-red-500  ">
            <Stepper
                activeStep={ProgressCount}
                className={" "}
                activeLineClassName={isdarkmode ? "bg-white" : "bg-black"}
                lineClassName={"bg-gray-500/50"}
            >
                {breadcrumbs.map((e, index) => {
                        return (
                                <Step key={e.title}
                                      className={"brightness-75 bg-gray-500"}
                                      completedClassName={`brightness-100 ${isdarkmode?"bg-white":"bg-black"}`}
                                      activeClassName={`brightness-100  ${isdarkmode?"bg-white":"bg-black"}` }
                                >
                            <Link
                                onClick={e.onclick}
                                key={e.title}
                                href={"./" + e.title}>
                                    {e.icon}
                                    <div className="absolute -bottom-[2.5rem] -left-2 w-max text-center">
                                        <Typography
                                            variant="h6"
                                            color={ProgressCount === index + 1 ? `${isdarkmode ? "white" : "black"}` : "gray"}
                                        >
                                            {e.title}
                                        </Typography>
                                    </div>
                            </Link>
                                </Step>

                        )
                    }
                )}

            </Stepper>
        </div>
    );
};

export default CheckOutProgress;
