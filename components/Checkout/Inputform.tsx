"use client"
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useCartContext} from "@/utils/StoreContext";
import {GetAddressQuery} from "@/lib/gql/graphql";
import {Checkbox, Input, Option, Select} from "@material-tailwind/react";
import {toast} from "sonner";

// interface Address_type {
//     name: string,
//     lastname: string,
//     phoneno: string,
//     address1: string,
//     address2: string,
//     pincode: string,
//     region: string,
//     regionstate: string,
//     city: string,
// }

export const Inputform: React.FC<{
    Addresses: GetAddressQuery
}> = (props) => {


    const {
        setProgress
        ,
        setSavedaddress,
        savedaddress,
        region,
        setRegion,
        regionstate,
        setRegionstate,
        phoneno,
        setPhoneno,
        address1,
        setAddress1,
        address2,
        setAddress2,
        city,
        setCity,
        pincode,
        setPincode,
        name,
        setName,
        lastname,
        setLastname,
        selectedaddress,
        setselectedaddress
    } = useCartContext();


    const router = useRouter();
    const [isdarkmode, setisdarkmode] = useState<boolean>(true);
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

        darkModeMediaQuery.addEventListener('change', changeHandler);

        setisdarkmode(darkModeMediaQuery.matches);

        return () => darkModeMediaQuery.removeEventListener('change', changeHandler);
    }, [setisdarkmode]);

    const handleformsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (region === "" || regionstate === ""){
            toast.error("Please Select Region and Region State")
            return;
        }
        setProgress(2)
        router.push("./Delivery")

    }
    return (<>
            <div>
                <fieldset className={"first:rounded-t-2xl last:rounded-b-2xl"}>
                    {props.Addresses.addresses.map(e => {

                        return <label key={e.address_id} htmlFor={e.address_id}
                                      className={` flex-col  w-full flex p-4 gap-3 ${e.address_id === selectedaddress ? "border-blue-600" : "border-gray-500/50"}  border first:rounded-t-2xl last:rounded-b-2xl `}>
                            <div className={"flex gap-2"}>
                                <input
                                    required={true}
                                    checked={e.address_id === selectedaddress}
                                    type="radio" id={e.address_id} onChange={() => {
                                    setselectedaddress(e.address_id)
                                }} name={"shippingmethods"}/>
                                <h3 className={"text-lg font-semibold  text-highlight"}>{e.firstname + " " + e.lastname}</h3>
                            </div>
                            <div className={"flex justify-between flex-col "}>
                                <p>{e.address1} , {e.address2} {e.city} - {e.pincode}, {e.regionstate} , {e.region}</p>
                                <span className={"text-highlight font-bold"}>{e.phoneno}
                        </span>

                            </div>
                        </label>
                    })}
                    <br/>
                    <button
                        className={"w-full my-2 py-4 px-4 rounded-lg bg-secondary text-primary disabled:brightness-50 duration-300"}
                        type={"button"}
                        disabled={selectedaddress === ""}
                        onClick={() => {
                            const address = props.Addresses.addresses.find(e => e.address_id === selectedaddress)
                            if (address) {
                                setPhoneno(address.phoneno);
                                setAddress1(address.address1);
                                setAddress2(address.address2);
                                setCity(address.city);
                                setPincode(address.pincode);
                                setRegion(address.region);
                                setRegionstate(address.regionstate);
                                setName(address.firstname);
                                setLastname(address.lastname);
                                setSavedaddress(false);
                                setProgress(2)
                                router.push("./Delivery")
                            }
                        }}
                    >
                        Use this Address
                    </button>
                    <span>You can Edit or Delete address in Account settings</span>
                    <p className={"border-y-2 border-gray-500 my-10 py-2 px-20 text-center"}>OR</p>

                </fieldset>
            </div>
            <form onSubmit={handleformsubmit} className={"flex flex-col gap-4"}>
                <div className={"w-full flex flex-col gap-2"}>
                    <h2>Contact</h2>
                    <Input
                        crossOrigin={""}
                        size={"lg"}
                        color={isdarkmode ? "white" : "black"}
                        value={phoneno}
                        onChange={e => setPhoneno(e.target.value)}
                        required={true}
                        label={"Phone Number"}
                    />
                </div>
                <div className={"w-full flex flex-col gap-4"}>
                    <h2>Shipping Address</h2>

                    <div className={"grid grid-cols-2 gap-4"}>
                        <Input
                            crossOrigin={""}
                            size={"lg"}
                            color={isdarkmode ? "white" : "black"}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required={true}
                            label={"First Name"}
                            className={"w-full"}
                        />
                        <Input
                            crossOrigin={""}
                            size={"lg"}
                            color={isdarkmode ? "white" : "black"}
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            required={true}
                            label={"Last Name "}
                            className={"w-full"}
                        />
                    </div>

                    <div className={"w-full flex flex-col gap-4"}>

                        <Input
                            crossOrigin={""}
                            size={"lg"}
                            color={isdarkmode ? "white" : "black"}
                            required={true}
                            label={"Address 1"}
                            className={"w-full"}
                            value={address1}
                            onChange={e => setAddress1(e.target.value)}
                        /><Input
                        crossOrigin={""}
                        size={"lg"}
                        color={isdarkmode ? "white" : "black"}
                        label={"Address 2"}
                        className={"w-full"}
                        value={address2}
                        onChange={e => setAddress2(e.target.value)}
                    />
                                             <Select

                            label={"Region State"}
                            size={"lg"}
                                                 className={isdarkmode ? "text-white" : "text-black"}
                            id="Region StateSelect"
                            value={regionstate}
                            onChange={(e) => {
                                setRegionstate(e as string)
                            }}
                        >
                            <Option value="">
                                <em>None</em>
                            </Option>
                            <Option value={"Gujarat"}>Gujarat</Option>
                        </Select>

                        <div className={"grid grid-cols-2 gap-4"}>
                            <Input
                                crossOrigin={""}
                                size={"lg"}
                                color={isdarkmode ? "white" : "black"}
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                required={true}
                                label={"City"}
                                className={"w-full"}
                            />
                            <Input
                                crossOrigin={""}
                                size={"lg"}
                                color={isdarkmode ? "white" : "black"}
                                required={true}

                                value={pincode}
                                onChange={e => setPincode(e.target.value)}
                                label={"Pincode"}
                                type={"number"}
                                className={"w-full"}
                            />
                        </div>
                        <Select

                            color={"gray"}
                            value={region}
                                                 className={isdarkmode ? "text-white" : "text-black"}
                            label="Region"
                            id={"RegionSelect"}
                            onChange={e => {
                                setRegion(e as string);
                            }}
                        >
                            <Option value={""}>None</Option>
                            <Option value={"India"}>India</Option>
                        </Select>
                        <div>

                        <Checkbox
                            labelProps={{
                                className: (isdarkmode ? "!text-white" : "!text-black"),
                            }}
                            crossOrigin={savedaddress}
                            color={"green"}
                            label="Save this Address for futher orders"
                            onChange={() => {
                                setSavedaddress(e => !e);
                            }}
                            checked={savedaddress}
                        />
                        </div>

                        <button className={"w-full py-4 px-4 rounded-lg bg-secondary text-primary"}
                                type={"submit"}
                        >
                            Continue to Delivery
                        </button>
                    </div>
                </div>

            </form>
        </>
    );
};
