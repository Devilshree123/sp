import mongoose from "mongoose";

export const connect = async() => {
    try {
        mongoose.connect(process.env.mongo_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Database connected successfully")
        })

        connection.on('error', (err: any) => {
            console.log("Connection error" +err)
            process.exit()
        })
    } catch (error) {
        console.log("Error connecting to database");
        
    }
}