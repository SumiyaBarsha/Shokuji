import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sumiyabarsha992:shokuji76@cluster0.w8yhlw9.mongodb.net/shokuji').then(()=>console.log('Connected to MongoDB'));
}