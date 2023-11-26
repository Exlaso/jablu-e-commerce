// import {
//     AlertRegardingUpdatedPassword,
//     EmailVerificationTemplate,
//     OrderConfirmationEmail, ProductReminderEmail,
//     ResetPassword
// } from "@/components/Emailsend";
// import {Product} from "@/lib/Interfaces";
// import getAllProducts from "@/utils/GetProduct";
//
// const Page = async () => {
//     // redirect("/",RedirectType.replace);
//     const products = await getAllProducts();
//     return (
//
//         <div className="py-[15vh] px-[5vw] flex flex-col gap-10">
//             <ProductReminderEmail
//                 name={"Vedant"}
//                 products={products as Product[]}
//             />
//             <br/>
//
//             <OrderConfirmationEmail
//                 addressdata={{
//                     name: "exlaos",
//                     city: "modasa",
//                     regionstate: "gujarat",
//                     region: "india",
//                     address1: "address1",
//                     address2: "address2",
//                     pincode: "383315",
//                     phoneno: "1234567890"
//
//
//                 }}
//                 name={"Exlaos"}
//                 orderId={"123"}
//                 shippingprice={999}
//                 total={1000}
//                 productdata={
//                     [
//                         {
//                             color: "red",
//                             size: 'xs',
//                             product_id: "12",
//                             product: {
//                                 images: '/static/shuz.jpg',
//                                 title: "test",
//                                 price: 23
//                             },
//                             count: 3
//                         },
//                         {
//                             color: "red",
//                             size: 'xs',
//                             product_id: "12",
//                             product: {
//                                 images: '/static/shuz.jpg',
//                                 title: "test",
//                                 price: 23
//                             },
//                             count: 3
//                         }
//                     ]
//                 }
//             />
//             <hr/>
//             <EmailVerificationTemplate Firstname={"Vedant"} verifyurl="https://jablu.vercel.app"/>
//             <hr/>
//             <ResetPassword name={"Vedant"} url="https://jablu.vercel.app"/>
//             <hr/>
//             <AlertRegardingUpdatedPassword name={"Vedant"}/>
//         </div>
//     );
// };
//
// export default Page;
import {FunctionComponent} from "react";
import {AccountLinkingEmail} from "@/components/Emailsend";

interface typesforpage {

}

const page: FunctionComponent<typesforpage> = () => {
    // redirect("/", RedirectType.replace);
    return <div className="py-[15vh]">
        <AccountLinkingEmail name={"Vedant"}  email={"vedat"}/>
    </div>
}
export default page