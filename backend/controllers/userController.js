import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login User
const loginUser = async (req, res) => {

}
// Register User
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try{
        // check if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.status(400).json({success:false, message: "Email already exists"});
        }

        // validate email and password
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false, message: "Invalid email format"});
        }

    }catch(err){

    }
}

export { loginUser, registerUser};