import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login User
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        // check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({success:false, message: "Incorrect password"});
        }

        // create and send token
        const token = createToken(user._id);
        res.json({success: true, token});

        
    }catch(err){
        console.error(err);
        return res.status(500).json({success: false, message: "Server error"});
    }
}

//create token
 const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// Register User
const registerUser = async (req, res) => {
  
    const {name, email ,password} = req.body;
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

        if(!validator.isLength(password, {min: 6})){
            return res.status(400).json({success:false, message: "Password must be at least 6 characters long"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token: token});

    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export { loginUser, registerUser};