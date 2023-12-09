import {NextRequest, NextResponse} from "next/server";
import {gqlClient} from "@/lib/service/client";
import {
    InsertAddressesDocument,
    InsertOrderProductsDocument,
    InsertOrdersDocument
} from "@/lib/gql/graphql";
import {API_AddAddressAndOrder} from "@/lib/Interfaces";
import {randomUUID} from "crypto";
import {Resend} from "resend";
import {OrderConfirmationEmail} from "@/components/Emailsend";

export const POST = async (req: NextRequest) => {
    try {
        const body: API_AddAddressAndOrder = await req.json();
        let addressid = body.addressid;
        if (body.addressid === ""){
        const InsertAddress = await gqlClient.request(InsertAddressesDocument, {
            active: body.shouldsaveaddress,
            address1: body.address1,
            address2: body.address2,
            city: body.city,
            firstname: body.name,
            lastname: body.lastname,
            phoneno: body.phoneno,
            regionstate: body.regionstate,
            pincode: body.pincode,
            region: body.region,
            userid: body.userid,
        }, {
            "Authorization": "Bearer " + body.token,
        });
        if (InsertAddress.insert_addresses?.affected_rows === 0) {
            return NextResponse.json({
                message: "Error in Inserting address",
                error: true,
            })
        }else{
            addressid = InsertAddress.insert_addresses?.returning?.at(0)?.address_id as string
        }
        }
        const InsertOrder = await gqlClient.request(InsertOrdersDocument, {
            order_id: "Order-" + randomUUID(),
            address_id: addressid,
            shipping_method: body.shippingmethod,
            total: body.total,
            user_id: body.userid,
        }, {
            "Authorization": "Bearer " + body.token,
        })

        if (InsertOrder.insert_orders?.affected_rows === 0) {
            return NextResponse.json({
                message: "Error in Inserting Order",
                error: true,
            })
        } else {

          await gqlClient.request(InsertOrderProductsDocument, {
                    user_id: body.userid,
                    orderProducts: body.products.map(e => ({
                        order_id: InsertOrder.insert_orders?.returning.at(0)?.order_id,
                        product_id: e.product_id,
                        color: e.color,
                        size: e.size,
                        count: e.count.toString()
                    }))
                },
                {
                    "x-hasura-admin-secret": process.env.Hasura_Secret!
                })

            const resend = new Resend(process.env.RESEND_KEY as string);
            await resend.emails.send({
                from: "Jablu.in <Jablu@exlaso.in>",
                to: [body.email],
                subject: `Order Confirmation on Jablu.in`,
                react: OrderConfirmationEmail({
                    name: body.user_name,
                    total: body.total,
                    addressdata: {
                        name: body.name + " " + body.lastname,
                        regionstate: body.regionstate,
                        city: body.city,
                        region: body.region,
                        pincode: body.pincode,
                        address1: body.address1,
                        address2: body.address2,
                        phoneno: body.phoneno,
                    },
                    orderId: InsertOrder.insert_orders?.returning.at(0)?.order_id as string,
                    shippingprice: body.shippingmethod.price,
                    productdata: body.products
                })
            });


            return NextResponse.json({
                message: InsertOrder.insert_orders?.returning.at(0)?.order_id as string,
                error: false,
            })
        }
    } catch
        (error) {
        console.error("Error in app/api/AddAddressAndOrder/route.ts: " + error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message,
                error: true,
            })


        }
    }


}