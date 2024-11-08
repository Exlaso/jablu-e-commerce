import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export const DELETE = async () => {
    try {
 (await cookies()).delete("jablu_jwt_token")
        const token = (await cookies()).get("jablu_jwt_token");
        if (!token?.value) {
            return NextResponse.json({message: "Success", error: false});

        } else {
            return NextResponse.json({message: "Something went wrong", error: true, code: "A-DC-I"});

        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: error, error: true, code: "A-DC-I"});

    }
};
