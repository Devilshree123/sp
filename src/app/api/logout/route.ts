import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        const response = NextResponse.json({
            message: "Logout Successful",
            success: true,
            status: 200
        })
    
        response.cookies.set('token', '', {httpOnly: true, expires: new Date(0)})
    
        return response
    } catch (error: any) {
        return NextResponse.json({
            message: "Error in Logout",
            success: false,
            status: 400
        })
    }
}