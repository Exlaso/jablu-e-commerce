"use client"
import {Breadcrumbs} from "@mui/material";
import {usePathname} from "next/navigation";
import React, {FunctionComponent, useEffect, useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import {useCartContext} from "@/utils/StoreContext";

interface CheckOutProgressProps {
}

const CheckOutProgress: FunctionComponent<CheckOutProgressProps> = () => {
    const [ProgressCount, setProgressCount] = useState(0);
    const {progress} = useCartContext()
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

            default:
                break;
        }

        return () => {
        };
    }, [path]);

    const breadcrumbs: {
        title: string,
        onclick: (e?: React.MouseEvent<HTMLAnchorElement>) => void
    }[] = [
        {
            title: "Address", onclick: () => {
            }
        },
        {
            title: "Delivery", onclick: (e) => {
                if (progress < 2) {
                    e?.preventDefault();
                }
            }
        },
        {
            title: "Payment", onclick: (e) => {
                if (progress < 3) {
                    e?.preventDefault();
                }
            }
        },
    ];
    return (
        <div className={""}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" color="info"/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs.map((e, index) => {
                        return <Link
                            onClick={e.onclick}
                            className={`${index <= ProgressCount ? " text-blue-400 " : " text-secondary "}   underline  underline-offset-4`}
                            key={e.title}
                            href={"./" + e.title}>{e.title}</Link>
                    }
                )}
            </Breadcrumbs>
        </div>
    );
};

export default CheckOutProgress;
