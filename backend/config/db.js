import mongoose from "mongoose";
require("dotenv").config();

export const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
    }).then(()=>console.log('Connected to MongoDB'));
}