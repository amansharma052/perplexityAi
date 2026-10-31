import express from "express";
import mongoose from "mongoose";

async function connectDB(){
    try {
         await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.log("Error connecting to the database",error)
    }
}
export default connectDB