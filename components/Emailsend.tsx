import React from "react";
import {Address, ShippingAddressDisplay} from "@/components/Checkout/AddressDisplay";
import {Product} from "@/lib/Interfaces";

export const EmailVerificationTemplate = ({
                                              Firstname,
                                              verifyurl,
                                          }: {
    Firstname: string;
    verifyurl: string;
}): JSX.Element => (
    <div className="flex flex-col gap-3 p-5">
        <h1 className="text-2xl font-bold">Dear {Firstname},</h1>
        <p className="flex">
            Thank you for choosing Jablu.in for your online services. To ensure the
            security of your account and to enable us to keep you updated with the
            latest offers and important information, we kindly request you to verify
            your email address. Email verification is a quick and straightforward
            process that helps us confirm your identity and maintain the integrity of
            our platform.
        </p>
        <p>
            To verify your email, please click on the verification link provided
            below:
        </p>
        <a
            href={verifyurl}
            className="underline text-blue-400"
        >
            {verifyurl}
        </a>
        <p>
            By confirming your email address, you will have uninterrupted access to
            all the features and benefits that Jablu.in has to offer. If you did not
            request this verification, or if you believe this email was sent to you in
            error, please disregard it. Your account&rsquo;s security is our priority,
            and we appreciate your cooperation in this matter.
        </p>
        <p>
            Thank you for choosing Jablu.in , and we look forward to serving you. If
            you have any questions or require assistance, please feel free to contact
            our support team at [Exlaso53@gmail.com].
        </p>
        Best regards,
        <br/>
        Vedant Bhavsar
        <br/>
        Customer Support Team
        <br/>
        <div className="jablutext text-6xl flex">
            <div>Jablu</div>
            <div>.</div>
            <div>in</div>
        </div>
    </div>
);
export const OrderConfirmationEmail = ({
                                           name,
                                           orderId,
                                           productdata,
                                           total,
                                           shippingprice,
                                           addressdata
                                       }: {
    name: string;
    orderId: string;
    productdata: {
        color: string,
        count: number,
        size: string,
        product_id: string,
        product: { images: string, price: number, title: string }
    }[];
    total: number,
    shippingprice: number,
    addressdata: Address
}): JSX.Element => {
    let subtotal = 0
    return (
        <main style={{display: "flex", flexDirection: "column", gap: "5px"}}>
            <h1 style={{fontSize: "2em"}}> Dear {name},</h1>
            <p>
                Thank you for your order from Jablu.in. We are pleased to confirm that your order #{orderId} has been
                received and is currently being processed.
            </p>
            <hr/>
            <ShippingAddressDisplay
                address={addressdata}
            />
            <hr/>
            <h2 style={{fontSize: "1.5em", fontWeight: "bold"}}>
                Order Details:
            </h2>
            <div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", margin: "4px"}}>
                    {productdata.map((e, i) => {
                        subtotal += (e.product.price * e.count);
                        return <div
                            style={{overflow: "hidden", transitionDuration: "300ms"}} key={i}> {i !== 0 &&
                            <hr style={{borderColor: "rgba(128,128,128,0.5)"}}/>}
                            <section
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "5fr 1fr",
                                    paddingTop: "4px",
                                    gap: "5px",
                                    justifyContent: "space-between",
                                    paddingLeft: "2px",
                                    paddingRight: "2px"
                                }}>
                                <div style={{display: "grid", gap: "5px", gridTemplateColumns: "90px 1fr"}}>
                                    <div style={{position: "relative"}}>
                                        <img
                                            style={{
                                                borderRadius: "5px",
                                                borderColor: "rgba(128,128,128,0.5)",
                                                borderStyle: "solid",
                                                borderWidth: "1px",
                                                padding: "1px",
                                                objectFit: "contain"
                                            }}
                                            src={e.product.images ?? "/static/shuz.png"} alt={e.product.title}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "inline-block",
                                            flexDirection: "column",
                                            justifyContent: "space-around"
                                        }}>
                                        <h3 style={{textTransform: "capitalize"}}>{e.product.title} x {e.count}</h3>
                                        <p style={{textTransform: "uppercase"}}>{e.color}/{e.size}</p>
                                    </div>
                                </div>
                                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <p>
                                        Rs. {(e.product.price * e.count).toLocaleString("en-US", {
                                        maximumFractionDigits: 2,
                                    })}
                                    </p>
                                </div>
                            </section>
                        </div>
                    })}
                </div>
                <hr style={{borderColor: "rgba(128,128,128,0.5)"}}/>
                <div
                    style={{
                        display: "grid",
                        flexDirection: "column",
                        gap: "2px",
                        position: "sticky",
                        bottom: "4px",
                        backgroundColor: "transparent",
                        borderColor: "rgba(128,128,128,0.5)",
                        borderStyle: "solid",
                        borderWidth: "0px",
                        padding: "4px",
                        borderRadius: "5px"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            gap: "2px",
                            padding: "4px",
                            justifyContent: "space-between",
                            borderColor: "rgba(128,128,128,0.5)",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1px"
                        }}>
                        <span className={"m-1"}>Subtotal</span>
                        <span className={"m-1"}>Rs. {(total - shippingprice).toLocaleString("en-US", {
                            maximumFractionDigits: 2,
                        })}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "4px",
                            gap: "2px",
                            justifyContent: "space-between",
                            borderColor: "rgba(128,128,128,0.5)",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1px"
                        }}>
                        <span className={"m-1"}>Delivery Charges</span>
                        <span className={"m-1"}>Rs. {shippingprice.toLocaleString("en-US", {
                            maximumFractionDigits: 2,
                        })}</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "4px",
                            gap: "2px",
                            position: "sticky",
                            justifyContent: "space-between",
                            borderColor: "rgba(128,128,128,0.5)",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1px",
                            fontSize: "1.2em",
                            fontWeight: "bold"
                        }}>
                        <span className={"m-1"}> Total </span>
                        <span className={"m-1"}> Rs. {(total).toLocaleString("en-US", {
                            maximumFractionDigits: 2,
                        })}</span>
                    </div>
                </div>
            </div>
            <br/>
            <p>
                Thank you for shopping with us. We hope you&rsquo;ll come back soon!
            </p>
            <p>
                Best regards,
            </p>
            <p>
                Jablu.in Support Team
            </p>
        </main>
    );
};


