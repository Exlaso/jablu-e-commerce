"use client"
import {Breadcrumbs} from "@mui/material";
import {usePathname} from "next/navigation";
import {FunctionComponent, useEffect, useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

interface CheckOutProgressProps {
}

const CheckOutProgress: FunctionComponent<CheckOutProgressProps> = () => {
    const [ProgressCount, setProgressCount] = useState(0);
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

    const breadcrumbs:string[] = [
        "Address",
        "Delivery",
        "Payment",
    ];
    return (
        <div className={""}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" color="info"/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs.map((e, index) => {
                        return <Link

                            className={`${index <= ProgressCount ? " text-blue-400 " : " text-secondary "}   underline  underline-offset-4`}
                            key={e}
                            href={"./" + e}>{e}</Link>
                    }
                )}
            </Breadcrumbs>
        </div>
    );
};

export default CheckOutProgress;
