import { connect } from "@/Config/db.config";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'

import User from "@/models/User/userModel";

connect()   


export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json()
        const{ name, email, password} = reqBody

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({message: 'User already exists', success: false, status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "User created Successfully",
            success: true,
            status: 201,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json(
            {message: error.message, status: 500, success: false},
            
        )
    }
}