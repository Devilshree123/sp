import { getDataFromToken } from "@/Helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/User/userModel";
import { connect } from "@/Config/db.config";

connect()

export const GET = async(request: NextRequest) => {
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findOne({_id: userId}).select("-password")

        return NextResponse.json({
            message: "User found",
            success: true,
            status: 200,
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({
            message: "Error in me route",
            success: false,
            status: 400
        })
    }
}