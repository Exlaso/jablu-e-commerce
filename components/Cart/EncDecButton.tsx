import { dataforproductwithmetadata } from "@/lib/Interfaces";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface IncDecButtonProps {
  data: dataforproductwithmetadata;
  setCarted: Dispatch<SetStateAction<dataforproductwithmetadata[]>>;
}

const IncDecButton: FunctionComponent<IncDecButtonProps> = ({
  data,
  setCarted,
}) => {
  const IncrementHandler = (productdata: dataforproductwithmetadata) => {
    setCarted((prev) => {
      return [
        ...prev
          .filter(
            (e) =>
              e.id === productdata.id &&
              e.color === productdata.color &&
              e.size === productdata.size
          )
          .map((e) => ({ ...e, count: e.count + 1 })),
        ...prev.filter(
          (e) =>
            !(
              e.id === productdata.id &&
              e.color === productdata.color &&
              e.size === productdata.size
            )
        ),
      ];
    });
  };
  const DecrementHandler = (productdata: dataforproductwithmetadata) => {
    if (productdata.count === 1) {
      setCarted((prev) => {
        return [
          ...prev.filter(
            (e) =>
              !(
                e.id === productdata.id &&
                e.color === productdata.color &&
                e.size === productdata.size
              )
          ),
        ];
      });
    } else {
      setCarted((prev) => {
        return [
          ...prev
            .filter(
              (e) =>
                e.id === productdata.id &&
                e.color === productdata.color &&
                e.size === productdata.size
            )
            .map((e) => ({ ...e, count: e.count - 1 })),
          ...prev.filter(
            (e) =>
              !(
                e.id === productdata.id &&
                e.color === productdata.color &&
                e.size === productdata.size
              )
          ),
        ];
      });
    }
  };

  return (
    <div className=" px-4 py-2 text-xl bg-transparent text-black border border-black rounded-full w-28 flex justify-between">
      <button
        type="button"
        onClick={() => DecrementHandler(data)}
      >
        -
      </button>
      <span>{data.count}</span>
      <button
        type="button"
        onClick={() => IncrementHandler(data)}
      >
        +
      </button>
    </div>
  );
};

export default IncDecButton;
