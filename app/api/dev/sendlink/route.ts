import {NextRequest, NextResponse} from "next/server";
import {Resend} from "resend";
import {AccountLinkingEmail} from "@/components/Emailsend";
import data from "@/Data/Mem.json"

export const GET = async (req: NextRequest) => {
    try {

        const resend = new Resend(process.env.RESEND_KEY as string);

        const A = new Promise((resolve, reject) => {
            console.log(data)
            let oho: { name: string, success: boolean }[] = [];
             data.map(async (item) => {
                const mydata = await resend.emails.send({
                    from: "Jablu.in <Jablu@taskvn.in>",
                    to: [item.email],
                    subject: "Your Exlaso.rf.gd Account is Linked to Jablu.in",
                    html: AccountLinkingEmail({
                        name: item.name,
                        email: item.email
                    }),
                });
                oho.push({name: item.name, success: mydata.id !== undefined});


            });
            resolve(oho);
        })
        return NextResponse.json({
            message: await A,
            error: false,
        })
    } catch (error) {
        console.error("Error in app/api/dev/sendlink/route.ts: " + error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message,
                error: true,
            })


        }
    }


}