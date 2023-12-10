import { EmailVerificationTemplate } from "@/components/Emailsend";
import { Emailsendinterface } from "@/lib/Interfaces";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req: NextRequest) {
const resend = new Resend(process.env.RESEND_KEY as string);
  try {
    const { to, Subject, Body }: Emailsendinterface = await req.json();
    const data = await resend.emails.send({
      from: "Jablu.in <Jablu@exlaso.in>",
      to: [to],
      subject: Subject,
      react: EmailVerificationTemplate({
        ...Body,
        verifyurl: process.env.NEXTAUTH_URL + "/Verify?verifyurl=" + Body.verifyurl,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