export const ProductReminderEmail = ({products, name,email}: { email:string,name: string, products: {product_id: string, product: {description: string, id: string, images: string, title: string}}[] }) => {
    return (
        `<div style="display: grid; flex-direction: column; gap: 3px; padding: 5px;">
            <h1 style="font-size: 2em; font-weight: bold;">Dear ${name},</h1>
            <p style="display: flex;">
                We noticed that you've shown interest in one of our products. We thought we'd remind you about it in case you're still interested.
            </p>
            <p>
                You can view the product here:
            </p>
            <div style="display: grid;flex-wrap: wrap gap: 5px;">

                ${products.map((e) => {
                    return `<div style="margin: 5px; height: auto;  padding: 10px; border: 1px solid #80808050; border-radius: 5px; width: 100%;">
                        <a href="https://jabluu.vercel.app/Product/${e.product_id} " 
                           style="text-transform: capitalize; display: flex; color: #6c757d; gap: 4px; flex-direction: row; justify-content: start; align-items: start; width: 100%; height: 100%; text-decoration: none;">
                            <img
                                src=${e.product.images}
                                style="object-fit: contain; margin-right: 5px" 
                                alt=${e.product.title}
                                width=100
                                height=100
                            />
                            <div>
                            <h3>${e.product.title}</h3>
                            <p style="font-size: small;">${(e.product.description.length > 40) ? (e.product.description.slice(0, 40) + "...") : (e.product.description)} </p>

</div>
                        </a>
                    </div>`
                }).join('')}
            </div>
            <p>
                If you have any questions or need further assistance, please feel free to contact our support team.
            </p>
            <p>
                Thank you for choosing our website, and we look forward to serving you.
            </p>
            <p>
            You can Unsubscribe from this email by clicking <a href="https://jabluu.vercel.app/Unsubscribe?email=${email}">here</a>
</p>
            Best regards,
            <br/>
            Your Website Support Team
        </div>`
    );
};

export const ResetPassword = ({
                                  name,
                                  url,
                              }: {
    name: string;
    url: string;
}): JSX.Element => {
    return (
        <main className="flex flex-col gap-3">
            <h1 className="text-4xl"> Dear {name},</h1>
            <p>
                We received a request to reset the password for your Jablu.in account.
                To complete the password reset process, please follow the instructions
                below:
            </p>
            <p>1. Click on the following link to reset your password:</p>
            <a
                href={url}
                className="underline"
            >
                {url}
            </a>
            <p>
                2. You will be directed to a page where you can create a new password.
                Please ensure that your new password is both secure and unique.
            </p>
            <p>
                3. After you&apos;ve successfully reset your password, you&apos;ll be able to log
                in to your Jablu.in account with your new credentials. If you did not
                initiate this password reset request, please disregard this email. Your
                account&apos;s security is important to us, and we recommend that you change
                your password if you suspect any unauthorized access. Thank you for
                using Jablu.in. If you have any questions or need further assistance,
                please don&apos;t hesitate to contact our support team at
                [Exlaso53@gmail.com].
            </p>
            <p>Best regards,</p>
            Jablu.in Support Team
        </main>
    );
};

export const AlertRegardingUpdatedPassword = ({
                                                  name,
                                              }: {
    name: string;
}): JSX.Element => {
    return (
        <main className="flex flex-col gap-3">
            <h1 className="text-4xl"> Dear {name},</h1>
            <p>
                We are writing to inform you that your password for your Jablu.in
                website account has been successfully updated. Your account is now
                secured with your new password.
            </p>
            <p>
                If you were the one who initiated this password change, there&apos;s no need
                to take any further action. Your account is now ready for use with the
                updated credentials.
            </p>
            <p>
                If you did not request this password change, or if you believe your
                website account&apos;s security has been compromised, please contact our
                support team immediately at [Support Email or Phone Number]. We take
                account security very seriously and will assist you in securing your
                account.
            </p>
            <p>
                Thank you for being a part of the Jablu.in website community. If you
                have any questions or need assistance with anything else related to our
                website, feel free to reach out to us at any time.
            </p>
            <p>Best regards,</p>
            <p> Jablu.in Support Team
            </p>
        </main>
    );
};
