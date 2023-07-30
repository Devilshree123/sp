import { NextRequest, NextResponse } from "next/server";

export const GET = async( req: NextRequest) => {
    return NextResponse.json({
        success: true,
        messages: "Response send successfully",
        status: 201
        
    })
}