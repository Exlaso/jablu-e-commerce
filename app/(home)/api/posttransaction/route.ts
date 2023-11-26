import {NextRequest, NextResponse} from "next/server";

const a = async (res: NextRequest) => {
    const data = await res.json();
    return NextResponse.json({body:data});
}
export {a as GET, a as POST}