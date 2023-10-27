import { usePathname } from "next/navigation";
import { Fragment, FunctionComponent, useEffect, useState } from "react";

interface CheckOutProgressProps {}

const CheckOutProgress: FunctionComponent<CheckOutProgressProps> = () => {
  const [Progress, setProgress] = useState<string>(" from-[0%] to-[0%] ");
  const [ProgressCount, setProgressCount] = useState(0)
  const path: string = usePathname();
  useEffect(() => {
    switch (true) {
      case path.includes("Address"):
        setProgress(" from-[75%] to-[75%] ");
        setProgressCount(0)
        break;
        case path.includes("Delivery"):
            setProgress(" from-[50%] to-[50%] ");
            setProgressCount(1)
            break;
            case path.includes("Payment"):
                setProgress(" from-[25%] to-[25%] ");
                setProgressCount(2)
        break;

      default:
        break;
    }

    return () => {};
  }, [path]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly w-full relative">
        <div
          className={` w-full h-[2px] -top-[60%] absolute bg-gray-300 bg-gradient-to-l from-gray-300 to-red-600 ${Progress}`}
        ></div>
        {["Address", "Delivery", "Payment"].map((e, i) => {
            let css:string = "after:bg-gray-300";
            if (i <= ProgressCount) {
                css="after:bg-red-600"
            }
          return (
              <div key={i} className={`after:w-7 after:absolute ${css}   after:h-7 after:flex after:justify-center after:items-center after:rounded-full after:border after:bottom-[100%] justify-center items-center flex  relative`}>
                {e}
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOutProgress;
