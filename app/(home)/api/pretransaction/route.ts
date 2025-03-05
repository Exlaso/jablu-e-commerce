import { NextRequest, NextResponse } from "next/server";
import { API_pretransaction } from "@/lib/Interfaces";

const https = require("https");
/*
 * import checksum generation utility
 * You can get this utility from https://developer.paytm.com/docs/checksum/
 */
const PaytmChecksum: {
  generateSignature: (params: string, key: string) => Promise<string>;
} = require("paytmchecksum");
export const POST = async (req: NextRequest) => {
  try {
    const data: API_pretransaction = await req.json();
    const paytmParams = {
      body: {},
      head: {},
    };

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.PAYTM_MID,
      websiteName: "Jablu.in",
      orderId: data.orderid,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/posttransaction`,
      txnAmount: {
        value: data.amount,
        currency: "INR",
      },
      userInfo: {
        custId: "CUST_001",
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.PAYTM_MERCHANT_KEY as string,
    );

    paytmParams.head = {
      signature: checksum,
    };

    const post_data = JSON.stringify(paytmParams);
    const requestAsync = () => {
      return new Promise((resolve) => {
        const options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in",

          /* for Production */
          // hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MID}&orderId=${data.orderid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        let response = "";
        const post_req = https.request(options, function (post_res: any) {
          post_res.on("data", function (chunk: any) {
            response += chunk;
          });

          post_res.on("end", function () {
            resolve(resolve);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };
    const myr = await requestAsync();
    return NextResponse.json({ message: myr });
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error in pretransaction ", e);
      return NextResponse.json({
        error: true,
        message: e.name + ": " + e.message,
      });
    }
  }
};
