import {NextRequest, NextResponse} from "next/server";

export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url)
  return NextResponse.json({message:"success"},{
      headers: {
          "Set-Cookie": `jablu-chkotps=${searchParams.get("chkotps")}; Path=/;  Max-Age=10000`,
      },
  })
}