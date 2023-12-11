import {NextRequest, NextResponse} from "next/server";

export const dynamic = "force-dynamic"
export const GET = async (req: NextRequest) => {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }
    try {


        const url = new URL(`${process.env.NEXTAUTH_URL}/api/cronjob/SetFavouritedMail`);
        fetch(url)
        const resdata = {
            message: "success",
            error: false
        }
        return NextResponse.json(resdata)
    } catch (error) {
        console.error("Error in app/(home)/api/cron2/route.ts: " + error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message,
                error: true,
            })


        }
    }


}