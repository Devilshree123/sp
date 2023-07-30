import { connect } from "@/Config/db.config";
import { NextResponse, NextRequest } from "next/server";

connect()   

export const POST = async(req: NextRequest) => {
    try {

        const reqBody = await req.json()

        return NextResponse.json({
            success: true,
            messages: "User Created Successfully",
            status: 201,
            lawda: reqBody
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            messages: error.message,
            status: 500
        })
    }
}
    
