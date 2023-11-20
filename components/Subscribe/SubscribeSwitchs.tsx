"use client"
import React, {FunctionComponent, useState} from "react";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import {gqlClient} from "@/lib/service/client";
import {UpdateSubscribedataDocument} from "@/lib/gql/graphql";
import {toast} from "sonner";

interface typesforSubscribeSwitchs {
    favr: boolean,
    cart: boolean,
    update: boolean,
    new: boolean,
    email: string
    admintoken:string
}

const SubscribeSwitches: FunctionComponent<typesforSubscribeSwitchs> = (props) => {
    const [favourite, setfavourite] = useState<boolean>(props.favr);
    const [cart, setcart] = useState<boolean>(props.cart);
    const [update, setupdate] = useState<boolean>(props.update);
    const [newrelease, setnewrelease] = useState<boolean>(props.new);

    const OnSave = () => {
        const updatesub = gqlClient.request(UpdateSubscribedataDocument, {
            email: props.email,
            updateobject: {
                update,
                cart,
                favourite,
                newreleases: newrelease
            }
        },{
            "x-hasura-admin-secret": props.admintoken

        })
        toast.promise(updatesub, {
            loading: "Updating Subscribed Data",
            success: "Successfully Updated Subscribed Data",
            error: "Failed to Update Subscribed Data"

        })
    }
    return <>
        <FormGroup>
            <FormControlLabel control={<Switch
                checked={favourite}
                onChange={e => {
                    setfavourite(e.target.checked)
                }}
            />} label="Favourite Items Reminder"/>
            <FormControlLabel control={<Switch
                checked={cart}
                onChange={e => {
                    setcart(e.target.checked)
                }}
            />} label="Cart Items Reminder"/>
            <FormControlLabel control={<Switch
                checked={update}
                onChange={e => {
                    setupdate(e.target.checked)
                }}
            />} label="New Update Alert"/>
            <FormControlLabel control={<Switch
                checked={newrelease}
                onChange={e => {
                    setnewrelease(e.target.checked)
                }}
            />} label="New Product/Collection Release"/>
        </FormGroup>

        <button type={"button"} onClick={OnSave}
                className={"p-3 flex gap-1 bg-secondary text-primary rounded-lg w-max"}>
            <SaveIcon/> Save Changes
        </button>
    </>

}
export default SubscribeSwitches