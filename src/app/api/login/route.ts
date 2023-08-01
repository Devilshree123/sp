import { NextRequest, NextResponse  } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import {connect} from '@/Config/db.config'
import User from '@/models/User/userModel'

connect()

export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody

        const user = await User.findOne({ email })

        if(!user) {
            return NextResponse.json({
                message: 'User not found',
                success: false,
                status : 404
            })
        }

        // compare password

        const isValid = await bcryptjs.compare(password, user.password)

        if(!isValid) {
            return NextResponse.json({
                message: 'Invalid credentials',
                success: false,
                status: 401
            })
        }

        //create token data for user

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1h'})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            status: 200
        })

        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response

    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false,
            status: 500
        })
}
}