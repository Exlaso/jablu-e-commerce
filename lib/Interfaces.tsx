import React, {Dispatch, SetStateAction} from "react";

export interface ColorsType {
    hexcode: string,
    color: string
}

export type Product = {
    id: string
    title: string
    price: number
    description: string
    category: string
    mrp: number
    images: string
    product_colors: Array<{
        color: string
        hexcode: string
    }>
    product_image_urls: Array<{
        image_url: string
    }>
    product_sizes: Array<{
        size: string
    }>
    product_rating?: {
        no_of_rated: number
        avg_ratings: any
    } | null
}

export interface Cartitems {
    color: string,
    count: number,
    product_id: string,
    size: string,
    product: {
        images: string,
        title: string,
        price: number
    }
}

export interface Wishlistitems {
    product_id: string,
    product: {
        description: string,
        images: string,
        title: string
    }
}

export interface DatawithProduct {
    Product: {

        id: string

        title: string

        price: number

        description: string,
        category: string,
        mrp: number,
        images: string,
        product_colors: Array<{
            color: string
        }>,
        product_image_urls: Array<{
            image_url: string
        }>,
        product_sizes: Array<{
            size: string
        }>,
        product_rating?: {
            no_of_rated: number,
            avg_ratings: any
        } | null
    }[]
}


export interface Productwithmetadata extends Product {
    color: string;
    size: string;
    count: number;
}

export interface Categories {
    name: string,
    description: string,
    image: string
}


export interface API_UpdatePassword_Body {
    user_email: string,
    user_password: string,
    token: string
}

export interface API_Resetpassword {
    oldpassword: string,
    email: string,
    newpassword: string
}

export interface GoogleAccountBody {
    email: string,
    name: string,
    given_name: string;
    picture: string;
    key: string;
}

export interface Emailsendinterface {
    to: string;
    Subject: string;
    Body: {
        Firstname: string;
        verifyurl: string;
    };
}


export interface errortype {
    error: boolean;
    message: string;
}
export interface typeofshippingmethods {
    title: string,
    description: string,
    price: number
}
export interface type_useCartContext {
    shippingmethod: typeofshippingmethods,
    setShippingmethod: Dispatch<SetStateAction<typeofshippingmethods>>,
    progress: number
    setProgress: Dispatch<SetStateAction<number>>
    region: string
    setRegion: Dispatch<SetStateAction<string>>
    regionstate: string
    setRegionstate: Dispatch<SetStateAction<string>>
    phoneno: string
    setPhoneno: Dispatch<SetStateAction<string>>
    address1: string
    setAddress1: Dispatch<SetStateAction<string>>
    address2: string
    setAddress2: Dispatch<SetStateAction<string>>
    city: string
    setCity: Dispatch<SetStateAction<string>>
    pincode: string
    setPincode: Dispatch<SetStateAction<string>>
    name: string
    setName: Dispatch<SetStateAction<string>>
    lastname: string
    setLastname: Dispatch<SetStateAction<string>>
}