import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ProductReminderEmail } from "@/components/Emailsend";
import { gqlClient } from "@/lib/service/client";
import { GetFavouriteSubscribersDocument } from "@/lib/gql/graphql";
import { message } from "@/utils/Senddatatotg";
export const dynamic = "force-dynamic";
export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    const user = await gqlClient.request(
      GetFavouriteSubscribersDocument,
      undefined,
      {
        "x-hasura-admin-secret": process.env.Hasura_Secret as string,
      },
    );

    const resend = new Resend(process.env.RESEND_KEY as string);
    for (const e of user.users) {
      if (e.wishlist_items.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 110));
        // message(`Sending email to ${e.user_email}`)
        resend.emails
          .send({
            from: "Jablu.in <Jablu@exlaso.in>",
            to: ["vedantbhavsar67@gmail.com", "exlaso53@gmail.com"],
            subject: `You have ${e.wishlist_items.length} products in your Favorites List`,
            html: ProductReminderEmail({
              name: e.user_first_name,
              products: e.wishlist_items,
              email: e.user_email,
            }),
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
    return NextResponse.json({
      message: "Success",
      error: false,
    });
  } catch (error) {
    console.error("Error in app/api/cronjob/route.ts: " + error);
    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message,
        error: true,
      });
    }
  }
};
