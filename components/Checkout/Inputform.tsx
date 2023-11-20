"use client"
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import React from "react";
import {stateofindia} from "@/Data/Information";
import {useRouter} from "next/navigation";
import {useCartContext} from "@/utils/StoreContext";
import {GetAddressQuery} from "@/lib/gql/graphql";

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
    const handleRegionChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    };
    const handleStateChange = (event: SelectChangeEvent) => {
        setRegionstate(event.target.value as string);
    };
    const handleformsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                    <button className={"w-full my-2 py-4 px-4 rounded-lg bg-secondary text-primary disabled:brightness-50 duration-300"}
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
                    <TextField
                        value={phoneno}
                        onChange={e => setPhoneno(e.target.value)}
                        required={true}
                        label={"Phone Number"}
                    />
                </div>
                <div className={"w-full flex flex-col gap-4"}>
                    <h2>Shipping Address</h2>

                    <div className={"grid grid-cols-2 gap-4"}>
                        <TextField
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required={true}
                            label={"First Name"}
                            className={"w-full"}
                        />
                        <TextField
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            required={true}
                            label={"Last Name "}
                            className={"w-full"}
                        />
                    </div>

                    <div className={"w-full flex flex-col gap-4"}>

                        <TextField
                            required={true}
                            label={"Address 1"}
                            className={"w-full"}
                            value={address1}
                            onChange={e => setAddress1(e.target.value)}
                        /><TextField
                        label={"Address 2"}
                        className={"w-full"}
                        value={address2}
                        onChange={e => setAddress2(e.target.value)}
                    />
                        <FormControl required>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select
                                value={regionstate}
                                required={true}
                                label="Region *"
                                onChange={handleStateChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {stateofindia.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <div className={"grid grid-cols-2 gap-4"}>
                            <TextField
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                required={true}
                                label={"City"}
                                className={"w-full"}
                            />
                            <TextField
                                required={true}

                                value={pincode}
                                onChange={e => setPincode(e.target.value)}
                                label={"Pincode"}
                                type={"number"}
                                className={"w-full"}
                            />
                        </div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select

                                value={region}
                                required={true}
                                label="Region"
                                onChange={handleRegionChange}
                            >
                                <MenuItem value={"India"}>India</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            onChange={() => {
                                setSavedaddress(e => !e);
                            }}
                            checked={savedaddress}
                            control={<Checkbox defaultChecked color="success"/>}
                            label="Save this Address for futher orders"/>

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
