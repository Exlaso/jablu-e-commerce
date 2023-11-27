import {Dispatch, SetStateAction} from "react";

export interface ColorsType {
    hexcode: string,
    color: string
}

export interface API_signin {
    email: string,
    password: string
}

export type API_signinres  ={
    message:  {
        user_first_name: string;
        user_phone_number: string;
        user_email: string;
        unique_id: string
    } | undefined
    error: false
}

export type API_ERROR  = {
    message: string
    code:string
    error: true
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

export interface API_pretransaction {
    orderid: string,
    amount: number,
    email: string
}

export interface type_useCartContext {
    setTotal: Dispatch<SetStateAction<number>>,
    setShippingmethod: Dispatch<SetStateAction<typeofshippingmethods>>,
    setProgress: Dispatch<SetStateAction<number>>
    setRegion: Dispatch<SetStateAction<string>>
    setRegionstate: Dispatch<SetStateAction<string>>
    setPhoneno: Dispatch<SetStateAction<string>>
    setAddress1: Dispatch<SetStateAction<string>>
    setAddress2: Dispatch<SetStateAction<string>>
    setCity: Dispatch<SetStateAction<string>>
    setPincode: Dispatch<SetStateAction<string>>
    setName: Dispatch<SetStateAction<string>>
    setLastname: Dispatch<SetStateAction<string>>
    setSavedaddress: Dispatch<SetStateAction<boolean>>
    savedaddress: boolean,
    selectedaddress: string,
    setselectedaddress: Dispatch<SetStateAction<string>>
    products: {
        color: string,
        count: number,
        size: string,
        product_id: string,
        product: { images: string, price: number, title: string }
    }[],
    setproducts: Dispatch<SetStateAction<{
        color: string,
        count: number,
        size: string,
        product_id: string,
        product: { images: string, price: number, title: string }
    }[]>>
    total: number,
    shippingmethod: typeofshippingmethods,
    progress: number
    region: string
    regionstate: string
    phoneno: string
    address1: string
    address2: string
    city: string
    pincode: string
    name: string
    lastname: string
}

export interface API_AddAddressAndOrder {
    pincode: string;
    addressid: string;
    total: number;
    address2: string;
    regionstate: string;
    city: string;
    products: {
        color: string,
        count: number,
        size: string,
        product_id: string,
        product: { images: string, price: number, title: string }
    }[],
    user_name: string,
    shouldsaveaddress: boolean,
    email: string,
    address1: string;
    name: string;
    progress: number;
    shippingmethod: typeofshippingmethods;
    region: string;
    phoneno: string;
    lastname: string,
    userid: string,
    token: string
}